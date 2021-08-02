import React from 'react';
import { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { getUsers } from 'utils/user';
import StPaper from 'styledComponents/StPaper';

interface Column {
  id: 'firstName' | 'lastName' | 'score';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: Column[] = [
  { id: 'firstName', label: 'Name', minWidth: 170 },
  //{ id: 'lastName', label: 'Last name', minWidth: 170 },
  {
    id: 'score',
    label: 'Score',
    minWidth: 100,
    align: 'right',
    format: (value: number) => value.toFixed(2),
  },
];

interface Data {
  first_name: string;
  last_name: string;
  score: number;
}

function createData(
  first_name: string,
  last_name: string,
  score: number
): Data {
  return { first_name, last_name, score };
}

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [users, setUsers] = useState<any>([]);
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    //const [users, setUsers] = useState<any>([]);
    const loadUsers = async () => {
      const userArray = await getUsers();
      setUsers(userArray);
    };
    loadUsers();
  }, []);

  const sortedUsers = users
    .sort((a: any, b: any) => (a.points < b.points ? -1 : 1))
    .reverse();
  const rows = sortedUsers.map((e: any) =>
    createData(e.first_name, e.last_name, e.points)
  );

  return (
    <StPaper>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row: any, index: number) => (
              <TableRow key={index}>
                {
                  <TableCell component="th" scope="row">
                    {row.first_name} {row.last_name}
                  </TableCell>
                }
                {/* <TableCell align="left">{row.last_name}</TableCell> */}
                <TableCell align="right">{row.score}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </StPaper>
  );
}
