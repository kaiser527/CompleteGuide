import ListUsers from "./Components/ListUsers";
import ModalCreateUser from "./Components/ModalCreateUser";
import "./style/App.scss";
import { useEffect, useState } from "react";
import { getAllUsers } from "./services/apiServices";
import ModalUpdateUser from "./Components/ModalUpdateUser";
import ModalDeleteUser from "./Components/ModalDeleteUser";

const App = () => {
  const [data, setData] = useState([]);
  const [dataUpdate, setDataUpdate] = useState({});
  const [dataDelete, setDataDelete] = useState({});
  const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);
  const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
  const [showModalCreateUser, setShowModalCreateUser] = useState(false);

  useEffect(() => {
    fetchListUsers();
  }, []);

  const fetchListUsers = async () => {
    const res = await getAllUsers();
    setData(res.data);
    console.log(res.data);
  };

  const handleCLickBtnUpdate = (user) => {
    setDataUpdate(user);
    setShowModalUpdateUser(true);
  };

  const handleClickBtnDelete = (user) => {
    setDataDelete(user);
    setShowModalDeleteUser(true);
  };

  return (
    <>
      <div>
        <div className="center">
          {!showModalCreateUser ? (
            <button
              onClick={() => setShowModalCreateUser(!showModalCreateUser)}
            >
              Add new User
            </button>
          ) : (
            <ModalCreateUser
              fetchListUsers={fetchListUsers}
              show={showModalCreateUser}
              setShow={setShowModalCreateUser}
            />
          )}
        </div>
        {showModalUpdateUser && (
          <div className="center">
            <ModalUpdateUser
              dataUpdate={dataUpdate}
              fetchListUsers={fetchListUsers}
              setShow={setShowModalUpdateUser}
            />
          </div>
        )}
        {showModalDeleteUser && (
          <div className="center">
            <ModalDeleteUser
              dataDelete={dataDelete}
              setShow={setShowModalDeleteUser}
              fetchListUsers={fetchListUsers}
            />
            <div>
              <button
                onClick={() => setShowModalDeleteUser(!showModalDeleteUser)}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
      <br />
      <ListUsers
        data={data}
        handleCLickBtnUpdate={handleCLickBtnUpdate}
        handleClickBtnDelete={handleClickBtnDelete}
      />
    </>
  );
};

export default App;
