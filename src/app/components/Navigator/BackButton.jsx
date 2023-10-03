import s from './BackButton.module.css';
import React from 'react';
import backIcon from '../../../assets/images/ruinatv-icon-play-b.png';
import { useDispatch } from 'react-redux';
import { resetOption } from '../../../middlewares/redux/actions';
import { BodyCss } from '../../../functions';
import { reset } from '../../../functions/Reset';

export const BackButton = () => {
    const dispatch = useDispatch();
    function handleButton() {
        dispatch(resetOption());
        BodyCss();
        reset();
    };

    return (
        <div className={s.BackButton}>
            <button
                className={s.BackButton}
                onClick={handleButton}>
                <img className={s.backIcon} src={backIcon} alt='backIcon' width='15px' />
                Volver
            </button>
        </div>
    )
}
