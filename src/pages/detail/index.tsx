import React, { useEffect } from 'react';
import { Text } from '@tarojs/components';
import { View, Page } from '!/src/powpow/components';

const Find = (props) => {

	return (
		<Page style={[fxs.c]}>
			<Text style={{ display: 'flex', color: '#000', fontSize: 20 }}>当前页面是: 详情页</Text>
		</Page>
	)
}

export default Find;