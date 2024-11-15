import { useState, useEffect } from "react";
import { putUpdateUser } from "../services/apiServices";
import _ from "lodash";

const ModalUpdateUser = (props) => {
  const { fetchListUsers, dataUpdate, setShow } = props;

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");

  useEffect(() => {
    if (!_.isEmpty(dataUpdate)) {
      setEmail(dataUpdate.email);
      setName(dataUpdate.name);
      setCity(dataUpdate.city);
    }
  }, [dataUpdate]);

  const handleResetInput = () => {
    setEmail("");
    setName("");
    setCity("");
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleOnSubmitUsers = async () => {
    //validate
    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      alert("Invalid email !");
      return;
    }

    //submit data
    const res = await putUpdateUser(dataUpdate.id, email, name, city);
    if (res && res.data.errCode === 0) {
      await fetchListUsers();
      handleResetInput();
      alert(res.data.message);
      setShow(false);
    }
  };

  return (
    <>
      <h3>Update a user</h3>
      <div>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="city"
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />
      </div>
      <br />
      <div>
        <button onClick={() => handleOnSubmitUsers()}>Submit</button>
        <button onClick={() => setShow(false)} style={{ marginLeft: "15px" }}>
          Cancel
        </button>
      </div>
    </>
  );
};

export default ModalUpdateUser;
