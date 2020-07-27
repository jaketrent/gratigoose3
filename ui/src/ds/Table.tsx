import MUITable, { TableProps } from '@material-ui/core/Table'
import MUITableBody, { TableBodyProps } from '@material-ui/core/TableBody'
import MUITableCell, { TableCellProps } from '@material-ui/core/TableCell'
import MUITableContainer, {
  TableContainerProps,
} from '@material-ui/core/TableContainer'
import MUITableHead, { TableHeadProps } from '@material-ui/core/TableHead'
import MUITableRow, { TableRowProps } from '@material-ui/core/TableRow'
import MUIPaper, { PaperProps } from '@material-ui/core/Paper'
import React from 'react'

export function Table(props: TableProps) {
  return <MUITable {...props} />
}

export function TableBody(props: TableBodyProps) {
  return <MUITableBody {...props} />
}

export const TableContainer = MUITableContainer
/* export function TableContainer(props: TableContainerProps) { */
/*   const { component, ...rest } = props */
/*   return <MUITableContainer {...rest} /> */
/* } */

export function TableCell(props: TableCellProps) {
  return <MUITableCell {...props} />
}

export function TableHead(props: TableHeadProps) {
  return <MUITableHead {...props} />
}

export function TableRow(props: TableRowProps) {
  return <MUITableRow {...props} />
}

export function Paper(props: PaperProps) {
  return <MUIPaper {...props} />
}
