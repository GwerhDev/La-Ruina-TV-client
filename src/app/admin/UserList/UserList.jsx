import s from './UserList.module.css'
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { resetIdYT, resetOption } from "../../../middlewares/redux/actions";
import { deleteUser, getUsers } from '../../../middlewares/redux/actions/admin';

const EditUserList = () => {
    const dispatch = useDispatch()
    const mediaList = useSelector(state => state.userList)
    useEffect(() => {
        dispatch(getUsers());
        dispatch(resetOption());
        dispatch(resetIdYT());
    }, [dispatch]);
    return (
        <div className={s.editListCont}>
            <div className={s.editListFormat} >
                <h1>Listado de usuarios</h1>
                <div className={s.divList}>
                    <div className={s.ulList1}>
                        <ul className={s.ulList0}>
                            <li>Profile Pic</li> -
                            <li>Username</li>    -
                            <li>Email</li>       -
                            <li>Role</li>        -
                            <li>Delete</li>
                        </ul>
                        {
                            mediaList?.map((e, index) => {
                                return (
                                    <li key={index}>
                                        <ul className={s.ulList2}>
                                            <li><img src={e.profilePic} height={80} alt="" /></li> -
                                            <li>{e.username}</li> -
                                            <li>{e.email}</li> -
                                            <li>{e.role}</li> -
                                            <li>
                                                <button
                                                    className={s.btnDelete}
                                                    disabled={e.role === 'admin'}
                                                    onClick={() => {
                                                        dispatch(deleteUser(e.id))
                                                    }}>
                                                </button>
                                            </li>
                                        </ul>
                                    </li>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditUserList;