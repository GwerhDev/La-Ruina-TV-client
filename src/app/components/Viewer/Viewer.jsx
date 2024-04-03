import s from './Viewer.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import userIcon from '../../../assets/images/user-icon.png';
import likeIcon from '../../../assets/images/like-icon.png';
import playIconn from '../../../assets/images/ruinatv-icon-play-n.png';
import playIconb from '../../../assets/images/ruinatv-icon-play-b.png';
import { $d, $gId } from '../../../functions';
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
import ContentUpdate from '../Admin/ContentUpdate/ContentUpdate';
import { setPlayer } from '../../../middlewares/redux/actions/player';
import { PlayerYoutube } from '../Player/PlayerYoutube';
import { ContentMagementButtons } from '../../components/Admin/Buttons/ContentMagementButtons';

export const Viewer = () => {
  const params = useParams();
  const history = useHistory();
  const { id } = params;
  const dispatch = useDispatch();
  const location = useLocation();
  const favorites = useSelector(state => state.favorites);
  const currentUser = useSelector(state => state.currentUser);
  const infoDetailViewer = useSelector(state => state.infoDetailViewer);
  const editionActive = useSelector(state => state.navigation.editionActive);

  function onClickValue() {
    dispatch(setBackRoute(location.pathname));
    dispatch(setOption('login'));
    history.push('/login');
  };

  function handleBackButton() {
    dispatch(resetOption());
    dispatch(resetBackRoute());
    dispatch(resetDetailsMedia());
    history.push('/');
  };

  function handleWatchButton() {
    dispatch(setPlayer({ idLinkYT }));
    $d('.player-ul').style.opacity = '1';
    $d('.player-background-effect').style.opacity = '1';
  }

  function handleClickBack() {
    $d('.player-background-effect').style.opacity = '0';
  };

  useEffect(() => {
    currentUser && editionActive
      ? ($gId('edition-canvas').style.width = '100%')
      : ($gId('edition-canvas').style.width = '0');

    dispatch(getMediaById(id));
    dispatch(getFavorites());
  }, [dispatch, currentUser, editionActive, id]);

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
        currentUser?.role === 'admin' &&
        <div className={s.editionCanvas} id='edition-canvas'>
          <ContentUpdate />
        </div>
      }
      {
        infoDetailViewer?.id
          ?
          <div className={s.viewer}>
            <div className={s.backgroundCanvas}>
              <div className={s.background} style={{ backgroundImage: 'url(' + imageSlider + ')' }} alt='' />
            </div>
            <div className={s.viewerCanvas}></div>
            <div className='player-background-effect' onClick={handleClickBack}></div>
            <div className={s.sectionsContainer}>
              <span className={s.playerContainer}>
                <PlayerYoutube artist={artist} title={title} info={info} />
              </span>
              <section className={s.viewerInfo} id='viewer-info'>
                <div className={s.infoContainer}>
                  {
                    currentUser &&
                    <div className={s.userButtons}>
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
                      {
                        currentUser.role === 'admin' &&
                        <ContentMagementButtons />
                      }
                    </div>
                  }
                  <div className={s.buttonsContainer}>
                    {
                      currentUser
                        ?
                        <PrimaryButton
                          onClick={handleWatchButton}
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
                    <SecondaryButton onClick={handleBackButton} text={"Volver al inicio"} />
                  </div>
                </div>
              </section>
              <DeleteCanvas keyId={'viewer'} id={id} deleteFunction={deleteMedia} />
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
