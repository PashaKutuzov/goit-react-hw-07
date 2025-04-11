import { useDispatch } from "react-redux";
import { deleteContact } from "../redux/contactsSlice";

export default function Contact({ data }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(data.id));
  };
  return (
    <div>
      <p>{data.name}</p>
      <p>{data.number}</p>
      <button onClick={handleDelete} type="button">
        Delete
      </button>
    </div>
  );
}
