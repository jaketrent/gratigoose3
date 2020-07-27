import React from 'react'
import MUIInput from '@material-ui/core/Input'

interface Props {
  startAdornment?: React.ReactNode
}

export function Input(props: Props) {
  /* return <div>text</div> */
  return <MUIInput {...props} />
}
