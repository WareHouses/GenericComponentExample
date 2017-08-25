import React from 'react';
import Start from '../Start';
import {Container} from 'semantic-ui-react';
import i18n from '../../i18n';
import LukaFooter from '../LukaFooter';
import AboutBody from '../AboutBody';
import { White } from '../Colors';

let style={
	lineHeight: "45px"
}

class About extends React.Component{
	constructor(props){
		super(props);
		this.state={}
	}

	render(){
		return(
			<div style={{backgroundColor: White}}>
				<Start
					title={<Container text><h2>{i18n.t('about.intro.title')}</h2></Container>}
					subtext={<Container text><h4 style={style}>{i18n.t('about.intro.subtext')}</h4></Container>}
				/>
				<AboutBody/>
				<Start subtext={<Container text><h2>{i18n.t('about.bottom.title')}</h2></Container>}
							buttonText={i18n.t('about.bottom.button')}
							url=""
							/>
				<LukaFooter />
			</div>
		);
	}
}

export default About;
