import React from 'react'

import {
  Box,
  FormControl,
  Icon,
  IconButton,
  MenuItem,
  Paper,
  Reset,
  Table,
  TableBody,
  TableContainer,
  TableCell,
  TableHead,
  TableRow,
  TextField,
} from './ds'

const accts = [
  {
    value: 'mach',
    label: 'Macu Checking',
  },
]

const cats = [
  {
    value: 'tt',
    label: 'Tithing',
  },
]

const rows = [
  {
    id: 1,
    transDate: new Date(),
    amt: 23.33,
    description: 'This is a thing',
    acct: { value: 'mach', label: 'Mach Checking' },
    cat: { value: 'tt', label: 'Tithing' },
  },
]

function App() {
  const yyyy = new Date().getFullYear()
  return (
    <div>
      <Reset />
      <div style={{ width: '100%' }}>
        <Box display="flex" p={1}>
          <Box flex="1">
            <TextField label="Date" type="date" />
          </Box>
          <Box flex="1">
            <TextField label="Amount" />
          </Box>
          <Box flex="1">
            <TextField label="Description" />
          </Box>
          <Box flex="1">
            <TextField label="Account" select>
              {accts.map((a) => (
                <MenuItem key={a.value} value={a.value}>
                  {a.label}
                </MenuItem>
              ))}
            </TextField>
          </Box>
          <Box flex="1">
            <TextField label="Category" select>
              {cats.map((c) => (
                <MenuItem key={c.value} value={c.value}>
                  {c.label}
                </MenuItem>
              ))}
            </TextField>
          </Box>
        </Box>
      </div>

      <TableContainer>
        <Table aria-label="transaction table">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Desc</TableCell>
              <TableCell>Amt</TableCell>
              <TableCell>Acct</TableCell>
              <TableCell>Cat</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.transDate.toLocaleDateString()}
                </TableCell>
                <TableCell>{row.description}</TableCell>
                <TableCell>${row.amt}</TableCell>
                <TableCell>{row.acct.label}</TableCell>
                <TableCell>{row.cat.label}</TableCell>
                <TableCell>
                  <IconButton onClick={() => alert('wow')}>
                    <Icon.Edit />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default App
