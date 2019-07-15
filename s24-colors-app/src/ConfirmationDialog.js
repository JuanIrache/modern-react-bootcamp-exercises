import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import CancelIcon from '@material-ui/icons/Cancel';
import ConfirmIcon from '@material-ui/icons/Check';
import { makeStyles } from '@material-ui/core/styles';
import { blue, red } from '@material-ui/core/colors';
const useStyles = makeStyles({
  yes: {
    backgroundColor: blue[100],
    color: blue[600]
  },
  no: {
    backgroundColor: red[100],
    color: red[600]
  }
});

export default function ConfirmationDialog(props) {
  const classes = useStyles();
  const { open, onClose, confirmedAction, question } = props;

  const confirmAction = () => {
    onClose();
    confirmedAction();
  };

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="confirmation-dialog">
      <DialogTitle id="confirmation-dialog">{question}</DialogTitle>
      <List>
        <ListItem button onClick={confirmAction}>
          <ListItemAvatar>
            <Avatar className={classes.yes}>
              <ConfirmIcon color="primary" />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Yes" />
        </ListItem>
        <ListItem button onClick={onClose}>
          <ListItemAvatar>
            <Avatar className={classes.no}>
              <CancelIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="No" />
        </ListItem>
      </List>
    </Dialog>
  );
}
