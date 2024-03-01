import s from './Visor.module.css';
import { Link } from 'react-router-dom';
import playIconb from '../../../assets/images/ruinatv-icon-play-b.png';
import playIconn from '../../../assets/images/ruinatv-icon-play-n.png';
import visorIntroVideo from '../../../assets/videos/laruina-intro.mp4';
import { VisorFunction } from './Visor.functions';
import { $d } from "../../../functions";
import { InfoCanvas } from "../../utils/InfoCanvas";
import { RenderVisorImageStore } from "../../../functions/RenderImageStore";

export const Visor = () => {
    const {
        visorId,
        visorTag,
        visorInfo,
        mediaList,
        visorIcon,
        imageStore,
        visorTitle,
        visorImage,
        currentUser,
        visorArtist,
    } = VisorFunction();

    function handleInfoButton() {
        $d('#infoCont').style.display = 'flex';
    };

    return (
        <div className={s.visorContainer} id='visor'>
            <video className={s.visorVideoIntro} src={visorIntroVideo} autoPlay muted loop type="video/mp4" />
            <div className={s.visorBGCanvas}>
                <img className={s.visorBG} id='visorBG' src={RenderVisorImageStore(imageStore, visorImage)} alt='' />
            </div>
            <div className={s.visorCanvas} />
            <InfoCanvas title={visorTitle} artist={visorArtist} id={visorId} image={RenderVisorImageStore(imageStore, visorImage)} />
            {
                mediaList?.length
                    ? <div className={s.visorPostInfo} id='visorPostInfo'>
                        <div className={s.visorPostArtist}>
                            <p>{visorArtist}</p>
                        </div>
                        <div className={s.visorPostTitle}>
                            <p>{visorTitle}</p>
                            <div className={s.visorInfo}><h3>{visorInfo}</h3></div>
                            <ul className={s.visorBtn} id='visorBtn'>
                                <li>
                                    <Link to={`/view/v=${visorId}`}>
                                        <button
                                            className='button1'
                                            id={visorId}
                                            titulo={visorTitle}
                                            artista={visorArtist}
                                            img={visorImage}
                                            tag={visorTag || null}
                                            onClick={() => { window.scrollTo(0, 0) }}
                                            onMouseEnter={() => {
                                                $d('.visorButtonPlay').src = playIconb
                                            }}
                                            onMouseLeave={() => {
                                                $d('.visorButtonPlay').src = playIconn
                                            }}
                                        >
                                            <img className='visorButtonPlay' src={playIconn} alt='' />{!currentUser ? 'Previsualizar' : 'Ir al contenido'}
                                        </button>
                                    </Link>
                                </li>
                                <li>
                                    <button
                                        className='button2'
                                        onClick={handleInfoButton} >
                                        Más información
                                    </button>
                                </li>
                            </ul>
                            <ul className={s.visorIcons}>
                                {
                                    visorIcon?.map((e) => {
                                        return (
                                            <li key={e}><img className='visorTagIcon' src={e} alt="" /></li>
                                        )
                                    })
                                }
                            </ul>
                        </div>

                    </div>
                    : null
            }
        </div>
    )
}
