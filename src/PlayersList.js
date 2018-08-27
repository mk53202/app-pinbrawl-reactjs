import React from 'react';
import { ListGroup, ListGroupItem, Button, Input, Form } from 'reactstrap';

class PlayersList extends React.Component {

   constructor() {
   		super();
      this.state = {
         items: []
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleSubmit(event) {
     let value = this.state.value;
     let items = this.state.items;
     items.push( value );
     this.setState( { items: items, value:"" } );
     event.preventDefault();
   }

   handleChange(event) {
     this.setState({value: event.target.value});
   }

   render() {
     let divItems = this.state.items.map( ( item, index ) => {
        return <ListGroupItem key={index}>{item}</ListGroupItem>
    });

     return (
       <div>
         <Form onSubmit={this.handleSubmit}>
           <ListGroup>{divItems}</ListGroup>
           <br/>
           <Input type="text" value={this.state.value} onChange={this.handleChange} placeholder='enter name' />
           <Button type="submit" value="Add Player">Add Player</Button>
         </Form>
       </div>
     );
   }
}

export default PlayersList; // Don’t forget to use export default!
