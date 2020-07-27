import React from 'react'
import MUITextField, { TextFieldProps } from '@material-ui/core/TextField'

export function TextField(props: TextFieldProps) {
  return <MUITextField variant="outlined" {...props} />
}
