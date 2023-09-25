import s from './SearchBar.module.css';
import React, { useState } from "react";
import { resetOption } from "../../../middlewares/redux/actions";
import { searchBarFunction } from './js/SearchBar';
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { $d } from "../../../functions";
import searchIcon from '../../../assets/images/search-icon.png';

export default function SearchBar() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    setSearch(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (search.length > 0) {
      return (
        dispatch(resetOption()),
        $d(`.bodyApp`).style.transform = 'translateX(0)',
        $d(`.navCont`).style.transitionDuration = '.2s',
        $d(`.bodyApp`).style.transitionDuration = '2s',
        $d(`.navCont`).style.width = '100vw',
        $d(`.browserBody`).style.height = 'auto',
        $d(`.browserBody`).style.overflowY = 'scroll',
        $d(`.visor`).style.transform = 'translateX(0)',
        $d('#slideCanvasCont').style.overflowY = "scroll",
        history.push(`/search/${search}`)
      );
    }
  };

  return (
    <div className={s.barCont}>
      <form className={s.form_search_bar} onSubmit={(e) => handleSubmit(e)}>
        <input
          className={s.liSearchBar}
          id="liSearchBar"
          type="text"
          placeholder="Buscar..."
          onChange={handleInputChange}
          onMouseEnter={() => { return searchBarFunction('enter') }}
        />
        <button
          className={s.liSearchBtn}
          type="submit"
          disabled={false}
          onMouseEnter={() => { return searchBarFunction('enter') }}>
          <img className={s.mediaSearch} src={searchIcon} height='20' alt="search" />
        </button>
      </form>
    </div>
  )
}
