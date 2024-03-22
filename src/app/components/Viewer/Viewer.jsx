import s from './Viewer.module.css';
import { Link } from 'react-router-dom';
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
import { getMediaById, resetDetailsMedia } from '../../../middlewares/redux/actions/media';
import { addFavorites, deleteFavorites, getFavorites } from '../../../middlewares/redux/actions/account';
import { subscriberYoutubeVerification } from '../../../middlewares/redux/actions/subscriber';
import { DeleteCanvas } from '../../utils/DeleteCanvas';
import { deleteMedia } from '../../../middlewares/redux/actions/admin';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export const Viewer = () => {
    const params = useParams();
    const history = useHistory();
    const { id } = params;
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites);
    const subscriber = useSelector(state => state.subscriber);
    const currentUser = useSelector(state => state.currentUser);
    const infoDetailViewer = useSelector(state => state.infoDetailViewer);

    function onClickValue(e) {
        dispatch(setOption(e.target.id));
        history.push('/login');
    };

    function handleBackButton() {
        dispatch(resetOption());
        dispatch(resetDetailsMedia());
    };

    function handleClickBack() {
        $d('.playerLi').style.display = 'none';
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
        <div className={s.browserBody}>
            {
                infoDetailViewer?.id?.length
                    ?
                    <div className={s.viewer}>
                        <div className={s.backgroundCanvas}>
                            <div className={s.visorBG} style={{ backgroundImage: 'url(' + imageSlider + ')' }} alt='' />
                        </div>
                        <div className={s.visorCanvas}></div>
                        <div className='player-background-effect' onClick={handleClickBack}></div>
                        <div className={s.sectionsContainer}>
                            <section className={s.playerSection} id='player-section'>
                                { currentUser && <YtPlayer idLinkYT={idLinkYT} /> }
                            </section>
                            <section className={s.visorPostInfo} id='viewer-info'>
                                <div className={s.infoContainer}>
                                    <div className={s.visorPostArtista}>
                                        {currentUser?.role === 'admin' && <ContentMagementButtons />}
                                        <p>{artist}</p>
                                    </div>
                                    <div className={s.visorPostTitulo}>
                                        <p>{title}</p>
                                        <div className={s.visorInfo}>
                                            <p>{info}</p>
                                        </div>
                                    </div>
                                    <div className={s.viewMediaTypesCont}>
                                        <ul className={s.viewMediaTypesList}>
                                            {
                                                currentUser &&
                                                <button className='buttonAddToFavorites' onClick={() => { dispatch(favorites.find(e => e.id === id) ? deleteFavorites(id) : addFavorites(currentUser.id, id)) }}>
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
                                                    <button
                                                        className='buttonVer'
                                                        onClick={() => {
                                                            return (
                                                                dispatch(subscriberYoutubeVerification(currentUser?.email)),
                                                                (subscriber ? $d('#canvasYtSubBtn').style.display = 'none' : $d('#canvasYtSubBtn').style.display = 'flex'),
                                                                $d('.player-background-effect').style.opacity = '1',
                                                                $d('.playerLi').style.display = 'block',
                                                                $d('.playUl').style.opacity = '1',
                                                                $d('#viewer-info').style.display = "none",
                                                                $d('#player-section').style.display = "flex"
                                                            )
                                                        }}
                                                        onMouseEnter={() => {
                                                            $d('.visorButtonPlay').src = playIconb
                                                        }}
                                                        onMouseLeave={() => {
                                                            $d('.visorButtonPlay').src = playIconn
                                                        }}>
                                                        <img className='visorButtonPlay' src={playIconn} alt='visorbtn' />
                                                        Ver ahora
                                                    </button>
                                                    :
                                                    <button
                                                        className='buttonVer'
                                                        id='login'
                                                        onClick={(e) => {
                                                            return (
                                                                onClickValue(e),
                                                                $d('#slideCanvasCont').style.overflowY = "hidden"
                                                            )
                                                        }}>
                                                        <img className='visorButtonPlay' src={userIcon} alt='visorbtn' />
                                                        Ingresar
                                                    </button>
                                            }
                                            <Link to='/browser'><button className='buttonVolver' onClick={handleBackButton}>Volver al inicio</button></Link>

                                        </div>
                                    </div>
                                </div>
                            </section>
                            <DeleteCanvas keyId={'Viewer'} id={id} deleteFunction={deleteMedia} />
                        </div>
                    </div>
                    :
                    <div className={s.loaderContainer}>
                        <div className='loader'></div>
                    </div>
            }
        </div>
    )
}
