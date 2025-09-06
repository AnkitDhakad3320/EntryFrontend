import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  styled,
  Button,
} from "@mui/material";

import { getUsers, deleteUser } from "../service/api";
import { Link } from "react-router-dom";

const StyledTable = styled(TableContainer)`
  width: 90%;
  margin: 20px auto;
`;
const Thead = styled(TableRow)`
  background-color: #000000;
  & > th {
    color: white;
    font-size: 16px;
  }
`;

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    let response = await getUsers();
    setUsers(response.data);
  };

  const deleteUserDetails = async (id) => {
    await deleteUser(id);
    getAllUsers();
  };

  return (
    <StyledTable component={Paper}>
      <Table>
        <TableHead>
          <Thead>
            <TableCell align="center">userId</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">User&nbsp;Name</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Phone&nbsp;No.</TableCell>
            <TableCell align="center"></TableCell>
          </Thead>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.userId}>
              <TableCell align="center">{user.userId}</TableCell>
              <TableCell align="center">{user.name}</TableCell>
              <TableCell align="center">{user.userName}</TableCell>
              <TableCell align="center">{user.email}</TableCell>
              <TableCell align="center">{user.phone}</TableCell>
              <TableCell align="center">
                <Button
                  variant="contained"
                  style={{ marginRight: "10px" }}
                  component={Link}  
                  to={`/edit/${user.userId}`}
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => deleteUserDetails(user.userId)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </StyledTable>
  );
};
export default AllUsers;
