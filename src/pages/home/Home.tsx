import React, { useEffect } from 'react';
import { Text } from '@tarojs/components';
import { View, Page } from '!/src/powpow/components';

const Home = (props) => {

	return (
		<Page style={[fxs.c]}>
			<Text style={{ display: 'flex', color: '#000', fontSize: 20 }}>当前页面是: 发现</Text>
		</Page>
	)
}

export default Home;