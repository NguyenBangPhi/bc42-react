import React, { useState, useEffect } from "react";

function UserForm({ user, onSubmit, onReset }) {
  // state quản lý giá trị của các input trong form
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
  });

  // Hàm setup của useEffect sẽ được chạy ở sau lần render đầu tiên và sau mỗi lần render tiếp theo nếu giá trị của prop user bị thay đổi
  useEffect(() => {
    // Dùng giá trị mới của prop user để cập nhật cho state values
    setValues(user);
  }, [user]);

  const handleChange = (evt) => {
    const { value, name } = evt.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (evt) => {
    // Chặn hành vi submit mặc định của form
    evt.preventDefault();

    // Gọi prop onSubmit và truyền vào object values
    onSubmit(values);

    // Gọi hàm handleResetForm để set giá trị trên các input về rỗng
    handleResetForm();
  };

  const handleResetForm = () => {
    setValues({
      firstName: "",
      lastName: "",
      email: "",
      address: "",
    });
    onReset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">First Name</label>
        <input
          type="text"
          name="firstName"
          className="form-control"
          value={values.firstName}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Last Name</label>
        <input
          type="text"
          name="lastName"
          className="form-control"
          value={values.lastName}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Address</label>
        <input
          type="text"
          className="form-control"
          name="address"
          value={values.address}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="btn btn-success me-2">
        Submit
      </button>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={handleResetForm}
      >
        Reset
      </button>
    </form>
  );
}

export default UserForm;
