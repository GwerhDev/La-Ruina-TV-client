import { useHistory } from 'react-router-dom';
import s from './FilteredCard.module.css'
import { RenderImageGwerhdinary } from '../../functions/RenderImageGwerhdinary';
import { useDispatch } from 'react-redux';
import { setBackRoute } from '../../middlewares/redux/actions/navigation';
import { useLocation } from 'react-router-dom/cjs/react-router-dom';

export const FilteredCard = (props) => {
  const { id, title, img, artist } = props;
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  function handleClick() {
    dispatch(setBackRoute(location.pathname));
    history.push(`/view/v=${id}`);
  }

  return (
    <div className={s.container}>
      <div onClick={handleClick} className={s.cardContainer} style={{ backgroundImage: `url(${RenderImageGwerhdinary(img)})` }}>
        <div className={s.divContSearch}>
          <h2 className={s.artist}>{artist}</h2>
          <h1 className={s.title}>{title}</h1>
        </div>
      </div>
    </div>
  )
}