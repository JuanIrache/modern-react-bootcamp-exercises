import React, {Component} from 'react';
import MiniPalette from './MiniPalette';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styles from './styles/PaletteListStyles';

class PaletteList extends Component {
  state = {deleting:[]};
  linkPalette = id => {
    this.props.history.push(`/palette/${id}`);
  };

  deletePalette = (id) => {
    this.setState({deleting:[this.state.deleting,id]});
    this.props.deletePalette(id);
  }

render() {
  const { classes, resetPalettes, palettes } = this.props;
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1>Palette Manager</h1>
          <div className={classes.links}>
            <button onClick={resetPalettes}>Reset</button>
            <span className={classes.hideable}> | </span>
            <Link to="/palette/new">Create Palette</Link>
          </div>
        </nav>
        <TransitionGroup>
        {palettes.map(p => (
          <CSSTransition key={p.id} timeout={500} classNames="fade">
            <MiniPalette {...p} deletePalette={this.deletePalette} handleClick={this.linkPalette} />
          </CSSTransition>
        ))}
        </TransitionGroup>
      </div>
    </div>
  );
  }
}

export default withStyles(styles)(PaletteList);
