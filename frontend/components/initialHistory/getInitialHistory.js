import {firstRandomRecord} from "./firstRandomRecord.js";
import {historyRecordArt} from "./welcome-ascii-art/WelcomeASCIIArt.js";

export const getInitialHistory = (initialData) => {
    return [historyRecordArt, firstRandomRecord(initialData)]
}