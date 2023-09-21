import s from './CreateMedia.module.css';
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import defaultPreview from '../../../assets/images/ruina-records-logo.png';
import { createCategory, createGenre, createMedia, createMediatype, deleteCategory, deleteGenre, deleteMediatype } from '../../../middlewares/redux/actions/admin';
import { getCategories, getGenres, getMediatypes } from '../../../middlewares/redux/actions/media';

const CreateMedia = () => {
  const dispatch = useDispatch();
  const dbGenre = useSelector(state => state.dbGenre);
  const dbCategory = useSelector(state => state.dbCategory);
  const dbMediatype = useSelector(state => state.dbMediatype);

  const [editGenres, setEditGenres] = useState(false);
  const [editMediatype, setEditMediatype] = useState(false);
  const [editCategories, setEditCategories] = useState(false);

  const [newGenre, setNewGenre] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [newMediatype, setNewMediatype] = useState("");
  const [imgVisor, setImgVisor] = useState(null);
  const [imgSlider, setImgSlider] = useState(null);
  const [previewVisor, setPreviewVisor] = useState(null);
  const [previewSlider, setPreviewSlider] = useState(null);
  const [data, setData] = useState({
    title: "",
    artist: "",
    info: "",
    category: [],
    genre: [],
    categories: [],
    mediaType: "",
    idLinkYT: "",
    idLinkSPOTY: "",
    urlLinkWEB: "",
    urlLinkDOWNLOAD: "",
  });

  function handleNewMediatype(e) {
    e.preventDefault();
    dispatch(createMediatype(newMediatype));
    setNewMediatype("");
  };

  function handleNewGenre(e) {
    e.preventDefault();
    dispatch(createGenre(newGenre));
    setNewGenre("");
  };

  function handleNewCategory(e) {
    e.preventDefault();
    dispatch(createCategory(newCategory));
    setNewCategory("");
  }

  function handleInputChange(e) {
    if (
      e.target.name !== "info" &&
      e.target.name !== "title" &&
      e.target.name !== "artist" &&
      e.target.name !== "categories"
    ) {
      setData({
        ...data,
        [e.target.name]: e.target.files[0],
      });
    } else {
      setData({
        ...data,
        [e.target.name]: e.target.value,
      });
    }
  };

  function checkboxCat(e) {
    if (data.categories.includes(e.target.value)) {
      data.categories = data.categories.filter(
        (name) => name !== e.target.value
      );
      setData({
        ...data,
        categories: data.categories,
      });
    } else {
      setData({
        ...data,
        categories: [...data.categories, e.target.value],
      });
    }
  };

  function checkboxGen(e) {
    if (data.genre.includes(e.target.value)) {
      data.genre = data.genre.filter((name) => name !== e.target.value);
      setData({
        ...data,
        genre: data.genre,
      });
    } else {
      setData({
        ...data,
        genre: [...data.genre, e.target.value],
      });
    }
  };

  function checkboxMT(e) {
    if (data.mediaType.includes(e.target.value)) {
      data.mediaType = data.mediaType.filter((name) => name !== e.target.value);
      setData({
        ...data,
        mediaType: data.mediaType,
      });
    } else {
      setData({
        ...data,
        mediaType: [...data.mediaType, e.target.value],
      });
    }
  };

  function submit(e) {
    e.preventDefault();

    const formData = {
      artist: data.artist,
      title: data.title,
      info: data.info,
      idLinkYT: data.idLinkYT,
      idLinkSPOTY: data.idLinkSPOTY,
      idLinkDRIVE: data.idLinkDRIVE,
      urlLinkWEB: data.urlLinkWEB,
      urlLinkDOWNLOAD: data.urlLinkDOWNLOAD,
      mediaType: data.mediaType,
      imageSlider: imgSlider,
      imageVisor: imgVisor,
    };

    dispatch(createMedia(formData));
  };

  useEffect(() => {
    dispatch(getGenres());
    dispatch(getCategories());
    dispatch(getMediatypes());
  }, [dispatch]);

  return (
    <div className={s.mainContainer}>
      <div className={s.createBody}>
        <form onSubmit={submit}>
          <div className='navFixed' />
          <div className={s.cont0} id='cont0'>
            <h1 className={s.createTitle}>Crear un Nuevo Contenido</h1>
            <div className={s.contTitleArtistDesc}>
              <div className={s.divTitleArtistDesc}>
                <p>
                  <label>Titulo</label>
                  <input
                    type="text"
                    name="title"
                    placeholder="Título de la publicación"
                    value={data.title}
                    onChange={handleInputChange}
                  />
                </p>
                <p>
                  <label>Artista</label>
                  <input
                    type="text"
                    name="artist"
                    placeholder="Nombre del intérprete"
                    value={data.artist}
                    onChange={handleInputChange}
                  />
                </p>
                <p>
                  <label>Descripción</label>
                  <input
                    placeholder="Escribe una breve reseña..."
                    type="text"
                    name="info"
                    value={data.info}
                    onChange={handleInputChange}
                  />
                </p>
              </div>
            </div>
            <div className={s.imgSlrVsr}>
              <p>
                <label>Imagen del Slider</label>
                <br></br>
                <img src={previewSlider ? previewSlider : defaultPreview} alt="visor" height="120px" />
                <br></br>
                <input
                  className={s.inputBtn}
                  style={{ cursor: 'pointer' }}
                  type="file"
                  name="imageSlider"
                  accept="image/jpeg"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      setImgSlider(reader.result);
                      setPreviewSlider(reader.result);
                    }
                    reader.readAsDataURL(file);
                  }}
                />
              </p>
              <p>
                <label>Imagen del Visor</label>
                <br></br>
                <img src={previewVisor ? previewVisor : defaultPreview} alt="visor" height="120px" />
                <br></br>
                <input
                  className={s.inputBtn}
                  type="file"
                  name="imageVisor"
                  accept="image/jpeg"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      setImgVisor(reader.result);
                      setPreviewVisor(reader.result);
                    }
                    reader.readAsDataURL(file);
                  }}
                />
              </p>
            </div>

            <h1>Detalles del contenido</h1>

            <div className={s.contTitleArtistDesc}>
              <div className={s.divTitleArtistDesc}>
                <p>
                  <label>Id del link de YouTube</label>
                  <input
                    type="text"
                    name="idLinkYT"
                    value={data.idLinkYT}
                    onChange={(e) =>
                      setData({ ...data, idLinkYT: e.target.value })
                    } />
                </p>
                <p>
                  <label>Id del link de Spotify</label>
                  <input
                    type="text"
                    name="idLinkSPOTY"
                    value={data.idLinkSPOTY}
                    onChange={(e) =>
                      setData({ ...data, idLinkSPOTY: e.target.value })
                    }
                  />
                </p>
                <p>
                  <label>url de la Web</label>
                  <input
                    type="text"
                    name="urlLinkWEB"
                    value={data.urlLinkWEB}
                    onChange={(e) =>
                      setData({ ...data, urlLinkWEB: e.target.value })
                    }
                  />
                </p>
                <p>
                  <label>Link de descarga</label>
                  <input
                    type="text"
                    name="urlLinkDOWNLOAD"
                    value={data.urlLinkDOWNLOAD}
                    onChange={(e) => setData({ ...data, urlLinkDOWNLOAD: e.target.value })} />
                </p>
              </div>
            </div>

            <label>Tipo de contenido (selecciona uno)</label>
            <button type='button' onClick={() => setEditMediatype(!editMediatype)}>{!editMediatype? "Editar" : "Cancelar"}</button>
            <br />

            <div className={s.types}>
              {
                dbMediatype?.map((t, index) => (
                  <div className={s.tipeMedia} key={`${t.name}-${index}`}>
                    <input
                      type="checkbox"
                      name={t.name}
                      value={t.name}
                      id={t.name}
                      onChange={(e) => checkboxMT(e)} />
                    <label htmlFor={t.name}>{t.name}</label>
                    {
                      editMediatype &&
                      <button type='button' onClick={() => dispatch(deleteMediatype(t.id))} className="" disabled={!t.name?.length}>
                        x
                      </button>
                    }
                  </div>
                ))
              }
              {
                editMediatype &&
                <div>
                  <input value={newMediatype} className={s.inputCreate} onInput={(e) => setNewMediatype(e.target.value)} type="text" />
                  <button type='button' onClick={handleNewMediatype} className="" disabled={!newMediatype?.length}>
                    Agregar
                  </button>
                </div>
              }
            </div>

            <br/>
              <label>Género</label>
              <button type='button' onClick={() => setEditGenres(!editGenres)}>{!editGenres? "Editar" : "Cancelar"}</button>
            <br/>

            <div className={s.types}>
              {
                dbGenre?.map((t, index) => (
                  <div className={s.tipeMedia} key={`${t.name}-${index}`}>
                    <input
                      type="checkbox"
                      name={t.name}
                      value={t.name}
                      id={t.name}
                      onChange={(e) => checkboxGen(e)}
                    />
                    <label htmlFor={t.name}>{t.name}</label>
                    {
                      editGenres &&
                      <button type='button' onClick={() => dispatch(deleteGenre(t.id))} className="" disabled={!t.name?.length}>
                        x
                      </button>
                    }
                  </div>
                ))
              }
              {
                editGenres &&
                <div>
                  <input value={newGenre} className={s.inputCreate} onInput={(e) => setNewGenre(e.target.value)} type="text" />
                  <button type='button' onClick={handleNewGenre} className="" disabled={!newGenre?.length}>
                    Agregar
                  </button>
                </div>
              }
            </div>

            <br/>
              <label>Categoria</label>
              <button type='button' onClick={() => setEditCategories(!editCategories)}>{!editCategories? "Editar" : "Cancelar"}</button>
            <br/>

            <div className={s.types}>
              {
                dbCategory?.map((t, index) => (
                  <div className={s.tipeMedia} key={`${t.name}-${index}`}>
                    <input
                      type="checkbox"
                      name={t.name}
                      value={t.name}
                      id={t.name}
                      onChange={(e) => checkboxCat(e)}
                    />
                    <label htmlFor={t.name}>{t.name}</label>
                    {
                      editCategories &&
                      <button type='button' onClick={() => dispatch(deleteCategory(t.id))} className="" disabled={!t.name?.length}>
                        x
                      </button>
                    }
                  </div>
                ))
              }
              {
                editCategories &&
                <div>
                  <input value={newCategory} className={s.inputCreate} onInput={(e) => setNewCategory(e.target.value)} type="text" />
                  <button type='button' onClick={handleNewCategory} className="" disabled={!newCategory?.length}>
                    Agregar
                  </button>
                </div>
              }
            </div>
            <div>
              <input type="submit" value="Publicar" className={s.submit} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateMedia;
