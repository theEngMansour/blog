import React from 'react';
import Box from '@mui/material/Box';
import {TextField, FormControl} from '@mui/material';
import { useIntl } from 'react-intl';

export default function Field({ name, label, onChange, textError,  variant = 'outlined', ...props }) {
  const { formatMessage } = useIntl()
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
    >

      <TextField 
        name={name}
        label={formatMessage({
            id: label,
            defaultMessage: label
        })} 
        variant={variant} 
        onChange={e => onChange(e.target.value)}
        {...props}
        helperText={textError}
      />
    </Box>
  );
}
