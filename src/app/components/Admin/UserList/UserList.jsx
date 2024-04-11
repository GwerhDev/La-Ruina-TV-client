import s from './UserList.module.css';
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { resetIdYT, resetOption } from "../../../../middlewares/redux/actions";
import { deleteUser, getUsers } from '../../../../middlewares/redux/actions/admin';

const EditUserList = () => {
  const dispatch = useDispatch();
  const userList = useSelector(state => state.userList);
  const currentUser = useSelector(state => state.currentUser);

  function handleDeleteButton(id) {
    dispatch(deleteUser(id));
  };

  useEffect(() => {
    dispatch(getUsers());
    dispatch(resetOption());
    dispatch(resetIdYT());
  }, [dispatch]);

  return (
    <main className='main-container'>
      <div className='nav-fixed' />
      {
        currentUser?.role === 'admin' &&
        <div className='section-container'>
          <div className='header-container'>
            <span className='section-description-container'>
              <h1>Listado de contenido</h1>
              <h3>Admin</h3>
            </span>
          </div>
          <div className={s.divList}>
            <ul className={s.ulList0}>
              <li>Profile Pic</li>  -
              <li>Username</li> -
              <li>Email</li> -
              <li>Role</li> -
              <li>Delete</li>
            </ul>
            {
              userList?.map((e, index) => {
                return (
                  <ul className={s.list} key={index}>
                    <li>{e.profilePic || "❗"}</li> -
                    <li>{e.username || "❗"}</li> -
                    <li>{e.email || "❗"}</li> -
                    <li>{e.role || "❗"}</li> -
                    <li>
                      <button className={s.btnDelete} onClick={() => handleDeleteButton(e.id)} />
                    </li>
                  </ul>
                )
              })
            }
          </div>
        </div>
      }
    </main>
  )
}

export default EditUserList;