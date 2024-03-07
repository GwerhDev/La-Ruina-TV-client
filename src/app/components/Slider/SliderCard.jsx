import s from './SliderCard.module.css';
import FavIcon from "../MyFavorites/FavIcon";
import editIcon from '../../../assets/images/edit-icon.png';
import playIconN from "../../../assets/images/ruinatv-icon-play-n.png";
import deleteIcon from '../../../assets/images/delete-icon.png';
import defaultBackground from '../../../assets/images/default-background.png'
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { deleteMedia } from '../../../middlewares/redux/actions/admin';
import { DeleteCanvas } from '../../utils/DeleteCanvas';
import { $d } from '../../../functions';
import { RenderImageGwerhdinary } from '../../../functions/RenderImageGwerhdinary';

export const SliderCard = ({ id, imageSlider, title, keyID }) => {
  const history = useHistory();
  const favorites = useSelector(state => state.favorites);
  const currentUser = useSelector(state => state.currentUser);

  function handleRedirect() {
    history.push(`/view/v=${id}`);
    window.scrollTo(0, 0);
  };

  function handleEditMedia() {
    history.push(`/media/edit/${id}`);
    window.scrollTo(0, 0);
  };

  function handleDeleteMedia() {
    $d(`#deleteCanvas${keyID}${id}`).style.display = 'flex';
  };

  function opacityCanvas(opacity) {
    $d(`#deleteCanvas${keyID}${id}`).style.opacity = opacity;
  };

  return (
    <>
      {imageSlider &&
        <div className={s.sliderItem}>
          <img
            alt=''
            onClick={handleRedirect}
            className={s.media}
            src={RenderImageGwerhdinary(imageSlider) || defaultBackground}
          />
          <div className={s.sliderInfoCanvas}>
            <div className={s.ulTitlesItems} onClick={handleRedirect}>
              <div style={{ display: 'flex', alignItems: 'center', margin: '5px' }}>
                <img
                  className={s.sliderItemIconPlayN}
                  src={playIconN}
                  alt="play" />
                <p style={{ color: 'black' }}>{title}</p>
              </div>
              {
                currentUser && favorites?.filter(fav => fav.id === id).length
                  ? <FavIcon urlID={id} color={'red'} style={{ marginTop: '-10px' }} />
                  : null
              }
            </div>
          </div>
          {
            currentUser?.role === 'admin'
              ?
              <>
                <ul className={s.adminRequest}>
                  <li className={s.adminBtn}>
                    <img src={editIcon} className={s.editImg} onClick={handleEditMedia} alt='edit' width='15px' />
                  </li>
                  <li className={s.adminBtn} onClick={handleDeleteMedia} >
                    <img src={deleteIcon} className={s.deleteImg} alt='delete' width='15px' />
                  </li>
                </ul>
                <div className={s.deleteCanvasContainer} onMouseEnter={() => opacityCanvas(1)} onMouseLeave={() => opacityCanvas(0)}>
                  <DeleteCanvas id={id} keyId={keyID} deleteFunction={deleteMedia} />
                </div>
              </>
              : null
          }
        </div>
      }
    </>
  );
};