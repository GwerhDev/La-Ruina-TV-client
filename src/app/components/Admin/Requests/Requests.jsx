import s from './Requests.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetOption } from '../../../../middlewares/redux/actions';
import editIcon from '../../../../assets/images/svg/edit-icon.svg';
import userIcon from '../../../../assets/images/png/user-icon.png';
import createIcon from '../../../../assets/images/png/create-icon.png';

export const Requests = () => {
  const dispatch = useDispatch();

  function handleOption() {
    return (
      dispatch(resetOption())
    )
  }

  return (
    <div className={s.reqContainer}>
      <Link to='/media/create'>
        <button className={s.crearPost} onClick={handleOption}>
          <img src={createIcon} alt="" />
          Crear Contenido
        </button>
      </Link>
      <Link to='/media/edit'>
        <button className={s.crearPost} onClick={handleOption}>
          <img src={editIcon} alt="" />
          Modificar Contenido
        </button>
      </Link>
      <Link to='/users/edit'>
        <button className={s.crearPost} onClick={handleOption}>
          <img src={userIcon} alt="" />
          Administrar Usuarios
        </button>
      </Link>
    </div>
  )
}