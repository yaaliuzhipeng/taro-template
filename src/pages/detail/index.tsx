import React, { useEffect } from 'react';
import Taro from '@tarojs/taro';
import { Text,ScrollView,Image } from '@tarojs/components';
import { View, Page, Header } from '!/src/powpow/components';
import { useWindowDimensions } from '!/src/powpow/hooks';

const Detail = (props) => {

	const [size,insets] = useWindowDimensions();

	const onPressBack = () => {
		Taro.navigateBack();
	}
	return (
		<Page style={[]}>
			<Header title='详情' onPressBack={onPressBack}/>
			<ScrollView enableFlex style={{paddingTop: insets.top + 56}}>
			
			</ScrollView>
		</Page>
	)
}

export default Detail;