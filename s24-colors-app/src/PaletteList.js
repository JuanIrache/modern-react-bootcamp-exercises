import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styles from './styles/PaletteListStyles';
import ConfirmationDialog from './ConfirmationDialog';

class PaletteList extends Component {
  state = { dialogOpen: false };
  linkPalette = id => {
    this.props.history.push(`/palette/${id}`);
  };

  openDialog = e => {
    e.stopPropagation();
    this.setState({ dialogOpen: true });
  };

  closeDialog = () => {
    this.setState({ dialogOpen: false });
  };

  render() {
    const { classes, resetPalettes, palettes, deletePalette } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>Palette Manager</h1>
            <div className={classes.links}>
              <button onClick={this.openDialog}>Reset</button>
              <span className={classes.hideable}> | </span>
              <Link to="/palette/new">Create Palette</Link>
            </div>
          </nav>
          <TransitionGroup>
            {palettes.map(p => (
              <CSSTransition key={p.id} timeout={500} classNames="fade">
                <MiniPalette {...p} deletePalette={deletePalette} handleClick={this.linkPalette} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
        <ConfirmationDialog
          open={this.state.dialogOpen}
          onClose={this.closeDialog}
          confirmedAction={resetPalettes}
          question="Reset palettes?"
        />
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
