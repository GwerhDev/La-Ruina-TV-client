import s from './ContentMagementButtons.module.css';

import editIcon from '../../../../assets/images/edit-icon.png';
import { $gId } from '../../../../functions';
import { useDispatch } from 'react-redux';
import { setEdition } from '../../../../middlewares/redux/actions/admin';

export const ContentMagementButtons = () => {
  const dispatch = useDispatch();

  function handleEdit() {
    dispatch(setEdition(true))
    $gId('edition-canvas').style.width = '300px';
  };

  return (
    <ul className={s.container}>
      <li className={s.adminBtn} onClick={handleEdit}>
        <img src={editIcon} className={s.editImg} alt='edit' width='20px' />
        <p>Editar</p>
      </li>
    </ul>
  )
}