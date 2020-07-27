import React from 'react'
import MUIMenuItem, { MenuItemProps } from '@material-ui/core/MenuItem'

export function MenuItem(props: MenuItemProps) {
  const { button, ...rest } = props
  return <MUIMenuItem {...rest} />
}
