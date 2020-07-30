import React from 'React';
import ReactDOM from 'react-dom';

class App extends React.Component{

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
    return 'Hi Data is Loading'
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

class ShowData extends React.Component{
  
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

const jsx = (
  <App/>
);

ReactDOM.render(jsx, document.getElementById('app'));