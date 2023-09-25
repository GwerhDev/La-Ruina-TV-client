import React from 'react'
import s from './Search.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { SearchedMedia } from './SearchedMedia'
import { RenderDriveImage } from '../../../functions/RenderDriveImage'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { useEffect } from 'react'
import { getSearch } from '../../../middlewares/redux/actions/search'

export const Search = () => {
  const { rows, count } = useSelector(state => state.searchedMedia);
  const dispatch = useDispatch();
  const { search } = useParams();
  useEffect(() => {
    dispatch(getSearch(search))
  }, [dispatch, search]);

  return (
    <div className={s.searchCont}>
      <div className={s.navFixed} />
      <div className={s.searchFormat} >
        <h1>Estos son los resultados de tu búsqueda</h1>
        <ul className={s.ulSearchedItem}>
          {
            count
              ? rows.map((e, index) => {
                return (
                  <li key={index}>
                    <SearchedMedia
                      id={e.id}
                      title={e.title}
                      img={RenderDriveImage(e.imageSlider)}
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
