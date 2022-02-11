import React, { useState, useRef, useMemo, useEffect } from 'react';
import {getSystemInfoSync} from '@tarojs/taro'
import { Text, Image } from '@tarojs/components'
import { StyleSheet } from '!/src/powpow/theme';
import { View } from '!/src/powpow/components';

export interface TabItem {
    path: string;
    label: string;
    icon: any;
    selectedIcon: any;
}
const TabBarItem = React.memo((props: {
    icon: any;
    selectedIcon: any;
    label: string;
    active: boolean;
    onPress: any;
}) => {

    const { icon,selectedIcon,label, active, onPress } = props;

    return (
        <View onClick={onPress} style={[fxs.f1, fxs.c]}>
            <View style={[styles.icon_box]}>
                <Image
                    src={icon}
                    mode={'aspectFit'}
                    style={{...styles.icon,display:  active ? 'none' : 'flex'}}
                />
                <Image
                    src={selectedIcon}
                    mode={'aspectFit'}
                    style={{...styles.icon,display: active ? 'flex' : 'none'}}
                />
            </View>
            <Text style={{ display:'flex',fontSize: 13, color: active ? '#2c2c2c' : '#cdcdcd' }}>
                {label}
            </Text>
        </View>
    )
});
const BottomTabBar = React.memo((props:{
    tabs: TabItem[];
    onTabChanged?: (tab:number) => void;
}) => {
    const {tabs = [],onTabChanged} = props;
    const sys = useRef(getSystemInfoSync()).current;
    const frameStyle = useMemo(() => {
        let bottom = sys.safeArea.bottom - sys.safeArea.height;
        return { 
            width: sys.screenWidth,
            height: 56 + bottom,
            paddingBottom: bottom+1
        }
    }, [])

    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <View style={[styles.container, frameStyle]}>
            {tabs.map((item, index) => {
                return (
                    <TabBarItem
                        onPress={() => {
                            setCurrentIndex(index);
                            if(onTabChanged) onTabChanged(index);
                        }}
                        active={currentIndex == index}
                        {...item}
                    />
                )
            })}
        </View>
    )
});

export default BottomTabBar;

const styles = StyleSheet.create({
    container: {
        position: 'fixed',
        zIndex: 1000,
        bottom: 0,
        left: 0,
        right:0,
        width:'100%',
        flexDirection: 'row',
        backgroundColor: 'white',
        boxShadow: '0 0 10px 5px #00000012'
    },
    icon: {
        position: 'absolute',
        display: 'flex',
        height: 30,
        width: 30
    },
    icon_box: {
        display: 'flex',
        flexDirection:'column',
        justifyContent:'flex-end',
        height: 30,
        width: 30,
        paddingBottom:2,
        position: 'relative'
    }
})