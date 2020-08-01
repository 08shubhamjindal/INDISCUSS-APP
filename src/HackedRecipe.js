import React from 'react';
import ReactDOM from 'react-dom'


class HackedRecipe extends React.Component {
    constructor(props){
        super(props);
        this.searchData = this.searchData.bind(this)
        this.state = {
            data : null,
            searchArray : []
        }
    }

async componentDidMount() {
        let url = 'http://starlord.hackerearth.com/recipe';
        let response = await fetch(url);
        let data = await response.json();
         this.setState(()=>{
            return {
              data : data
            }
          })
}

handleData() {
    if(this.state.data){
        localStorage.setItem('test', JSON.stringify(this.state.data));
        return (
            this.state.data.map((cardData, index)=>{
                const cond = this.state.searchArray.includes(index) ? true : false
                return <Card sendParticularCard = {cardData} afterSearchData = {cond} index = {index}/>
            })
        )
    }
    else{
        return 'you are there'
    }
}
searchData(){
        console.log(JSON.parse(localStorage.test))
        this.setState(()=>{
            return {
                searchArray : [1,4,5]
            }
        })
}

render(){
    return(
       <div>
       <SearchBar searchData = {this.searchData}/>
       {this.handleData()}
       </div>
    )
}
}
class SearchBar extends React.Component{
 render(){
     return(
         <div>
             <input type="text" id="input"></input>
             <button onClick = {this.props.searchData}>Search</button>
         </div>
     )
 }
}

class Card extends React.Component{
    render(){
        const mystyle = {
            float: this.props.index %2 ==0 ? "left" : "right",
            color: "black",
           // backgroundColor: this.props.afterSearchData ? "green" : "DodgerBlue" ,
            height: "auto",
            fontFamily: "Arial",
            margin: "10px",
            transition: "0.3s",
            width: "40%",
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
            textAlign: "center",
          };
         const priceStyle = {
                color: "grey",
                fontSize: "22px"
         }
        console.log( 'hie' + this.props.afterSearchData)
        return (
            <div style={mystyle}>
            <div>{this.props.sendParticularCard.id + 1}.</div>
            <img src={this.props.sendParticularCard.image} />
            <h1>{this.props.sendParticularCard.name}</h1>
            <p class="price" style = {priceStyle}>${this.props.sendParticularCard.price}</p>
            <div>{this.props.sendParticularCard.description}</div>
            </div>
        )
    }
}

const jsx = (
    <div>
        <HackedRecipe />
    </div>
)
ReactDOM.render(jsx, document.getElementById('app'));
