import _ from "lodash";
import { useState, useEffect } from "react";
import { deleteUser } from "../services/apiServices";

const ModalDeleteUser = (props) => {
  const { dataDelete, setShow, fetchListUsers } = props;

  const [email, setEmail] = useState("");

  useEffect(() => {
    if (!_.isEmpty(dataDelete)) {
      setEmail(dataDelete.email);
    }
  }, [dataDelete]);

  const handleSubmitDeleteUser = async () => {
    const res = await deleteUser(dataDelete.id);
    if (res && res.data.errCode === 0) {
      await fetchListUsers();
      alert(res.data.message);
      setShow(false);
    }
  };

  return (
    <>
      <h3 style={{ marginBottom: "0" }}>Delete a user</h3>
      <p>
        Are you sure to Delete this user:{"\t"}
        <b>{email}</b>
      </p>
      <button onClick={() => handleSubmitDeleteUser()}>confirm delete</button>
    </>
  );
};

export default ModalDeleteUser;
