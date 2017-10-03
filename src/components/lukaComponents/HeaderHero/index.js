import React from 'react';
import { Menu , Image } from 'semantic-ui-react';
import { menuStyle } from '../Styles'

class HeaderHero extends React.Component{
	constructor(props){
		super(props);
		this.state={
			boxShadow: "0px 3px 5px rgba(57, 63, 72,"+
							(0.01*(document.body.scrollTop))+")"
		}
	}

	componentDidMount(){
		window.onscroll = () =>{
			if( document.body.scrollTop < 30){
				this.setState({
					boxShadow: "0px 3px 5px rgba(57, 63, 72,"+
							(0.01*(document.body.scrollTop))+")"
				})
			}else{
				this.setState({
					boxShadow: "0px 3px 5px rgba(57, 63, 72,0.3)"
				})
			}
		}
	}

	render(){
		return(
			<Menu size="tiny"
						borderless
						style={menuStyle(this.state)}
			>
				<Menu.Item>
						<Image src="./img/logo-luka.png" size="tiny"/>
				</Menu.Item>
				<Menu.Menu position="right">
					<Menu.Item>
							lukatag
					</Menu.Item>
					<Menu.Item>
							about
					</Menu.Item>
				</Menu.Menu>
			</Menu>
		);
	}
}

export default HeaderHero;
