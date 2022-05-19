import React from 'react';
import Box from '@mui/material/Box';
import {TextField, FormControl} from '@mui/material';
import { useIntl } from 'react-intl';

export default function Field({ name, label, onChange, variant = 'outlined', ...props }) {
  const { formatMessage } = useIntl()
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
    >
      <TextField 
        className="w-[250px] sm:w-[390px]"
        name={name}
        id="outlined-basic" 
        label={formatMessage({
            id: label,
            defaultMessage: label
        })} 
        variant={variant} 
        onChange={e => onChange(e.target.value)}
        {...props}
      />
    </Box>
  );
}
