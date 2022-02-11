import React, { useEffect } from 'react';
import { Text } from '@tarojs/components';
import { View, Page } from '!/src/powpow/components';
import { useTabItemTap } from '@tarojs/taro';

const My = (props) => {

	useEffect(() => {

	},[])

	return (
		<Page style={[fxs.c]}>
			<Text style={{ display: 'flex', color: '#000', fontSize: 20 }}>当前页面是: 我的</Text>
		</Page>
	)
}

export default My;