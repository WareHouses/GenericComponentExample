import React from 'react';import Footer from '../Footer';import { Header , Image } from 'semantic-ui-react';import { Black , Gainsboro } from '../Colors';class LukaFooter extends React.Component{  constructor(props){    super(props);    this.state={}  }  render(){    return(<Footer backgroundColor={Gainsboro}      textColor={ Black }      leftComponent={<Image src="./img/logo-luka.png" size="tiny" />}      rightComponent={<Header size="small">©Luka 2017</Header>}    />);  }}

export default LukaFooter;
