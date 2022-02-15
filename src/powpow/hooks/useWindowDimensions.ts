import React, { useRef } from 'react';
import { getSystemInfoSync } from '@tarojs/taro';

const useWindowDimensions:() => [{width:number;height:number},{top:number;right:number;bottom:number;left:number}] = () => {
    const sys = useRef(getSystemInfoSync()).current;
    const insets = useRef({
        top: sys.safeArea.top,
        bottom: sys.safeArea.bottom - sys.safeArea.height,
        left: sys.safeArea.left,
        right: sys.safeArea.right
    }).current;
    return [{width: sys.screenWidth,height: sys.screenHeight,},insets]
}
export default useWindowDimensions;