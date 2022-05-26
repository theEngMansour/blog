import React from 'react';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import { useIntl } from 'react-intl';

export default function Field({ name, error, label, onChange, textError, value = null, variant = 'outlined', ...props }) {
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
        onChange={onChange}
        {...props}
        helperText={textError}
        value={value}
        error={error}
      />
    </Box>
  );
}
