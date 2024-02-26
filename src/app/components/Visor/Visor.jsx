import React from "react";
import { Link } from 'react-router-dom';
import playIconb from '../../../assets/images/ruinatv-icon-play-b.png';
import playIconn from '../../../assets/images/ruinatv-icon-play-n.png';
import visorIntroVideo from '../../../assets/videos/laruina-intro.mp4';
import { VisorFunction } from './Visor.functions';
import { $d } from "../../../functions";
import { InfoCanvas } from "../../utils/InfoCanvas";

export const Visor = () => {
    const {
        mediaList,
        currentUser,
        id,
        tag,
        info,
        icon,
        title,
        image,
        artist, 
        idLinkYT,
        mediaType,
        actionButton,
    } = VisorFunction();

    function handleInfoButton() {
        $d('#infoCont').style.display='flex';
    };

    return (
        <div className='visor'>
            <video className='visorVideoIntro' src={visorIntroVideo} autoPlay muted loop type="video/mp4" />
            <div className='visorBGCanvas'>
                <img className='visorBG' src={image} alt='' />
            </div>
            <div className='visorCanvas' />
            <InfoCanvas title={title} artist={artist} id={id} image={image}/>
            {mediaList?.length
                ? <div className='visorPostInfo'>
                    <div className='visorPostArtista'>
                        <p>{artist}</p>
                    </div>
                    <div className='visorPostTitulo'>
                        <p>{title}</p>
                        <div className='visorInfo'><h3>{info}</h3></div>
                        <ul className='visorBtn'>
                            <li>
                                <Link to={`/view/v=${id}`}>
                                    <button
                                        className='button1'
                                        id={id}
                                        titulo={title}
                                        artista={artist}
                                        img={image}
                                        tag={tag || null}
                                        onClick={() => { window.scrollTo(0, 0) }}
                                        onMouseEnter={() => {
                                            $d('.visorButtonPlay').src = playIconb
                                        }}
                                        onMouseLeave={() => {
                                            $d('.visorButtonPlay').src = playIconn
                                        }}
                                    >
                                        <img className='visorButtonPlay' src={playIconn} alt='visorbtn' />{!currentUser ? 'Previsualizar' : 'Ir al contenido'}
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
                        <ul className='visorIcons'>
                            {
                                icon?.map((e) => {
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
