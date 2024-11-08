const ListUsers = (props) => {
  const { data, handleCLickBtnUpdate, handleClickBtnDelete } = props;

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th>Email</th>
            <th>Name</th>
            <th>City</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={`table-users-${index}`}>
                <td>{index + 1}</td>
                <td>{item.email}</td>
                <td>{item.name}</td>
                <td>{item.city}</td>
                <td className="button">
                  <button
                    style={{ marginRight: "15px" }}
                    onClick={() => handleClickBtnDelete(item)}
                  >
                    Delete
                  </button>
                  <button onClick={() => handleCLickBtnUpdate(item)}>
                    Update
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListUsers;
