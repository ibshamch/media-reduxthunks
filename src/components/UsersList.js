import { useEffect } from "react";
import { useSelector } from "react-redux";
import useThunk from "../hooks/use-thunk";
import { fetchUsers, addUser } from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";

export const UsersList = () => {
  const [doFetchUsers, isLoadingUsers, loadingUsersError] =
    useThunk(fetchUsers);
  const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser);
  const { data } = useSelector((state) => {
    return state.users;
  });
  useEffect(() => {
    doFetchUsers();
  }, [doFetchUsers]);
  const handleUserAdd = () => {
    doCreateUser();
  };
  // if (isLoadingUsers) {
  //   return <Skeleton className="h-10 w-full" times={6} />;
  // }
  // if (loadingUsersError) {
  //   return <div>Error Fetching Data...</div>;
  // }
  const renderedUsers = data.map((user) => {
    return (
      <div key={user.id} className="mb-2 rounded border">
        <div className="flex p-2 justify-between items-center cursor-pointer">
          {user.name}
        </div>
      </div>
    );
  });
  return (
    <div>
      <div className="flex flex-row justify-between m-3">
        <h1 className="m-2 text-xl">Users</h1>

        <Button loading={isCreatingUser} onClick={handleUserAdd} primary>
          Add User
        </Button>
        {creatingUserError && "Error Creating User"}
      </div>
      {isLoadingUsers && <Skeleton className="h-10 w-full" times={6} />}
      {loadingUsersError && <div>Error Loading Users</div>}
      {!isLoadingUsers && renderedUsers}
    </div>
  );
};
