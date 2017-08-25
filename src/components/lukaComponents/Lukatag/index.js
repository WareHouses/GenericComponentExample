import React from 'react';
import Start from '../Start';
import LukatagBody from '../LukatagBody';
import LukaFooter from '../LukaFooter';
import i18n from '../../i18n';
import { White } from '../Colors';

class Lukatag extends React.Component{
	constructor(props){
		super(props);
		this.state={}
	}

	render(){
		return(
			<div style={{backgroundColor:White}}>
				<Start
					title={<h1>{i18n.t('lukatag.intro.title')}</h1>}
				/>
				<LukatagBody />
				<Start
					title={<h1>{i18n.t('lukatag.bottom.title')}</h1>}
					buttonText={i18n.t('lukatag.bottom.button')}
				/>
				<LukaFooter />
			</div>
		);
	}
}

export default Lukatag;
