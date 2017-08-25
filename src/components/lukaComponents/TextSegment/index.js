import React from 'react';
import { Header } from 'semantic-ui-react';

class TextSegment extends React.Component{
	constructor(props){
		super(props);
		this.state={
			textAlign: (this.props.textAlign != null)?this.props.textAlign:"center",
			hColor: (this.props.headerColor != null)?this.props.headerColor:"black",
			sColor: (this.props.subtextColor != null)?this.props.subtextColor:"grey",
		}
	}

	render(){
		if( this.props.basic ){
			return(
				<Header style={{color: this.state.hColor}} textAlign={this.state.textAlign}>
					{this.props.title?this.props.title:null}
					<Header.Subheader style={{color: this.state.sColor}}>
						{this.props.text?this.props.text:null}
					</Header.Subheader>
				</Header>
			);
		}else{
			return(
				<Header color={this.state.hColor} textAlign={this.state.textAlign}>
					<h2>{this.props.title?this.props.title:null}</h2>
					<Header.Subheader style={{color:this.state.sColor}}>
						<h3>{this.props.text?this.props.text:null}</h3>
					</Header.Subheader>
				</Header>
			);
		}
	}
}

export default TextSegment;
