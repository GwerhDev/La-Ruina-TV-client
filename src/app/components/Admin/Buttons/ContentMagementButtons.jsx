import s from './ContentMagementButtons.module.css';
import { useHistory } from "react-router-dom";

import editIcon from '../../../../assets/images/edit-icon.png';
import deleteIcon from '../../../../assets/images/delete-icon.png';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { $d } from '../../../../functions';

export const ContentMagementButtons = () => {
    const { id } = useParams();
    const history = useHistory();

    function handleRedirect() { history.push(`/content/edit/${id}`) };

    function handleDeleteMedia() { $d(`#deleteCanvasViewer${id}`).style.display = 'flex' };

    return (
        <div className={s.container}>
            <ul className={s.adminRequest}>
                <li className={s.adminBtn} onClick={ handleRedirect }>
                    <img src={editIcon} className={s.editImg} alt='edit' width='30px'/>
                </li>
                <li className={s.adminBtn} onClick={ handleDeleteMedia }>
                    <img src={deleteIcon} className={s.deleteImg} alt='delete' width='30px'/>
                </li>
            </ul>
        </div>
    )
}