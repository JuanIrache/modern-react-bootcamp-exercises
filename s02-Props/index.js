class App extends React.Component {
  render() {
    return (
      <div>
        <Hello from="Juan" to="John" />
        <Hello from="Gianni" to="Jean" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
