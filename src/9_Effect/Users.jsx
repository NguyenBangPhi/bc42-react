import axios from "axios";
import React, { useState, useEffect } from "react";

function Users() {
  // state quản lý giá trị trả về từ API
  const [users, setUsers] = useState([]);

  // Hàm dùng để call API
  const fetchUsers = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/users",
      });
      // Call API thành công, set state cho users bằng data trả về từ API
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Dùng useEffect để gọi gọi API
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Users</h1>

      <ul>
        {users.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default Users;
