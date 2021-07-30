import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog, { DialogProps } from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ChallengeListItem } from './ChallengeListItem';
import IChallenge from 'interfaces/IChallenge';
import ChallengeStepper from './ChallengeStepper';

export default function ScrollingDialog(props: IChallenge) {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState<DialogProps['scroll']>('paper');

  const handleClickOpen = (scrollType: DialogProps['scroll']) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <Button
        onClick={handleClickOpen('paper')}
        style={{ textTransform: 'none' }}
      >
        <ChallengeListItem
          key={props.id}
          id={props.id}
          name={props.name}
          description={props.description}
          points={props.points}
        />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">{props.name}</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {props.description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <ChallengeStepper
            key={props.id}
            id={props.id}
            name={props.name}
            description={props.description}
            points={props.points}
          />
        </DialogActions>
      </Dialog>
    </div>
  );
}
