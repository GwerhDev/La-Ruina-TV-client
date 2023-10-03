import s from './BackButton.module.css';
import React from 'react';
import backIcon from '../../../assets/images/ruinatv-icon-play-b.png';
import { useDispatch } from 'react-redux';
import { resetOption } from '../../../middlewares/redux/actions';
import { BodyCss } from '../../../functions';
import { reset } from './js/Reset';

export const BackButton = () => {
    const dispatch = useDispatch()
    return (
        <div className={s.BackButton}>      
            <button
                className={s.BackButton} 
                onClick={()=>{
                    return(
                        dispatch(resetOption()),
                        BodyCss(),
                        reset()
                    )
                }
            }><img className={s.backIcon} src={backIcon} alt='backIcon' width='15px' />Volver
        </button>
    </div>
  )
}
