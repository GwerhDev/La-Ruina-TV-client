import s from './ContentList.module.css';
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { resetIdYT, resetOption } from "../../../../middlewares/redux/actions";
import { getMedia, resetMedia } from '../../../../middlewares/redux/actions/media';
import { deleteMedia } from '../../../../middlewares/redux/actions/admin';

const ContentList = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const mediaList = useSelector(state => state.mediaList)
    useEffect(() => {
        dispatch(getMedia());
        dispatch(resetMedia());
        dispatch(resetOption());
        dispatch(resetIdYT());
    }, [dispatch]);
    return (
        <div className={s.editListCont}>
            <div className={s.editListFormat} >
                <h1>Listado de contenido</h1>
                <div className={s.divList}>
                    <div className={s.ulList1}>
                        <ul className={s.ulList0}>
                            <li>Visor</li>  -
                            <li>Slider</li> -
                            <li>Title</li>  -
                            <li>Artist</li> -
                            <li>Edit</li>   -
                            <li>Delete</li>
                        </ul>
                        {
                            mediaList?.map((e, index) => {
                                return (
                                    <li key={index}>
                                        <ul className={s.ulList2}>
                                            <li><img src={e.imageVisor} height={80} alt="" /></li> -
                                            <li><img src={e.imageSlider} height={80} alt="" /></li> -
                                            <li>{e.title}</li> -
                                            <li>{e.artist}</li> -
                                            <li>
                                                <button className={s.btnEdit} onClick={() => { history.push(`/media/edit/${e.id}`) }} />
                                            </li> -
                                            <li><button className={s.btnDelete} onClick={() => {
                                                dispatch(deleteMedia(e.id))
                                            }}>  </button></li></ul>
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

export default ContentList;