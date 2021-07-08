import React from 'react';
import Switch from '@material-ui/core/Switch';

export default function StSwitch() {
  const [state, setState] = React.useState({
    checked: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div>
      <Switch
        checked={state.checked}
        onChange={handleChange}
        color="primary"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
    </div>
  );
}