import s from './MyFavorites.module.css';
import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { RequestProfile } from '../RequestProfile/RequestProfile';
import { resetOption, setOption } from '../../../middlewares/redux/actions';
import { getFavorites } from '../../../middlewares/redux/actions/account';
import { RenderImageGwerhdinary } from '../../../functions/RenderImageGwerhdinary';
import { OptionSelector } from '../../utils/OptionSelector';

export const MyFavorites = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.currentUser);
  const favorites = useSelector(state => state.favorites);
  const userId = currentUser?.id;

  function handleClick() {
    return (
      dispatch(resetOption())
    )
  };

  useEffect(() => {
    dispatch(getFavorites(userId));
    dispatch(setOption('favorites'));
  }, [dispatch, userId]);

  return (
    <main className='main-container'>
      <div className='nav-fixed' />
      <div className='section-container'>
        <div className='header-container'>
          <span className='section-description-container'>
            {
              favorites?.length
                ?
                <>
                  <h1>Tus favoritos</h1>
                  <h3>Encuentra tu contenido favorito aquí</h3>
                </>
                :
                <>
                  <h1>Nada por aquí...</h1>
                  <h3>¡Agrega contenido a tus favoritos!</h3>
                </>
            }
          </span>
          <OptionSelector favorites settings />
        </div>
        <ul className={s.favoritesContainer}>
          {
            favorites?.map((e, index) => {
              return (
                <li className={s.liLikes} key={index}>
                  <div className={s.itemContainer}>
                    <Link to={`/view/v=${e.id}`} className={s.imageContainer}>
                      <div
                        className={s.imageContainer}
                        style={{ backgroundImage: `url(${RenderImageGwerhdinary(e.imageSlider)})` }}
                        onClick={handleClick}
                      >
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
      <RequestProfile />
    </main>
  )
}
