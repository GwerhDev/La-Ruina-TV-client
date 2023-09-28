import s from './Favorites.module.css';
import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import RequestProfile from '../../components/RequestProfile/RequestProfile';
import { resetOption } from '../../../middlewares/redux/actions';
import { $d } from '../../../functions';
import { getFavorites } from '../../../middlewares/redux/actions/account';
import { RenderDriveImage } from '../../../functions/RenderDriveImage';

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
              {favorites?.length
                ? <>
                  <h1>Tus favoritos</h1>
                  <h3>Encuentra tu contenido favorito aquí</h3>
                </>
                : <>
                  <h1>Nada por aquí...</h1>
                  <h3>¡Agrega contenido a tus favoritos!</h3>
                </>
              }
            </div>
            <ul className={s.contLikes}>
              {
                favorites?.map((e, index) => {
                  return (
                    <li className={s.liLikes} key={index}>
                      <div className={s.itemContainer}>
                        <Link to={`/view/v=${e.id}`}>
                          <div className={s.imageContainer} 
                               style={{ backgroundImage: `url(${RenderDriveImage(e.imageSlider)})` }}
                               onClick={() => {
                                return (
                                  dispatch(resetOption()),
                                  $d(`.bodyApp`).style.transform = 'translateX(0)',
                                  $d(`.navCont`).style.transitionDuration = '.2s',
                                  $d(`.bodyApp`).style.transitionDuration = '2s',
                                  $d(`.navCont`).style.width = '100vw',
                                  $d(`.browserBody`).style.height = 'auto',
                                  $d(`.browserBody`).style.overflowY = 'scroll',
                                  $d(`.visor`).style.transform = 'translateX(0)',
                                  $d('#slideCanvasCont').style.overflowY = "scroll"
                                )
                              }}>
                            <div className={s.divH3}>
                              <h3>
                                {e.artist}
                              </h3>
                              <h2>
                                {e.title}
                              </h2>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
        <RequestProfile />
      </div>
    </div>
  )
}
