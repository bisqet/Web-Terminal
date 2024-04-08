import path from "path";

export const config = {
    favicon: path.join(__dirname , '/frontend/img/favicon.jpg'),
    port: {http: 3000, https: 443},
    frontendEntryPoint: path.join(__dirname , './frontend/index.html'),
    root: path.join(__dirname , './frontend/')
}