import React, { useState, useEffect } from "react";
import UserForm from "./UserForm";
import UserList from "./UserList";
import axios from "axios";
import Search from "./Search";

function UserManagement() {
  // state quản lý danh sách người dùng
  const [users, setUsers] = useState([]);
  // state quản lý user đang được chọn
  const [selectedUser, setSelectedUser] = useState({});
  // state quản lý giá trị tìm kiếm
  const [searchByEmail, setSearchByEmail] = useState("");

  // Viết hàm call API để lấy danh sách users
  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://63e86415ac3920ad5beb7b08.mockapi.io/api/users",
        {
          params: {
            email: searchByEmail || undefined,
          },
        }
      );
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Viết hàm xử lý nhận vào object user và thêm hoặc cập nhật user
  const handleSubmit = async (user) => {
    const { id, ...payload } = user;

    try {
      if (id) {
        // Cập nhật
        await axios.put(
          `https://63e86415ac3920ad5beb7b08.mockapi.io/api/users/${id}`,
          payload
        );
      } else {
        // Thêm mới
        await axios.post(
          "https://63e86415ac3920ad5beb7b08.mockapi.io/api/users",
          payload
        );
      }
      // Gọi hàm fetchUser sau khi call API create/update
      fetchUsers();
    } catch (error) {
      console.log(error);
    }
  };

  // Viết hàm xử lý nhận vào userId và xoá user
  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(
        `https://63e86415ac3920ad5beb7b08.mockapi.io/api/users/${userId}`
      );
      // Sau khi xoá thành công, dữ liệu chỉ mới thay đổi ở phía server
      // Cần gọi lại hàm fetchUsers để gọi API lấy danh sách users mới nhất và set lại cho state users
      fetchUsers();
    } catch (error) {
      console.log(error);
    }
  };

  // Viết hàm xử lý nhận vào object user, và lưu vào state selectedUser
  const handleSelectUser = (user) => {
    setSelectedUser(user);
  };

  // Viết hàm xử lý nhận vào giá trị searchString
  const handleSearch = (searchString) => {
    setSearchByEmail(searchString);
    // ?: Khi state searchByEmail thay đổi, ta muốn gọi lại hàm fetchUser
    // => Đưa state searchByEmail vào array của useEffect
  };

  useEffect(() => {
    fetchUsers();
  }, [searchByEmail]);

  return (
    <div className="container-fluid">
      <h1 className="text-center text-primary">User management</h1>

      <div className="card">
        <div className="card-header bg-dark text-white">User Form</div>
        <div className="card-body">
          <UserForm
            user={selectedUser}
            onSubmit={handleSubmit}
            onReset={() => setSelectedUser({})}
          />
        </div>
      </div>

      <div className="mt-4">
        <Search onSearch={handleSearch} />
      </div>

      <div className="mt-4">
        <UserList
          users={users}
          onDeleteUser={handleDeleteUser}
          onSelectUser={handleSelectUser}
        />
      </div>
    </div>
  );
}

export default UserManagement;
