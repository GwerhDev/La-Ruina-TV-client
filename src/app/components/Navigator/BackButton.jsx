import { useHistory } from 'react-router-dom';
import s from './BackButton.module.css';
import React from 'react';
import backIcon from '../../../assets/images/ruinatv-icon-play-b.png';
import { useDispatch } from 'react-redux';
import { resetOption } from '../../../middlewares/redux/actions';
import { toTop } from '../../../functions/toTop';

export const BackButton = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { backRoute } = props || null;

    function handleButton() {
        toTop();
        dispatch(resetOption());
        history.push(backRoute || '');
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
