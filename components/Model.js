import React, {useState} from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide
} from '@mui/material';
import { useIntl } from 'react-intl';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Model(props) {
  const {title, description, open, acceptor} = props
  const [close] = useState(false)
  const { formatMessage } = useIntl()
  const handleClose = () => props.close(close)

  return (
    <React.Fragment>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={!open}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{formatMessage({ id: title })}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {formatMessage({ id: description })}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button sx={{color: 'red'}} onClick={handleClose}>{formatMessage({ id: 'is.close' })}</Button>
          <Button sx={{color: '#44c455'}} onClick={() => acceptor()}>{formatMessage({ id: 'is.ok' })}</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}