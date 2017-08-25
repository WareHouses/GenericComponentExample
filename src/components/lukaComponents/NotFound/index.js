import React from 'react';
import Start from '../Start';
import i18n from '../../i18n';

class NotFound extends React.Component{
	constructor(props){
		super(props);
		this.state={}
	}

	render(){
		return(
			<Start
				title={<h1>{i18n.t('notFound.text')}</h1>}
			/>
		);
	}
}

export default NotFound;
