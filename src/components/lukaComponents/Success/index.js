import React from 'react'import TextSegment from '../TextSegment'class Success extends React.Component{  constructor(props){    super(props);    this.state={}  }  render(){    return(      <TextSegment  basic title={<h1 style={{paddingTop:"40px"}}>Success!</h1>}/>    );  }}export default Success;
