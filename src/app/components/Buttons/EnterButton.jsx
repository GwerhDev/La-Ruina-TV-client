import { useDispatch } from 'react-redux';
import s from './EnterButton.module.css';
import userIcon from '../../../assets/images/svg/profile-icon.svg';
import { useHistory } from 'react-router-dom';
import { setOption } from '../../../middlewares/redux/actions';

export const EnterButton = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  function onClickValue() {
    dispatch(setOption('login'));
    history.push('/login');
  };

  return (
    <button className={s.container} onClick={onClickValue}>
      <img src={userIcon} alt='userIcon' width='20px' />
      Ingresar
    </button>
  )
};
