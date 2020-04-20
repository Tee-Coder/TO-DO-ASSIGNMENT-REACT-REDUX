import React from 'react';
import { Grid } from 'semantic-ui-react';
import Todo from './To-do-List/to-do-items';

function App() {
  return (
    <Grid centered>
      <Grid.Row>
        <h1>TO-DO-LIST</h1>
      </Grid.Row>

      <Grid.Row>
        <Todo />

      </Grid.Row>
    <Grid.Row>

    </Grid.Row>
     
    </Grid>
  );
}

export default App;
