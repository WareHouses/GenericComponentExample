import React from 'react';
import i18n from "../../i18n";
import Start from "../Start";
import LandingBody from "../LandingBody";
import LukaFooter from "../LukaFooter";

class Landing extends React.Component{
	constructor(props){
		super(props);
		this.state={}
	}

	render(){
		return(
			<div>
				<Start title={<h2>{i18n.t('landing.intro.title')}</h2>}
						subtext={<h4>{i18n.t('landing.intro.subtext')}</h4>}
						buttonText={i18n.t('landing.intro.button')}
						/>
				<LandingBody/>
				<Start title={<h2>{i18n.t('landing.bottom.title')}</h2>}
						subtext={<h4>{i18n.t('landing.bottom.subtext')}</h4>}
						buttonText={i18n.t('landing.bottom.button')}
						/>
				<LukaFooter />
			</div>
		);
	}
}

export default Landing;
