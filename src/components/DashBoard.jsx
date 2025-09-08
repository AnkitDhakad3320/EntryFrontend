import { styled, CircularProgress, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { getUsers } from "../service/api";

const data = [
  "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3", 
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3", 
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3", 
  "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3", 
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3", 
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
];

const Center = styled("p")`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`;

const DashBoard = () => {
  const [val, setVal] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllUsers = async () => {
    setLoading(true);
    try {
      let response = await getUsers();
      setVal(response.data);
    } catch (error) {
      console.error("Error fetching users", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <>
      <Center>Hello, Users</Center>
      <Center>This is DashBoard for Entries available at AllUsers page</Center>

      {loading ? (
        // 🔄 Show spinner while fetching
        <Box display="flex" justifyContent="center" alignItems="center" height="60vh">
          <CircularProgress />
        </Box>
      ) : val.length === 0 ? (
        <Center>No Users Found ❌</Center>
      ) : (
        // ✅ Show users
        <div id="main">
          {val.map((item, index) => (
            <div key={index} className="holder">
              <div className="carder">
                <img src={data[index % data.length]} alt="user" />
              </div>
              <div className="text">
                <h5>{item.userId}</h5>
                <h3>{item.name}</h3>
                <h5>{item.phone}</h5>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default DashBoard;
