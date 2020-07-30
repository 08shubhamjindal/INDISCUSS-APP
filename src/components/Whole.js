import React from 'react'
import ShowData from './ShowData'

export default class Whole extends React.Component{

    constructor(props){
      super(props);
      this.state = {
        data : null
      }
    }
    
  
  async componentDidMount() {
    let url = 'https://api.unsplash.com/photos/?client_id=ZJJwdJXBkEPUcf0MNl8qbE84ZTALx2QqqTEuNL6qFUs';
    let response = await fetch(url);
    let commits = await response.json();
     this.setState(()=>{
        return {
          data : commits
        }
      })
    console.log(this.state.data[0].urls.small);
  }
  handleData(){
    if(this.state.data){
    {
    return (    
    this.state.data.map((place, index) => {
              return (
                <div key = {index}>
                <ShowData 
                  ind={index} 
                  img={place.urls.small}
                  data = {this.state.data}
                  />
                </div>
                )
    })
    )
    }
    }
    else{
      return 'Hi Data is Loading yet'
    }
  }
  
  render(){
      return (
        <div>
          {this.handleData()}
        </div>
      )
    }
  }