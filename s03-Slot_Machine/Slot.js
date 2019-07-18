class Slot extends React.Component {
  static defaultProps = {
    p1: '😣',
    p2: '😢',
    p3: '🤔'
  };

  render() {
    const fruitStyle = { fontSize: '50px' };
    const { p1, p2, p3 } = this.props;
    const winner = p1 === p2 && p2 === p3;
    return (
      <div>
        <p style={fruitStyle}>
          {p1}
          {p2}
          {p3}
        </p>
        <p className={winner ? 'win' : 'lose'}>{winner ? 'You win!' : 'You lose'}</p>
      </div>
    );
  }
}
