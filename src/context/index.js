import React, {Component} from 'react';

const appContext = React.createContext();

class AppProvider extends Component {
  state = {
    stage: 1,
    players: [],
    result: '',
  };

  addPlayerHandler = name => {
    this.setState((prevState, props) => ({
      players: [...prevState.players, name],
    }));
  };
  render() {
    return (
      <>
        <appContext.Provider
          value={{
            state: this.state,
            addPlayer: this.addPlayerHandler,
          }}>
          {this.props.children}
        </appContext.Provider>
      </>
    );
  }
}

export {AppProvider, appContext};
