import s from './EditUsersList.module.css';
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { resetOption } from "../../../middlewares/redux/actions";
import { getUsers } from '../../../middlewares/redux/actions/admin';

export const EditUsersList = () => {
    const dispatch = useDispatch();
    const usersList = useSelector(state => state.usersList);
    
    useEffect(() => {
        dispatch(getUsers());
        dispatch(resetOption());
    }, [dispatch]);

    return (
        <div className={s.editListCont}>
            <div className={s.editListFormat} >
                Listado de usuarios
                <div>
                    <ul>
                        {
                            usersList?.map((e, index) => {
                                return (
                                    <li key={index}>
                                        {index} - {e.name} - {e.id}
                                        <button onClick={() => {

                                        }}> Edit </button>
                                        <button onClick={() => {

                                        }}> Delete </button>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}