import _ from "lodash";
import { useState, useEffect } from "react";

const ModalDeleteUser = (props) => {
  const { dataDelete } = props;

  const [email, setEmail] = useState("");

  useEffect(() => {
    if (!_.isEmpty(dataDelete)) {
      setEmail(dataDelete.email);
    }
  }, [dataDelete]);

  return (
    <>
      <h3 style={{ marginBottom: "0" }}>Delete a user</h3>
      <p>
        Are you sure to Delete this user:{"\t"}
        <b>{email}</b>
      </p>
    </>
  );
};

export default ModalDeleteUser;
