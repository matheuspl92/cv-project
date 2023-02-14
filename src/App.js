import React from "react";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
      <div>
        Hello World!
        <Button variant='primary'>Click here</Button>
      </div>
    )
  }
}

export default App;
