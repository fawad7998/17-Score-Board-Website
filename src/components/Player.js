import React, { PureComponent } from "react";
import Counter from "./Counter";
import Icon from "./Icon";

class Player extends PureComponent {
  render() {
    const { name, id, score, index, removePlayer, changeScore } = this.props;
    return (
      <div className="player">
        <div className="player-name">
          <button className="player-remove" onClick={() => removePlayer(id)}>
            ✖
          </button>
          <Icon isHighScore={this.props.isHighScore} />
          {name}
        </div>
        <div className="player-score">
          <Counter score={score} index={index} changeScore={changeScore} />
        </div>
      </div>
    );
  }
}

export default Player;
