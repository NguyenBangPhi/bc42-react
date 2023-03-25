import React, { useState } from "react";
import UserForm from "./UserForm";
import UserList from "./UserList";

function UserManagement() {
  // state quản lý danh sách người dùng
  const [users, setUsers] = useState([
    {
      id: 1,
      firstName: "Dan",
      lastName: "Nguyen",
      email: "dan@gmail.com",
      address: "123 Cao Thắng",
    },
  ]);
  // state quản lý user đang được chọn
  const [selectedUser, setSelectedUser] = useState({});

  // Viết hàm xử lý nhận vào object user, thêm vào state users
  const handleSubmit = (user, type) => {
    if (type === "create") {
      const id = Math.floor(Math.random() * 100);
      setUsers([...users, { ...user, id }]);
    } else if (type === "update") {
      const newUsers = users.map((item) => {
        if (item.id === user.id) {
          return user;
        }
        return item;
      });
      setUsers(newUsers);
    }
  };

  // Viết hàm xử lý nhận vào userId, xoá user có id bằng userId khỏi state users
  const handleDeleteUser = (userId) => {
    const newUsers = users.filter((user) => user.id !== userId);
    setUsers(newUsers);
  };

  // Viết hàm xử lý nhận vào object user, và lưu vào state selectedUser
  const handleSelectUser = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="container-fluid">
      <h1 className="text-center text-primary">User management</h1>

      <div className="card">
        <div className="card-header bg-dark text-white">User Form</div>
        <div className="card-body">
          <UserForm
            key={selectedUser.id}
            user={selectedUser}
            onSubmit={handleSubmit}
          />
        </div>
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
