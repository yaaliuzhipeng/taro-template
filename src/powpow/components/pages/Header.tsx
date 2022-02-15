import React from 'react';
import { useWindowDimensions } from '../../hooks';
import {Text,Image} from '@tarojs/components';
import {View} from '../taro';
import LeftIcon from './left.png';

const Header = (props:{
    title?: string;
    onPressBack?: () => void;
}) => {
    const {title} = props;

    const [size,insets] = useWindowDimensions();

    return (
        <View style={[{flex:1,flexDirection:'row',width: size.width,height:52 + insets.top,backgroundColor:'#fff',boxShadow:'0 0 10px 5px #00000012',position:'fixed',top:0,zIndex:999}]}>
            <View onClick={props.onPressBack} style={[{flex:1,marginTop:insets.top,justifyContent:'center'}]}>
                <Image src={LeftIcon} style={{height:20,width:20,marginLeft:12}} mode={'aspectFit'}/>
            </View>
            <View style={[{flex:1,justifyContent:'center',alignItems:'center',marginTop:insets.top}]}>
                <Text style={{color:'#222',fontSize:15,fontWeight:'bold'}}>{title}</Text>
            </View>
            <View style={[{flex:1,marginTop:insets.top}]}>

            </View>
        </View>
    )
}
export default Header;