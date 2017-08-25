import React from 'react'import { Checkbox , Label } from 'semantic-ui-react';import { errorStyle } from '../Styles';class CustomCheckbox extends React.Component{  constructor(props){    super(props);    this.state={}  }  render(){    const { meta: {touched , error} }=this.props    return(      <div>          <Checkbox label={this.props.text}                type={this.props.type}                checked={this.props.checked}              />          {( touched && error )?<span style={errorStyle}><Label basic color="red" pointing="left">{error}</Label></span>:null}      </div>    );  }}export default CustomCheckbox;
