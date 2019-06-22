import React, { Component } from 'react';
import Cell from './Cell';
import './Board.css';

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = { hasWon: false, board: this.createBoard() };
    this.flipCellsAround = this.flipCellsAround.bind(this);
  }

  static defaultProps = {
    nrows: 5,
    ncols: 5,
    chanceLightStartsOn: 0.25
  };

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */

  createBoard() {
    const { nrows, ncols, chanceLightStartsOn } = this.props;
    let board = [];
    for (let y = 0; y < nrows; y++) {
      board[y] = [];
      for (let x = 0; x < ncols; x++) {
        board[y][x] = Math.random() < chanceLightStartsOn;
      }
    }
    return board;
  }

  /** handle changing a cell: update board & determine if winner */

  flipCellsAround(coord) {
    let { ncols, nrows } = this.props;
    let board = this.state.board;
    let [y, x] = coord.split('-').map(Number);

    function flipCell(y, x) {
      // if this coord is actually on board, flip it

      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
      }
    }

    flipCell(y, x);
    flipCell(y - 1, x);
    flipCell(y + 1, x);
    flipCell(y, x - 1);
    flipCell(y, x + 1);

    // win when every cell is turned off

    this.setState(st => {
      //Reduce each row to true or false, and use them to reduce the board to true or false
      const hasWon = st.board.every(row => row.every(cell => !cell));
      return { board, hasWon };
    });
  }

  /** Render game board or winning message. */

  render() {
    return (
      <div className="Board">
        {this.state.hasWon ? (
          <h1>
            <span className="Board-title Board-red">You</span> <span className="Board-title Board-blue">Win!</span>
          </h1>
        ) : (
          <div>
            <h1>
              <span className="Board-title Board-red">Lights</span> <span className="Board-title Board-blue">Out</span>
            </h1>
            <table className="Board-table">
              <tbody>
                {this.state.board.map((row, y) => (
                  <tr key={'row' + y}>
                    {row.map((cell, x) => (
                      <Cell key={y + '-' + x} coords={y + '-' + x} flipCellsAroundMe={this.flipCellsAround} isLit={cell} />
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );

    // if the game is won, just show a winning msg & render nothing else
  }
}

export default Board;
