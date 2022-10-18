import { combineReducers } from 'redux';
import { SET_HTML, iHtml } from './actions';


export const htmlDefault: iHtml = {
    lang: 'he-IL',
    dir: 'rtl'
};
export interface iHtmlAction {
    type: string,
    payload: iHtml
};


const htmlReducer = (state = htmlDefault, action: iHtmlAction): iHtml => {
    switch (action.type) {
        case SET_HTML: return { ...action.payload };
        default: return state;
    }
};

export default combineReducers({
    html: htmlReducer,
});