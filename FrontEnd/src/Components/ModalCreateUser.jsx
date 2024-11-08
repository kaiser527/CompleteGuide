import { useState } from "react";
import { postCreateNewUser } from "../services/apiServices";

const ModalCreateUser = (props) => {
  const { fetchListUsers, show, setShow } = props;

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");

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
    if (!name) {
      alert("Missing name !");
      return;
    }

    //submit data
    const data = await postCreateNewUser(email, name, city);
    await fetchListUsers();
    handleResetInput("");
    console.log(data.data);
    setShow(!show);
  };

  return (
    <>
      <h3>Create a new user</h3>
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
        <button onClick={() => setShow(!show)} style={{ marginLeft: "15px" }}>
          Cancel
        </button>
      </div>
    </>
  );
};

export default ModalCreateUser;
