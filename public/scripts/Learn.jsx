class App extends React.Component{
  constructor(props){
    super(props);
    this.getInputData = this.getInputData.bind(this)
    this.replaceData = this.replaceData.bind(this)
    this.state = {
      inputVal : ''
    }
  }
  getInputData(vale){
    console.log(vale)
    this.setState((prevState)=>{
      return {
        inputVal : prevState.inputVal + vale
      }
    })
  }
  replaceData(val){
    this.setState(()=>{
      return {
        inputVal : val
      }
    })
  }
  render(){
    return (
    <div>
       <Form getInputData = {this.getInputData}/> 
       <DisplayData 
         getDisplayData = {this.state.inputVal}
         replaceData = {this.replaceData} />
    </div>
    )
  }
}

class DisplayData extends React.Component{
  constructor(props){
    super(props);
    this.handelinDisplayData = this.handelinDisplayData.bind(this)
  }
  
  handelinDisplayData (val){
    console.log('hereeee' + val);
    this.props.replaceData(val);
  }
  
  render(){
    return(
      <div>
        <DisplayDataChildOne getDatainFirstChild = {this.props.getDisplayData}/>
        <DisplayDataChildTwo getDatainSecondChild ={this.props.getDisplayData}/>
        <DisplayDataChildThree getDatainThirdChild ={this.handelinDisplayData}/>
      </div>
    );
  }
}

class DisplayDataChildOne extends React.Component{
  render(){
    return(
      <div>Hi From One -> {this.props.getDatainFirstChild}</div>
    );
  }
}

class DisplayDataChildTwo extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      in2ndChild : ''
    }
    this.getDisplayDataChildTwo = this.getDisplayDataChildTwo.bind(this)
  }
  
  getDisplayDataChildTwo(){
    console.log(this.props.getDatainSecondChild)
    this.setState(()=>{
      return {
      in2ndChild : this.props.getDatainSecondChild
      }
    })
  }
  
  render(){
    return(
      <div>Hi From Two -> {this.state.in2ndChild}
      <button onClick = {this.getDisplayDataChildTwo}>Get Data in2nd</button>
      </div>
    );
  }
}


class DisplayDataChildThree extends React.Component{
  constructor(props){
    super(props)
    this.handleReplaceBythisInput = this.handleReplaceBythisInput.bind(this)
  }
  
  handleReplaceBythisInput(){
    const val = document.getElementById("thirdinputChild").value;
    this.props.getDatainThirdChild(val);
  }
  
  render(){
    return(
        <div>Hi From Three -> 
        <input type="text" id="thirdinputChild"></input>
        <button onClick = {this.handleReplaceBythisInput}>Edit in Original Data</button>
      </div>
    );
  }
}


class Form extends React.Component{
  constructor(props){
    super(props);
    this.getInputDatainForm  = this.getInputDatainForm.bind(this);
  }
  
  getInputDatainForm(){
    const val  = document.getElementById("inputId").value
    this.props.getInputData(val);
    document.getElementById("inputId").value = '';
  }
  render(){
    return (
    <div>
      <input id="inputId" type ="text"></input>
      <button onClick={this.getInputDatainForm}>Get Data</button>
    </div>
    )
  }
}
const jsx = (
  <App/>
)
ReactDOM.render(jsx, document.getElementById('app'));