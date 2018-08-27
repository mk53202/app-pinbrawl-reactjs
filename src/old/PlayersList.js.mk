import React from 'react';
import { ListGroup, ListGroupItem, Button, Input } from 'reactstrap';

class PlayersList extends React.Component {

   constructor() {
   		super();
      this.state = {
         items: []
      }
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleSubmit(event) {
     alert('A name was submitted: ' + this.state.value);
     event.preventDefault();
   }

   add() {
   		let value = Math.floor( ( Math.random() * 10 ) + 1 );
      // let value = this.state.value;
   		let items = this.state.items;
      // items.push( value );
      items.push( value );
      this.setState( { items: items } );
   }

   render() {
     let divItems = this.state.items.map( ( item, index ) => {
        // return <div key={index}>{item}</div>
        return <ListGroupItem key={index}>{item}</ListGroupItem>
     });

     return (
       <div>
         <ListGroup>{divItems}</ListGroup>
         <Input name="player" id="playerName" placeholder="player name" />
         <Button onClick={this.add.bind( this )}> Add </Button>
       </div>
     );
   }
}

// ReactDOM.render(
//   <List />,
//   document.getElementById('app')
// );


// class PlayersList extends React.Component {
//
//   constructor() {
//    super();
//    this.state = {
//       items: []
//    }
//
//    // add() {
//    // 		let value = Math.floor( ( Math.random() * 10 ) + 1 );
//    // 		let items = this.state.items;
//    //    items.push( value );
//    //    this.setState( { items: items } );
//    // }
//
//   // add() {
//   //    this.setState({ items.push(some items)});
//   // }
//
//   // render() {
//   //   var names = [ "Matt Koster",  "Jon Polfer", "Mili Koster"]
//   //   var namesList = names.map(function(name) {
//   //     return <ListGroupItem>{name}</ListGroupItem>
//   //   })
//   //   return <ListGroup>{ namesList }</ListGroup>
//   // }
//
//   render() {
//
//     let divItems = this.items.map( ( item, index ) => {
//        return <div key={index}>{item.value}</div>
//     });
//
//     return (
//       <div>
//         {divItems}
//         <button onClick={this.add}> Add </button>
//       </div>
//     );
//   }
//
//   }
// }

export default PlayersList; // Don’t forget to use export default!
