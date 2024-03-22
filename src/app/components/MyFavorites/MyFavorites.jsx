import s from './MyFavorites.module.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RequestProfile } from '../RequestProfile/RequestProfile';
import { setOption } from '../../../middlewares/redux/actions';
import { getFavorites } from '../../../middlewares/redux/actions/account';
import { OptionSelector } from '../../utils/OptionSelector';
import { FilteredCard } from '../../utils/FilteredCard';

export const MyFavorites = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.currentUser);
  const favorites = useSelector(state => state.favorites);
  const userId = currentUser?.id;

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
                <FilteredCard
                  id={e.id}
                  title={e.title}
                  img={e.imageSlider}
                  categories={e.categories}
                  artist={e.artist}
                  idLinkYT={e.idLinkYT}
                  mediaType={e.mediaType}
                />
              )
            })
          }
        </ul>
      </div>
      <RequestProfile />
    </main>
  )
}
