import React from 'react';
import { RootState } from '../store';
import { removeItemFromTodo, addItemToTodo } from '../store/To-do/action';
import { Item } from '../store/To-do/type';
import { Grid, Form, Input, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';

export interface ITodoProps {
  removeItemFromTodo: typeof removeItemFromTodo,
  addItemToTodo: typeof addItemToTodo,
  items: Item[]
}

export class Todo extends React.Component<ITodoProps>
{
  generateID = (): number => {
    let randomNumber: number = Math.floor( Math.random() * 1000 );
    randomNumber += this.props.items.length;
    return randomNumber;
  }
  newList = ( event: any ) => {
    event.preventDefault();
    const formField: HTMLInputElement | null = document.querySelector( '[name="TODO-name"]' );
    let formFieldValue: string = '';
    if ( formField !== null ) formFieldValue = formField.value;
    this.props.addItemToTodo( {
      id: this.generateID(),
      name: formFieldValue
    } );
  }
  deleteList = ( id: number ) => {
    // Remove this product by the ID!
    this.props.removeItemFromTodo( id );
  }
  render ()
  {
    return (
      <Grid>
        <Grid.Row>
          <Form onSubmit={this.newList}>
            <Form.Field>
              <label htmlFor="TODO-name">Enter To-do Item</label>
              <Input name="TODO-name" type='text' />
            </Form.Field>
            <Input type="submit" value="Add Task" />
          </Form>
        </Grid.Row>

        <Grid.Row>
        <h3>Tasks</h3>
        <ul>
            {(this.props.items.length >0) ?
           this.props.items.map( element => (
              <li>
                {element.name}
                <Button
                  size='mini'
                  color='red'
                  onClick={event => {
                    this.deleteList( element.id )
                }}>
                  &times;
                </Button>
              </li>
  
          ) ) :

        <li> Not a single task in your TO-DO list added! Also, no task to remove</li>
            }

        </ul>
        </Grid.Row>
        
      </Grid>
    );
  }
}

const mapStateToProps = ( state: RootState ) => {
  return {
    items: state.Todo.items
  }
}

export default connect(
  mapStateToProps,
  { addItemToTodo, removeItemFromTodo }
)( Todo );