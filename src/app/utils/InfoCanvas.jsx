import s from './InfoCanvas.module.css';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getFullDetail } from '../../middlewares/redux/actions/media';
import playIcon from '../../assets/images/play-icon.png';

export const InfoCanvas = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { title, artist, id, image } = props;
  const fullDetail = useSelector(state => state.fullDetail);

  function handleClick() {
    history.push(`/view/v=${id}`);
  };

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
          <li onClick={() => handleClick()}><img src={playIcon} alt="" width={"40px"} /></li>
        </ul>
      </section>
    </div>
  )
}
