import s from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { FilteredCard } from './FilteredCard';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useEffect } from 'react';
import { getSearch } from '../../../middlewares/redux/actions/search';

export const Filter = () => {
  const { artistResult, titleResult, infoResult } = useSelector(state => state.searchedMedia);
  const dispatch = useDispatch();
  const { search } = useParams();
  useEffect(() => {
    dispatch(getSearch(search))
  }, [dispatch, search]);

  return (
    <div className={s.searchCont}>
      <div className={s.nav-fixed} />
      <div className={s.searchFormat} >
        <h1>Estos son los resultados de tu búsqueda</h1>
        <ul className={s.ulSearchedItem}>
          Coincidencias por título
          {
            titleResult?.count
              ? titleResult?.rows.map((e, index) => {
                return (
                  <li key={index}>
                    <FilteredCard
                      id={e.id}
                      title={e.title}
                      img={e.imageSlider}
                      categories={e.categories}
                      artist={e.artist}
                      idLinkYT={e.idLinkYT}
                      mediaType={e.mediaType} />
                  </li>
                )
              }
              )
              : <div className={s.notFound} >
                  <h2>No se han encontrado resultados que coincidan con tu búsqueda</h2>
                </div>
          }
        </ul>
        <ul className={s.ulSearchedItem}>
          Coincidencias por artista
          {
            artistResult?.count
              ? artistResult?.rows.map((e, index) => {
                return (
                  <li key={index}>
                    <FilteredCard
                      id={e.id}
                      title={e.title}
                      img={e.imageSlider}
                      categories={e.categories}
                      artist={e.artist}
                      idLinkYT={e.idLinkYT}
                      mediaType={e.mediaType} />
                  </li>
                )
              }
              )
              : <div className={s.notFound} >
                  <h2>No se han encontrado resultados que coincidan con tu búsqueda</h2>
                </div>
          }
        </ul>
        <ul className={s.ulSearchedItem}>
          Coincidencias por información
          {
            infoResult?.count
              ? infoResult?.rows.map((e, index) => {
                return (
                  <li key={index}>
                    <FilteredCard
                      id={e.id}
                      title={e.title}
                      img={e.imageSlider}
                      categories={e.categories}
                      artist={e.artist}
                      idLinkYT={e.idLinkYT}
                      mediaType={e.mediaType} />
                  </li>
                )
              }
              )
              : <div className={s.notFound} >
                  <h2>No se han encontrado resultados que coincidan con tu búsqueda</h2>
                </div>
          }
        </ul>
      </div>
    </div>
  )
}
