import React, { useState } from 'react';
import { View } from '@tarojs/components'
import { Page } from '!/src/powpow/components';
import BottomTabBar, { TabItem } from '!/src/components/BottomTabBar';

import Home from '!/src/pages/home/Home';
import Find from '!/src/pages/find/Find';
import My from '!/src/pages/my/My';

import TabHomeIconDefault from '!/src/assets/tab_home_d.png';
import TabHomeIconActive from '!/src/assets/tab_home_a.png';
import TabFindIconDefault from '!/src/assets/tab_find_d.png';
import TabFindIconActive from '!/src/assets/tab_find_a.png';
import TabMyIconDefault from '!/src/assets/tab_my_d.png';
import TabMyIconActive from '!/src/assets/tab_my_a.png';
import { useWindowDimensions } from '!/src/powpow/hooks';
interface ITabItem extends TabItem {
    component: any;
}
const tabs: ITabItem[] = [
    {
        path: 'pages/home/index',
        label: '首页',
        icon: TabHomeIconDefault,
        selectedIcon: TabHomeIconActive,
        component: Home,
    },
    {
        path: 'pages/find/index',
        label: '发现',
        icon: TabFindIconDefault,
        selectedIcon: TabFindIconActive,
        component: Find
    },
    {
        path: 'pages/my/index',
        label: '我的',
        icon: TabMyIconDefault,
        selectedIcon: TabMyIconActive,
        component: My
    },
];
const DefaultStyle:any = {
    // position:'absolute',
    display:'flex',
    flex:1,
    flexDirection:'column',
    boxSizing: 'border-box',
    height:'100%',
    width:'100%'
};

import Detail from '../detail';

const Index = (props) => {

    const [currentTab,setCurrentTab] = useState(0);
    const onTabChanged = (tab:number) => {
        setCurrentTab(tab);
    }
    const [size, insets] = useWindowDimensions();

    return (
        <>
            <View style={{width:size.width,height:size.height-insets.bottom}}>
                {tabs.map((tab, index) => {
                    return (
                        <View style={{
                            ...DefaultStyle,
                            backgroundColor:'#FFF',
                            display: currentTab == index ? 'flex' : 'none'
                        }}>
                            {tab.component()}
                        </View>
                    )
                })}
            </View>
            <BottomTabBar tabs={tabs} onTabChanged={onTabChanged}/>
        </>
    )
}
export default Index;