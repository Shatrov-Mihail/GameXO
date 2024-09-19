import { Component } from "react";
import InformationLayout from "./InformationLayout";
import { connect } from "react-redux";

class Information extends Component {
  render() {
    const { isDraw, isGameEnded, currentPlayer } = this.props;
    let status;
    if (isDraw) {
      status = "Ничья";
    } else if (isGameEnded) {
      status = `Победа: ${currentPlayer}`;
    } else {
      status = `Ходит: ${currentPlayer}`;
    }

    return <InformationLayout status={status} />;
  }
}

const mapStateToProps = (state) => ({
  isDraw: state.isDraw,
  isGameEnded: state.isGameEnded,
  currentPlayer: state.currentPlayer,
});

export default connect(mapStateToProps)(Information);
