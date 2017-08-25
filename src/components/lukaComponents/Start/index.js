import React from 'react';
import { Grid , Button } from 'semantic-ui-react';
import TextSegment from '../TextSegment';
import { Redirect } from 'react-router-dom';
import { startStyle } from '../Styles'

class Start extends React.Component{

	constructor(props){
		super(props);
		this.state={
			redirect: false,
			url: (this.props.url)?this.props.url:"Login"
		}
	}

	handleClick = (e) => {
		e.preventDefault();
		if( this.props.url )
			this.setState({ redirect: true});
	}

	goBack = (e) => {
		e.preventDefault();
		this.setState({ redirect: false});
	}

	render(){
		if (this.state.redirect) {
			return(
				<Button primary size="large" content="Go Back" onClick={this.goBack} />
			)
		}else{
			return(
				<Grid>
					<Grid.Row style={startStyle}>
						<Grid.Column textAlign="center" verticalAlign="middle">
							<TextSegment basic
								title={this.props.title?(this.props.title):null}
								text={this.props.subtext?(this.props.subtext):null}
							/>
							{this.props.buttonText?
									<Button
										primary
										size="large"
										content={this.props.buttonText}
										onClick={this.handleClick}
									/>
								:null}

							</Grid.Column>
						</Grid.Row>
					</Grid>
				);
			}
		}
	}

export default Start;
