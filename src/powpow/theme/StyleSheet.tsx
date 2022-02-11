import React from "react";

export type StyleProperties = {
    [key:string]: React.CSSProperties
}
class StyleSheet {
    static create<Styles extends StyleProperties>(styles: Styles): Styles {
        return styles;
    }
    static combine(args:any): StyleProperties {
        let s = {};
        if(args === undefined) {
            return s;
        }
        if(Array.isArray(args)) {
            for(let arg of args) {
                s = Object.assign(s,arg);
            }
        }
        return s;
    }
}
export default StyleSheet;