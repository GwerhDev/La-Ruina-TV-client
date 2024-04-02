import s from './ContentMagementButtons.module.css';

import editIcon from '../../../../assets/images/edit-icon.png';
import deleteIcon from '../../../../assets/images/delete-icon.png';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { $d, $gId } from '../../../../functions';
import { useDispatch } from 'react-redux';
import { setEdition } from '../../../../middlewares/redux/actions/admin';

export const ContentMagementButtons = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    function handleEdit() { 
        dispatch(setEdition(true))
        $gId('edition-canvas').style.width = '50%';
    };

    function handleDeleteMedia() { $d(`#deleteCanvasViewer${id}`).style.display = 'flex' };

    return (
        <div className={s.container}>
            <ul className={s.adminRequest}>
                <li className={s.adminBtn} onClick={ handleEdit }>
                    <img src={editIcon} className={s.editImg} alt='edit' width='30px'/>
                </li>
                <li className={s.adminBtn} onClick={ handleDeleteMedia }>
                    <img src={deleteIcon} className={s.deleteImg} alt='delete' width='30px'/>
                </li>
            </ul>
        </div>
    )
}