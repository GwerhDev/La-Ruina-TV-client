import s from './ContentUpdate.module.css';
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import defaultPreview from '../../../assets/images/default-background.png';
import { Link, useParams } from 'react-router-dom';
import { toTop } from '../../../functions/toTop';
import { getCategories, getGenres, getMediaById, getMediatypes } from '../../../middlewares/redux/actions/media';
import {
  createCategory,
  createGenre,
  createMediatype, 
  deleteCategory, 
  deleteGenre, 
  deleteMediatype,
  updateMedia
} from '../../../middlewares/redux/actions/admin';
import { RenderDriveImage } from '../../../functions/RenderDriveImage';

const ContentUpdate = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const dbGenres = useSelector(state => state.dbGenres);
  const dbCategories = useSelector(state => state.dbCategories);
  const dbMediatypes = useSelector(state => state.dbMediatypes);
  const infoDetailViewer = useSelector(state => state.infoDetailViewer);

  const [editGenres, setEditGenres] = useState(false);
  const [editMediatype, setEditMediatype] = useState(false);
  const [editCategories, setEditCategories] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [redirectRoute, setRedirectRoute] = useState("");

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
    genre: [],
    category: [],
    mediatype: [],
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

  function checkboxCategories(e) {
    if (data.category.includes(e)) {
      data.category = data.category.filter(id => id !== e);
      setData({
        ...data,
        category: data.category,
      });
    } else {
      setData({
        ...data,
        category: [...data.category, e],
      });
    }
  };

  function checkboxGenres(e) {
    if (data.genre.includes(e)) {
      data.genre = data.genre.filter(id => id !== e);
      setData({
        ...data,
        genre: data.genre,
      });
    } else {
      setData({
        ...data,
        genre: [...data.genre, e],
      });
    }
  };

  function checkboxMediatype(e) {
    if (data.mediatype.includes(e)) {
      data.mediatype = data.mediatype.filter(id => id !== e);
      setData({
        ...data,
        mediatype: data.mediatype,
      });
    } else {
      setData({
        ...data,
        mediatype: [...data.mediatype, e],
      });
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();
    toTop();
    setSubmitted(true);
    const formData = {
      artist: data.artist,
      title: data.title,
      info: data.info,
      genre: data.genre,
      category: data.category,
      mediatype: data.mediatype,
      idLinkYT: data.idLinkYT,
      idLinkSPOTY: data.idLinkSPOTY,
      idLinkDRIVE: data.idLinkDRIVE,
      urlLinkWEB: data.urlLinkWEB,
      urlLinkDOWNLOAD: data.urlLinkDOWNLOAD,
      newImageSlider: imgSlider,
      newImageVisor: imgVisor,
    };

    await dispatch(updateMedia(id, formData));
    return setRedirectRoute('/view/v=' + id);
  };

  function resetForm() {
    setSubmitted(false);
    dispatch(getMediaById(id));
  }

  useEffect(() => {
    setData(infoDetailViewer);
    setImgVisor(RenderDriveImage(infoDetailViewer?.imageVisor));
    setImgSlider(RenderDriveImage(infoDetailViewer?.imageSlider));
    setPreviewVisor(RenderDriveImage(infoDetailViewer?.imageVisor));
    setPreviewSlider(RenderDriveImage(infoDetailViewer?.imageSlider));
  },[infoDetailViewer]);

  useEffect(() => {
    dispatch(getGenres());
    dispatch(getCategories());
    dispatch(getMediatypes());
    dispatch(getMediaById(id));
  }, [dispatch, id]);

  return (
    <div className={s.mainContainer}>
      {
        submitted
          ? <div className={s.container}>
            <h1>{redirectRoute ? "¡Contenido actualizado!" : "Actualizando contenido..."}</h1>
            {
              redirectRoute
                ? <div>
                    <Link to={redirectRoute}>
                      <button className='button1'>
                        Ver contenido
                      </button>
                    </Link>
                    <button className='button2' onClick={resetForm}>Crear más contenido</button>
                  </div>
                : <div className={s.loaderContainer}>
                    Espere un momento...
                    <div className='loader' />
                  </div>
            }
          </div>
          : <div className={s.createBody}>
            <form onSubmit={handleSubmit}>
              <div className='navFixed' />
              <div className={s.container}>
                <h1 className={s.createTitle}>Actualizar Contenido</h1>
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
                      accept="image/*"
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
                      accept="image/*"
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
                        placeholder='ejemplo: hMS8RtYVouc'
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
                        placeholder='ejemplo: hMS8RtYVouc'
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
                        placeholder='ejemplo: http://2girls1cup.com'
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
                        placeholder='ejemplo: http://2girls1cup.com'
                        onChange={(e) => setData({ ...data, urlLinkDOWNLOAD: e.target.value })} />
                    </p>
                  </div>
                </div>

                <label>Tipo de contenido</label>
                <button type='button' onClick={() => setEditMediatype(!editMediatype)}>{!editMediatype ? "Editar" : "Cancelar"}</button>
                <br />

                <div className={s.types}>
                  {
                    dbMediatypes?.map((t, index) => (
                      <div className={s.typemedia} key={`${t.name}-${index}`}>
                        <input
                          type="checkbox"
                          name={t.name}
                          value={t.name}
                          onChange={() => checkboxMediatype(t.id)} />
                        <label htmlFor={t.name}>{t.name}</label>
                        {
                          editMediatype &&
                          <div className={s.deleteButtonContainer}>
                            <button type='button' onClick={() => dispatch(deleteMediatype(t.id))} className="" disabled={!t.name?.length}>
                              x
                            </button>
                          </div>
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

                <br />
                <label>Género</label>
                <button type='button' onClick={() => setEditGenres(!editGenres)}>{!editGenres ? "Editar" : "Cancelar"}</button>
                <br />

                <div className={s.types}>
                  {
                    dbGenres?.map((t, index) => (
                      <div className={s.typemedia} key={`${t.name}-${index}`}>
                        <input
                          type="checkbox"
                          name={t.name}
                          value={t.name}
                          onChange={() => checkboxGenres(t.id)}
                        />
                        <label htmlFor={t.name}>{t.name}</label>
                        {
                          editGenres &&
                          <div className={s.deleteButtonContainer}>
                            <button type='button' onClick={() => dispatch(deleteGenre(t.id))} className="" disabled={!t.name?.length}>
                              x
                            </button>
                          </div>
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

                <br />
                <label>Categoria</label>
                <button type='button' onClick={() => setEditCategories(!editCategories)}>{!editCategories ? "Editar" : "Cancelar"}</button>
                <br />

                <div className={s.types}>
                  {
                    dbCategories?.map((t, index) => (
                      <div className={s.typemedia} key={`${t.name}-${index}`}>
                        <input
                          type="checkbox"
                          name={t.name}
                          value={t.name}
                          onChange={() => checkboxCategories(t.id)}
                        />
                        <label htmlFor={t.name}>{t.name}</label>
                        {
                          editCategories &&
                          <div className={s.deleteButtonContainer}>
                            <button type='button' onClick={() => dispatch(deleteCategory(t.id))} className="" disabled={!t.name?.length}>
                              x
                            </button>
                          </div>
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
                  <input type="submit" value="Actualizar" className={s.submit} />
                </div>
              </div>
            </form>
          </div>
      }
    </div>
  );
};

export default ContentUpdate;
