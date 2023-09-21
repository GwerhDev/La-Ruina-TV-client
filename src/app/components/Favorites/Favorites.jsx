import s from './Favorites.module.css';
import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import RequestProfile from '../../admin/RequestProfile/RequestProfile';
import { getFavorites, resetOption } from '../../../middlewares/redux/actions';
import { $d } from '../../../functions';

export const Favorites = () => {

  const auth = localStorage.getItem('auth');
  const userId = auth ? JSON.parse(auth).userId : null;
  const favorites = useSelector(state => state.favorites)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getFavorites(userId))
  }, [dispatch, userId])
  
  return (
    <div>
      <div className={s.container}>
        <div className='navFixed'></div>
          <div className={s.divContLikes}>
            <div className={s.divHeader}>
              <div className="header-container">
                { favorites.length>0
                  ? <><h1>Tus favoritos</h1>
                    <h3>Encuentra tu contenido favorito aquí</h3></>
                  : <><h1>Nada por aquí...</h1>
                    <h3>¡Agrega contenido a tus favoritos!</h3></>
                }
              </div>
            </div>
            <ul className={s.contLikes}>
              {
                favorites?.map((e,index)=>{
                  return(
                    <li className={s.liLikes} key={index}>
                      <Link to={`/view/v=${e.at(0).idLinkYT}=_type_=${e.at(0).mediaType}=_id_=${e.at(0).id}`}>
                        <img 
                        onClick={()=>{
                          return (
                            dispatch(resetOption()),
                            $d(`.bodyApp`).style.transform='translateX(0)',
                            $d(`.navCont`).style.transitionDuration='.2s',
                            $d(`.bodyApp`).style.transitionDuration='2s',
                            $d(`.navCont`).style.width='100vw',
                            $d(`.browserBody`).style.height='auto',
                            $d(`.browserBody`).style.overflowY='scroll',
                            $d(`.visor`).style.transform='translateX(0)',
                            $d('#slideCanvasCont').style.overflowY="scroll"
                        )}}   
                        className={s.likeImg}
                        src={e.at(0).linkimg} 
                        alt='img' 
                        height='100px' />
                      <div className={s.divH3}>
                        <h3 style={{marginTop: '0px', fontSize: '10px', marginBottom: '-4px'}}>
                            {e.at(0).artist}
                        </h3>
                        <h3 style={{marginTop: '0px', fontSize: '17px'}}>
                            {e.at(0).title}
                        </h3>
                      </div>
                      </Link>
                    </li>
                  )
                })
              }
            </ul>
          </div>
          <RequestProfile />
      </div>
    </div>
  )
}
