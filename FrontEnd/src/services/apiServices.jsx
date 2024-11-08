import axios from "axios";

const postCreateNewUser = (email, name, city) => {
  const data = {
    email: email,
    name: name,
    city: city,
  };
  return axios.post("http://localhost:3003/create-user", data);
};

const putUpdateUser = (id, email, name, city) => {
  const data = {
    id: id,
    email: email,
    name: name,
    city: city,
  };
  return axios.put(`http://localhost:3003/update-user/${id}`, data);
};

const getAllUser = () => {
  return axios.get("http://localhost:3003/users");
};

const deleteUser = (userid) => {
  return axios.delete(`http://localhost:3003/delete-user/${userid}`);
};

export { getAllUser, postCreateNewUser, putUpdateUser, deleteUser };
