import { render } from '@lit-labs/ssr';
import { html } from 'lit';
import './components/test-parent-component.js';

export function* frontendEntryPoint({randomValue}) {
    yield `
    <!doctype html>
    <html lang="en">
      <head>
        <title>Personal Terminal</title>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap')
        </style>
      </head>
          <!-- On browsers that don't yet support native declarative shadow DOM, a
        paint can occur after some or all pre-rendered HTML has been parsed,
        but before the declarative shadow DOM polyfill has taken effect. This
        paint is undesirable because it won't include any component shadow DOM.
        To prevent layout shifts that can result from this render, we use a
        "dsd-pending" attribute to ensure we only paint after we know
        shadow DOM is active. -->
      <style>
        body[dsd-pending] {
          display: none;
        }
        body {
          margin: 0;
          background: black;
        }
      </style>
      <body dsd-pending>
        <script>
          if (HTMLTemplateElement.prototype.hasOwnProperty('shadowRoot')) {
            // This browser has native declarative shadow DOM support, so we can
            // allow painting immediately.
            document.body.removeAttribute('dsd-pending');
          }
        </script>
  `;
    yield* render(html`<test-parent-component randomValue=${randomValue}></test-parent-component>`);
    yield `
      <script type="module">
        // Start fetching the Lit hydration support module (note the absence
        // of "await" -- we don't want to block yet).
        const litHydrateSupportInstalled = import(
          './node_modules/@lit-labs/ssr-client/lit-element-hydrate-support.js'
        );

        if (!HTMLTemplateElement.prototype.hasOwnProperty('shadowRoot')) {
          // Fetch the declarative shadow DOM polyfill.
          const {hydrateShadowRoots} = await import(
            './node_modules/@webcomponents/template-shadowroot/template-shadowroot.js'
          );

          // Apply the polyfill. This is a one-shot operation, so it is important
          // it happens after all HTML has been parsed.
          hydrateShadowRoots(document.body);

          // At this point, browsers without native declarative shadow DOM
          // support can paint the initial state of your components!
          document.body.removeAttribute('dsd-pending');
        }
        await litHydrateSupportInstalled;

        // Import component modules causing them to become interactive
        import('./frontend/components/test-parent-component.js');
      </script>
    </body>
    </html>
  `;
}
