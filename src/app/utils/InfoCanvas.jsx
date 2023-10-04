import { useEffect } from 'react';
import s from './InfoCanvas.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getFullDetail } from '../../middlewares/redux/actions/media';

export const InfoCanvas = (props) => {
  const dispatch = useDispatch();
  const { title, artist, id } = props;
  const fullDetail = useSelector(state => state.fullDetail);

  useEffect(() => {
    dispatch(getFullDetail(id))
  },[dispatch, id]);

  return (
    <div className={s.infoCont} id='infoCont'>
      <div className={s.infoContText}>
        <h3>Artista: {artist}</h3>
        <h1>Título: {title}</h1>
        <h4>Productor: {fullDetail?.producer}</h4>
        <h4>Género: {fullDetail?.genre}</h4>
        <h4>Relacionados: {fullDetail?.related}</h4>
      </div>
    </div>
  )
}
