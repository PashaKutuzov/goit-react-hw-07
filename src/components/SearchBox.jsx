import { useDispatch, useSelector } from "react-redux";
import css from "./ContactsStyle/SearchBox.module.css";
import { setFilter } from "../redux/filtersSlice";
export default function SearchBox() {


const dispatch = useDispatch()
const value = useSelector(state => state.filters.name)

const onFilters = (value) => {
  dispatch(setFilter(value))
}

  return (
    <div>
      <p>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={(e) => onFilters(e.target.value)}
      />
    </div>
  );
}
