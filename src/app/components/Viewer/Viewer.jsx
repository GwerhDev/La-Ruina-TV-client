import s from './Viewer.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import YtPlayer from '../Player/PlayerYoutube';
import userIcon from '../../../assets/images/user-icon.png';
import likeIcon from '../../../assets/images/like-icon.png';
import playIconn from '../../../assets/images/ruinatv-icon-play-n.png';
import playIconb from '../../../assets/images/ruinatv-icon-play-b.png';
import { $d } from '../../../functions';
import { ContentMagementButtons } from '../../components/Admin/Buttons/ContentMagementButtons';
import { resetOption, setOption } from '../../../middlewares/redux/actions';
import { getMediaById, resetDetailsMedia } from '../../../middlewares/redux/actions/content';
import { addFavorites, deleteFavorites, getFavorites } from '../../../middlewares/redux/actions/account';
import { DeleteCanvas } from '../../utils/DeleteCanvas';
import { deleteMedia } from '../../../middlewares/redux/actions/admin';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { resetBackRoute, setBackRoute } from '../../../middlewares/redux/actions/navigation';
import { useLocation } from 'react-router-dom/cjs/react-router-dom';
import { PrimaryButton } from '../Buttons/PrimaryButton';
import { Loader } from '../../utils/Loader';
import { SecondaryButton } from '../Buttons/SecondaryButton';

export const Viewer = () => {
  const params = useParams();
  const history = useHistory();
  const { id } = params;
  const dispatch = useDispatch();
  const location = useLocation();
  const favorites = useSelector(state => state.favorites);
  const currentUser = useSelector(state => state.currentUser);
  const infoDetailViewer = useSelector(state => state.infoDetailViewer);

  function onClickValue(e) {
    dispatch(setBackRoute(location.pathname))
    dispatch(setOption('login'));
    history.push('/login');
  };

  function handleBackButton() {
    dispatch(resetOption());
    dispatch(resetBackRoute());
    dispatch(resetDetailsMedia());
    history.push('/');
  };

  function handleClickBack() {
    $d('.player-li').style.display = 'none';
    $d('.player-background-effect').style.opacity = '0';
    $d('#viewer-info').style.display = "flex";
    $d('#player-section').style.display = "none";
  };

  useEffect(() => {
    dispatch(getMediaById(id));
    dispatch(getFavorites());
  }, [dispatch, id]);

  const {
    imageSlider,
    info,
    title,
    artist,
    idLinkYT,
  } = infoDetailViewer;

  return (
    <div className={s.container}>
      {
        infoDetailViewer?.id?.length
          ?
          <div className={s.viewer}>
            <div className={s.backgroundCanvas}>
              <div className={s.background} style={{ backgroundImage: 'url(' + imageSlider + ')' }} alt='' />
            </div>
            <div className={s.viewerCanvas}></div>
            <div className='player-background-effect' onClick={handleClickBack}></div>
            <div className={s.sectionsContainer}>
              <section className={s.playerSection} id='player-section'>
                {currentUser && <YtPlayer idLinkYT={idLinkYT} />}
              </section>
              <section className={s.viewerInfo} id='viewer-info'>
                <div className={s.infoContainer}>
                  <div className={s.viewerArtist}>
                    {currentUser?.role === 'admin' && <ContentMagementButtons />}
                    <p>{artist}</p>
                  </div>
                  <div className={s.viewerTitle}>
                    <p>{title}</p>
                    <div className={s.viewerDescription}>
                      <p>{info}</p>
                    </div>
                  </div>
                  <div className={s.viewMediaTypesCont}>
                    <ul className={s.viewMediaTypesList}>
                      {
                        currentUser &&
                        <button className='button-add-favorite' onClick={() => { dispatch(favorites.find(e => e.id === id) ? deleteFavorites(id) : addFavorites(currentUser.id, id)) }}>
                          <img
                            className={s.favIcon}
                            id="favViewIcon"
                            src={likeIcon}
                            alt='add favorites'
                            width='25px'
                            style={{ filter: `grayscale(${favorites.find(e => e.id === id) ? 0 : 1} )` }}
                          />
                        </button>
                      }
                    </ul>
                    <div className={s.buttonsContainer}>
                      {
                        currentUser
                          ?
                          <PrimaryButton
                            onClick={() => {
                              $d('.player-ul').style.opacity = '1';
                              $d('.player-li').style.display = 'block';
                              $d('#viewer-info').style.display = "none";
                              $d('#player-section').style.display = "flex";
                              $d('.player-background-effect').style.opacity = '1';
                            }}
                            onMouseEnter={() => { $d('#visor-play-button').src = playIconb }}
                            onMouseLeave={() => { $d('#visor-play-button').src = playIconn }}
                            icon={playIconn}
                            iconId={"visor-play-button"}
                            text={"Ver ahora"}
                          />
                          :
                          <PrimaryButton 
                            onClick={onClickValue} 
                            icon={userIcon}
                            iconId={"visor-play-button"} 
                            text={"Ingresar"}
                          />
                      }
                      <SecondaryButton onClick={handleBackButton} text={"Volver al inicio"}/>
                    </div>
                  </div>
                </div>
              </section>
              <DeleteCanvas keyId={'Viewer'} id={id} deleteFunction={deleteMedia} />
            </div>
          </div>
          :
          <div className={s.loaderContainer}>
            <Loader width={"50px"} />
          </div>
      }
    </div>
  )
}
