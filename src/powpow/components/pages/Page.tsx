import React, { useRef,useMemo } from "react";
import { getSystemInfoSync } from '@tarojs/taro'
import View from '../taro/View';

type Edge = 'top' | 'right' | 'bottom' | 'left';
const Page = (props: {
    edges?: Edge[];
    children?: any;
    style?: React.CSSProperties | React.CSSProperties[];
}) => {
    const { edges = [], children, style } = props;
    const styles = useMemo(() => {
        let baseStyle:React.CSSProperties = {};
        if(Array.isArray(style)){
            style.forEach((v,i) => {
                baseStyle = Object.assign(baseStyle,v);
            })
            return baseStyle;
        }
        return Object.assign(baseStyle,typeof style == 'object' ? style : {});
    },[style])
    const sys = useRef(getSystemInfoSync()).current;
    const insets = useRef({
        top: sys.safeArea.top,
        bottom: sys.safeArea.bottom - sys.safeArea.height,
        left: sys.safeArea.left,
        right: sys.safeArea.right
    }).current;
    const screenSize = useRef(function () {
        let size = { width: sys.screenWidth, height: sys.screenHeight };
        if (edges.indexOf('bottom') != -1) {
            size.height = size.height - insets.bottom;
        }
        if (edges.indexOf('top') != -1) {
            size.height = size.height - insets.top;
        }
        return size;
    }()).current;

    return (
        <View style={[screenSize,fxs.f1, styles]}>
            {children}
        </View>
    )
}
export default Page;