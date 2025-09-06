import { styled } from "@mui/material";

const Center = styled("p")`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`;

const DashBoard = () => {
  return (
    <>
      <Center>Hello , Users</Center>
      <Center>This is DashBoard for Entries avaliable at allUsers page </Center>
    </>
  );
};
export default DashBoard;
