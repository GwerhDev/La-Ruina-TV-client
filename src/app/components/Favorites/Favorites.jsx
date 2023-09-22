import s from './Favorites.module.css';
import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import RequestProfile from '../../admin/RequestProfile/RequestProfile';
import { resetOption } from '../../../middlewares/redux/actions';
import { $d } from '../../../functions';
import { getFavorites } from '../../../middlewares/redux/actions/account';

export const Favorites = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.currentUser);
  const favorites = useSelector(state => state.favorites);
  const userId = currentUser?.id;

  useEffect(() => {
    dispatch(getFavorites(userId))
  }, [dispatch, userId]);
  
  return (
    <div>
      <div className={s.container}>
        <div className='navFixed'></div>
          <div className={s.divContLikes}>
            <div className={s.divHeader}>
              <div className="header-container">
                { favorites?.length
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
                      <Link to={`/view/v=${e.id}`}>
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
                        src={e.imageSlider} 
                        alt='img' 
                        height='100px' />
                      <div className={s.divH3}>
                        <h3 style={{marginTop: '0px', fontSize: '10px', marginBottom: '-4px'}}>
                            {e.artist}
                        </h3>
                        <h3 style={{marginTop: '0px', fontSize: '17px'}}>
                            {e.title}
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
