import { Component } from "react";
import Information from "./components/information/Information";
import Field from "./components/field/Field";
import { connect } from "react-redux";
import { restartGame } from "./components/actions";

class GameLayout extends Component {
  handleReset = () => {
    this.props.dispatch(restartGame());
  };

  render() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 p-5">
        <Information />
        <Field />
        <button className="mt-5 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700" onClick={this.handleReset}>
          Начать заново
        </button>
      </div>
    );
  }
}

export default connect()(GameLayout);
