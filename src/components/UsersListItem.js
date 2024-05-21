import Button from "./Button";
import { GoTrashcan } from "react-icons/go";
import { removeUser } from "../store";
import useThunk from "../hooks/use-thunk";
const UsersListItem = ({ user }) => {
  const [doRemoveUser, isDeletingUser, error] = useThunk(removeUser);
  const handleClick = () => {
    doRemoveUser(user);
  };
  return (
    <div className="mb-2 rounded border">
      <div className="flex p-2 justify-between items-center cursor-pointer">
        <div className="flex flex-row justify-between items-center">
          <Button
            className="mr-3"
            loading={isDeletingUser}
            onClick={handleClick}
          >
            <GoTrashcan />
          </Button>
          <div>{error && "Error Deleting User"}</div>
          {user.name}
        </div>
      </div>
    </div>
  );
};

export default UsersListItem;
