import React from 'react';
import HeaderHero from "../HeaderHero";
import { White } from '../Colors'

class AppContainer extends React.Component{
	constructor(props){
		super(props);
		this.state={}
	}

	render(){
		return(
			<div style={{backgroundColor: White, margin:"0"}}>
				<HeaderHero background={White}/>
				{this.props.children}
			</div>
			);
	}
}

export default AppContainer;
