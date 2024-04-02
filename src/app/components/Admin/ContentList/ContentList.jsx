import s from './ContentList.module.css';
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { resetIdYT, resetOption } from "../../../../middlewares/redux/actions";
import { getMedia, resetMedia } from '../../../../middlewares/redux/actions/content';
import { deleteMedia, setEdition } from '../../../../middlewares/redux/actions/admin';

const ContentList = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const mediaList = useSelector(state => state.mediaList);

  function handleEditButton(id) {
    dispatch(setEdition(true));
    history.push(`/view/v=${id}`);
  }

  useEffect(() => {
    dispatch(getMedia());
    dispatch(resetMedia());
    dispatch(resetOption());
    dispatch(resetIdYT());
  }, [dispatch]);

  return (
    <main className='main-container'>
      <div className='nav-fixed' />
      <div className='section-container'>
        <div className='header-container'>
          <span className='section-description-container'>
            <h1>Listado de contenido</h1>
            <h3>Admin</h3>
          </span>
        </div>
        <div className={s.divList}>
          <div className={s.ulList1}>
            <ul className={s.ulList0}>
              <li>Title</li>  -
              <li>Artist</li> -
              <li>Edit</li>   -
              <li>Delete</li>
            </ul>
            {
              mediaList?.map((e, index) => {
                return (
                  <li key={index}>
                    <ul className={s.ulList2}>
                      <li>{e.title || "❗"}</li> -
                      <li>{e.artist || "❗"}</li> -
                      <li>
                        <button className={s.btnEdit} onClick={() => handleEditButton(e.id)} />
                      </li> 
                      -
                      <li>
                        <button className={s.btnDelete} onClick={() => { dispatch(deleteMedia(e.id)) }} />
                      </li>
                    </ul>
                  </li>
                )
              })
            }
          </div>
        </div>
      </div>
    </main>
  )
}

export default ContentList;