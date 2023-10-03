import s from './EnterButton.module.css';
import { useDispatch } from 'react-redux';
import userIcon from '../../../assets/images/user-icon.png';
import OptionCanvas, { $d } from '../../../functions';
import { getOption } from '../../../middlewares/redux/actions';

export const EnterBtn = () => {
  const dispatch = useDispatch();

  function onClickValue(e) {
    return (
      dispatch(getOption(e.target.id)),
      OptionCanvas(e.target.id),
      $d('#slideCanvasCont').style.overflowY = "hidden"
    )
  };

  return (
    <div className={s.enterBtn} id='login' onClick={(e) => onClickValue(e) }>
      <img className={s.userIconEnter} src={userIcon} alt='userIcon' width='15px'/>
      Ingresar
    </div>
  )
}
