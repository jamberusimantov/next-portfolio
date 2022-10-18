import { iHtmlAction } from "./reducers"
export interface iHtml {
    lang: keyof { "en-US": "", "he-IL": "" },
    dir: keyof { ltr: "ltr", rtl: "rtl" },
}
export const SET_HTML = 'SET_HTML'
export const setHtml = (payload: iHtml): iHtmlAction => ({ type: SET_HTML, payload })
