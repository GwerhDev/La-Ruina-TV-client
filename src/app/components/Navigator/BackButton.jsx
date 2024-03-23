import s from './BackButton.module.css';
import backIcon from '../../../assets/images/ruinatv-icon-play-b.png';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { resetOption } from '../../../middlewares/redux/actions';
import { toTop } from '../../../functions/toTop';

export const BackButton = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const backRoute = useSelector(state => state.navigation?.backRoute) || null;

    function handleButton() {
        toTop();
        dispatch(resetOption());
        history.push(backRoute || '');
    };

    return (
        <div className={s.backContainer}>
            <button
                className={s.backContainer}
                onClick={handleButton}>
                <img className={s.backIcon} src={backIcon} alt='backIcon' width='15px' />
                Volver
            </button>
        </div>
    )
}
