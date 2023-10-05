import s from './InfoCanvas.module.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFullDetail } from '../../middlewares/redux/actions/media';
import playIcon from '../../assets/images/play-icon.png';
import { Link } from 'react-router-dom/cjs/react-router-dom';

export const InfoCanvas = (props) => {
  const dispatch = useDispatch();
  const { title, artist, id, image } = props;
  const fullDetail = useSelector(state => state.fullDetail);

  useEffect(() => {
    !id ?? dispatch(getFullDetail(id))
  }, [dispatch, id]);

  return (
    <div className={s.infoCont} id='infoCont' style={{ backgroundImage: `url(${image})` }}>
      <section className={s.blackCanvas}>
        <div className={s.infoContText}>
          <h3>Artista: {artist}</h3>
          <h1>Título: {title}</h1>
          <h4>Productor: {fullDetail?.producer}</h4>
          <h4>Género: {fullDetail?.genre}</h4>
          <h4>Relacionados: {fullDetail?.related}</h4>
        </div>
      </section>
      <section className={s.buttonsContainer}>
        <ul className={s.buttonsList}>
          <Link className={s.buttons} to={`/view/v=${id}`}>
            <img src={playIcon} alt="" width={"40px"}/>
          </Link>
        </ul>
      </section>
    </div>
  )
}
