import React, { createContext } from 'react';


export interface iHtml {
    lang: keyof { "en-US": "", "he-IL": "" },
    dir: keyof { ltr: "", rtl: "" },
}

export const htmlDefault: iHtml = { lang: 'he-IL', dir: 'rtl' };

const HTMLContext = createContext({
    html: htmlDefault,
    setHtml: (config: iHtml) => { }
});

export default HTMLContext;
