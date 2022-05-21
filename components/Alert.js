import React from 'react';
import {Alert, AlertTitle, Stack} from '@mui/material';

export default function alertMessage({type, title, text}) {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity={type}>
        <AlertTitle style={{ fontFamily: "Jannat"}} className="font-semibold">{title}</AlertTitle>
        {text}
      </Alert>
    </Stack>
  );
}
