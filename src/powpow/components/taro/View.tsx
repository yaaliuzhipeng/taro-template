import React from "react";
import { View as TRView, ViewProps as TRViewProps } from "@tarojs/components";
import { useMemo } from "react";
import useRestProps from "../../hooks/useRestProps";

interface ViewProps extends Omit<TRViewProps,'style'> {
    children?:any;
    style?: React.CSSProperties | React.CSSProperties[];
}
const DefaultFlexStyle = {display:'flex',flex:1,flexDirection:'column',boxSizing: 'border-box'};
const View = (props:ViewProps) => {

    const {style,children} = props;
    const styles = useMemo(() => {
        if(Array.isArray(style)){
            let b = {};
            style.forEach((v,i) => {
                Object.assign(b,v);
            })
            return b;
        }
        return style;
    },[style])
    const restProps = useRestProps(props,['children','style'])

    return (
        <TRView style={{...DefaultFlexStyle,...styles}} {...restProps}>
            {children}
        </TRView>
    )
}
export default View;