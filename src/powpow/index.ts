import { getSystemInfoSync } from '@tarojs/taro';
import { flexStyles as fxs } from './theme/FlexStyles';

const global:any = globalThis;
global.getSafeAreaInsets = () => {
    let { safeArea } = getSystemInfoSync();
    let b = safeArea.bottom - safeArea.height;
    return { top: safeArea.top, left: safeArea.left, right: safeArea.right, bottom: b }
}
global.fxs = fxs;