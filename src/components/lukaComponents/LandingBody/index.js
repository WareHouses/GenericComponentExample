import React from 'react';
import {Grid, Header, Image } from 'semantic-ui-react';
import TextSegment from '../TextSegment';
import i18n from '../../i18n';
import { bodyStyle } from '../Styles';
import { White } from '../Colors';

class LandingBody extends React.Component{
	constructor(props){
		super(props);
		this.state={}
	}

	render(){
		return(
			<div style={{backgroundColor: White}}>
				<Grid columns={16} padded centered relaxed stackable style={bodyStyle}>
					<Grid.Row>
						<Grid.Column verticalAlign="middle" textAlign='left' mobile={2} tablet={6}  computer={5}>
							<TextSegment title={i18n.t('landing.body.bill.title')} text={i18n.t('landing.body.bill.subtext')} />
						</Grid.Column>
						<Grid.Column verticalAlign='middle' textAlign='center' mobile={4} tablet={6} computer={5}>
							<Image centered src='./img/illustration-content-001.png' size='small' />
						</Grid.Column>
					</Grid.Row>

					<Grid.Row>

						<Grid.Column verticalAlign='middle' textAlign='center' only='computer tablet' tablet={6} computer={5}>
							<Image centered src='./img/illustration-content-002.png' size='small' />
						</Grid.Column>
						<Grid.Column textAlign='left' verticalAlign='middle' mobile={2} tablet={6} computer={5}>
								<TextSegment title={i18n.t('landing.body.calendar.title')} text={i18n.t('landing.body.calendar.subtext')}/>
						</Grid.Column>

						<Grid.Column verticalAlign='middle' textAlign='center' only='mobile' mobile={4} >
							<Image centered src='./img/illustration-content-002.png' size='small'/>
						</Grid.Column>

					</Grid.Row>

					<Grid.Row centered>
						<Grid.Column verticalAlign="middle" textAlign='left' mobile={2} tablet={6} computer={5}>
							<TextSegment title={i18n.t('landing.body.chatbot.title')} text={i18n.t('landing.body.chatbot.subtext')}/>
						</Grid.Column>
						<Grid.Column verticalAlign='middle' textAlign='center' mobile={4} tablet={6} computer={5}>
							<Image centered src='./img/illustration-content-003.png' size='small' />
						</Grid.Column>
					</Grid.Row>
				</Grid>


				<Grid columns={16} padded centered relaxed stackable style={{marginTop:"50px", marginBottom:"50px"}}>
					<Grid.Row textAlign='center' verticalAlign="top" stretched>
						<Grid.Column textAlign='center' mobile={4} tablet={6} computer={5}>
							<Image centered src='./img/006.png' size='small' />
							<Header>
								{i18n.t('landing.body.bank.title')}
								<Header.Subheader>
									{i18n.t('landing.body.bank.subtext')}
								</Header.Subheader>
							</Header>
						</Grid.Column>
						<Grid.Column textAlign='center' mobile={4} tablet={6} computer={5}>
							<Image centered src='./img/005.png' size='small' />
							<Header>
								{i18n.t('landing.body.saveTime.title')}
								<Header.Subheader>
									{i18n.t('landing.body.saveTime.subtext')}
								</Header.Subheader>
							</Header>
						</Grid.Column>
					</Grid.Row>

					<Grid.Row textAlign='center' verticalAlign="top" stretched>
						<Grid.Column textAlign='center' mobile={4} tablet={6} computer={5}>
							<Image centered src='./img/icon-001.png' size='small' />
							<Header>
								{i18n.t('landing.body.blockchain.title')}
								<Header.Subheader>
									{i18n.t('landing.body.blockchain.subtext')}
								</Header.Subheader>
							</Header>
						</Grid.Column>
						<Grid.Column textAlign='center' mobile={4} tablet={6} computer={5}>
							<Image centered src='./img/icon-002.png' size='small' />
							<Header>
								{i18n.t('landing.body.credit.title')}
								<Header.Subheader>
									{i18n.t('landing.body.credit.subtext')}
								</Header.Subheader>
							</Header>
						</Grid.Column>
					</Grid.Row>

					<Grid.Row textAlign='center' verticalAlign="top" stretched>
						<Grid.Column textAlign='center' mobile={4} tablet={6} computer={5}>
							<Image centered src='./img/icon-003.png' size='small' />
							<Header>
								{i18n.t('landing.body.advising.title')}
								<Header.Subheader>
									{i18n.t('landing.body.advising.subtext')}
								</Header.Subheader>
							</Header>
						</Grid.Column>
						<Grid.Column textAlign='center' mobile={4} tablet={6} computer={5}>
							<Image centered src='./img/icon-004.png' size='small' />
							<TextSegment basic title={i18n.t('landing.body.messagePay.title')}
																text={i18n.t('landing.body.messagePay.subtext')}/>
						</Grid.Column>
					</Grid.Row>

				</Grid>

			</div>
		);
	}
}

export default LandingBody;
