class App extends React.Component {
  render() {
    const options = ['🌶', '🍒', '🍑'];
    const pick = () => options[Math.floor(Math.random() * options.length)];
    return (
      <div>
        <Slot p1={pick()} p2={pick()} p3={pick()} />
        <Slot p1={pick()} p2={pick()} p3={pick()} />
        <Slot p1={pick()} p2={pick()} p3={pick()} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
