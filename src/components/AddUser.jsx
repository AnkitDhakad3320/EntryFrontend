import {
  FormControl,
  FormGroup,
  InputLabel,
  Input,
  Typography,
  styled,
  Button,
} from "@mui/material";
import { useState } from "react";
import { addUser } from "../service/api";
import { useNavigate } from "react-router-dom";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 20px auto;
  border: 1px solid #e4e1e1ff;
  border-radius: 10px;
  padding: 20px;
  & > div {
    margin-top: 20px;
  }
`;

const defaultValues = {
  name: "",
  userName: "",
  email: "",
  phone: "",
};

const Adduser = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(defaultValues);
  const [emptyField, setEmptyField] = useState(false);

  const onValueChange = (e) => {
    console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const addUserDetails = async () => {
    if (!user.name || !user.userName || !user.email || !user.phone) {
      setEmptyField(true);
    } else {
      await addUser(user);
      navigate("/all");
    }
  };

  return (
    <Container>
      <Typography variant="h4">Add User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="name" />
      </FormControl>
      <FormControl>
        <InputLabel>UserName</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="userName" />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="email" />
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="phone" />
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick={() => addUserDetails()}>
          Add User
        </Button>
      </FormControl>
      {emptyField && (
        <Typography color="error" style={{ marginTop: "10px" }}>
          All fields are necessary to be filled.
        </Typography>
      )}
    </Container>
  );
};

export default Adduser;
