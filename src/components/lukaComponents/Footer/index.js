import React from 'react';
import {Grid , Container , Segment} from 'semantic-ui-react';

class Footer extends React.Component{
	constructor(props){
		super(props);
		this.state={}
	}

	render(){
		return(
			<Container fluid style={{position:"relative", zIndex:"3"}}>
				<Segment basic clearing style={{margin:"0px"}}>
					<Grid columns={2}>
						<Grid.Row>
							<Grid.Column textAlign="left" verticalAlign="middle">
								{React.cloneElement(this.props.leftComponent,{floated:"left"})}
							</Grid.Column>
							<Grid.Column textAlign="right" verticalAlign="middle">
								{React.cloneElement(this.props.rightComponent,{floated:"right"})}
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Segment>
			</Container>
		);
	}
}

export default Footer;
