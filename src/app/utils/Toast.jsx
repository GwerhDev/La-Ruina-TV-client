import s from './Toast.module.css';
import closeIcon from '../../assets/images/svg/close-icon.svg'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetToast } from '../../middlewares/redux/actions/toast';
import favoriteIcon from '../../assets/images/svg/like-icon.svg';
import defaultImage from '../../assets/images/ruinatv-icon-play-b.png';
import { motion } from 'framer-motion';

export const Toast = () => {
  const dispatch = useDispatch();
  const toast = useSelector(state => state.toast);

  function closeToast() {
    dispatch(resetToast());
  };

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(resetToast());
    }, 3000);

    return () => {
      clearInterval(interval);
    }
  }, [dispatch, toast]);

  return (
    <>
      {
        toast?.show &&
        <motion.div 
          className={s.container} 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <img className={s.toastImg} src={(toast?.image === "favorite" ? favoriteIcon : toast.image) || defaultImage} alt="" />
          <span>
            <div className={s.toastMessage}>
              <p className={s.title}>{toast.title}</p>
            </div>
            <p className={s.description}>{toast.message}</p>
          </span>
          <button className={s.closeButton} onClick={closeToast}>
            <img src={closeIcon} alt="Cerrar" width={20} />
          </button>
        </motion.div>
      }
    </>
  )
}

