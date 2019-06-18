class Slot extends React.Component {
  static defaultProps = {
    p1: '😣',
    p2: '😢',
    p3: '🤔'
  };
  render() {
    const { p1, p2, p3 } = this.props;
    const winner = p1 === p2 && p2 === p3;
    return (
      <div>
        <p>
          {p1}
          {p2}
          {p3}
        </p>
        <p>{winner ? 'You win!' : 'You lose'}</p>
      </div>
    );
  }
}
