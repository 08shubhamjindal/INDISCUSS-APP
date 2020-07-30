import React from 'react'


export default class ShowData extends React.Component{
  
    constructor(props){
      super(props);
      this.getMoreData  = this.getMoreData.bind(this)
      this.state = {
        dataofOnClick : null
      }
    }
    
    getMoreData(){
     console.log(this.props.data[this.props.ind])
      this.setState(()=>{
        return {
          dataofOnClick :this.props.data[this.props.ind].id 
        }
      })
    }
    displayMoreData(){
      if(this.state.dataofOnClick){
        return (
          this.state.dataofOnClick
        )
      }else{
        return 'i am good'
      }
    }
    render(){
      return (
         <div>
          <img  src ={this.props.img} ></img>
          <button onClick = {this.getMoreData}> Get More Data </button>
          {this.displayMoreData()}
        </div>
      )
    }
  }