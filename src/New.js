import React from 'React';
import ReactDOM from 'react-dom';

class WholeLayout extends React.Component{

constructor(props){
        super(props);
        this.state = {
            arrayofId : [1, 2, 3, 4, 5]
        }
}
    
rendermoreCard(){
 return(
   <div>
     <Card cardId={this.state.arrayofId[0]}/>
     <Card cardId={this.state.arrayofId[1]}/>
     <Card cardId={this.state.arrayofId[2]}/>
     <Card cardId={this.state.arrayofId[3]}/>
     <Card cardId={this.state.arrayofId[4]}/>
   </div>
 )
}

render(){
       return(
           <div>
             {this.rendermoreCard()}
             <Cart />
           </div>
       )
   }
}

class Card extends React.Component{

constructor(props){
        super(props);
        this.addToCart = this.addToCart.bind(this)
        this.state = {
            toggleAdd_Remove : true
        }
}

addToCart(){

    this.setState(()=>{
        return {
            toggleAdd_Remove : !this.state.toggleAdd_Remove
        }
    })
    
    console.log(this.state.toggleAdd_Remove)
    console.log(this.props.cardId)
}

render(){
        return(
            <div>
                <button onClick={this.addToCart}>{(this.state.toggleAdd_Remove) ? 'Add to Cart' : 'Remove to Cart' }</button>
            </div>
        )
    }
 }


 class Cart extends React.Component{

    render(){
        return(
            <button>Go to Cart</button>
        )
    }
 }


const jsx = (
    <div>
        <WholeLayout />
    </div>
  );
  
ReactDOM.render(jsx, document.getElementById('app'));