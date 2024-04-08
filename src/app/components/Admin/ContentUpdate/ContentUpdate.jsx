import s from './ContentUpdate.module.css';
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import defaultPreview from '../../../../assets/images/default-background.png';
import { $gId } from '../../../../functions';
import { toTop } from '../../../../functions/toTop';
import {
  getCategories,
  getGenres,
  getMediaById,
  getMediatypes,
} from '../../../../middlewares/redux/actions/content';
import {
  createCategory,
  createGenre,
  createMediatype,
  deleteCategory,
  deleteGenre,
  deleteMediatype,
  setEdition,
  setInfoDetailViewer,
  updateMedia,
} from '../../../../middlewares/redux/actions/admin';
import { Checkbox } from '../AdminUtils/Checkbox';

const ContentUpdate = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const dbGenres = useSelector(state => state.dbGenres);
  const dbCategories = useSelector(state => state.dbCategories);
  const dbMediatypes = useSelector(state => state.dbMediatypes);
  const infoDetailViewer = useSelector(state => state.infoDetailViewer);
  const editionActive = useSelector(state => state.navigation.editionActive);

  const [submitted, setSubmitted] = useState(false);
  const [ready, setReady] = useState(false);

  const [imgVisor, setImgVisor] = useState("");
  const [newGenre, setNewGenre] = useState("");
  const [imgSlider, setImgSlider] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [newMediatype, setNewMediatype] = useState("");
  const [previewVisor, setPreviewVisor] = useState("");
  const [previewSlider, setPreviewSlider] = useState("");
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
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });

    dispatch(setInfoDetailViewer({
      ...data,
      [e.target.name]: e.target.value
    }));
  };

  function handleInputVisor(e) {
    dispatch(setInfoDetailViewer({
      ...data,
      imageVisor: e
    }));
  }

  function checkboxCategories(e) {
    if (data.category?.includes(e)) {
      data.category = data.category?.filter(id => id !== e);
      setData({
        ...data,
        category: data?.category,
      });

      dispatch(setInfoDetailViewer({
        ...data,
        category: data?.category,
      }));    

    } else {
      setData({
        ...data,
        category: [...data?.category, e],
      });

      dispatch(setInfoDetailViewer({
        ...data,
        category: [...data?.category, e],
      })); 
    }
  };

  function checkboxGenres(e) {
    if (data.genre?.includes(e)) {
      data.genre = data.genre?.filter(id => id !== e);
      setData({
        ...data,
        genre: data?.genre,
      });

      dispatch(setInfoDetailViewer({
        ...data,
        genre: data?.genre,
      }));

    } else {
      setData({
        ...data,
        genre: [...data?.genre, e],
      });

      dispatch(setInfoDetailViewer({
        ...data,
        genre: [...data?.genre, e],
      }));
    }
  };

  function checkboxMediatype(e) {
    if (data.mediatype?.includes(e)) {
      data.mediatype = data.mediatype?.filter(id => id !== e);
      setData({
        ...data,
        mediatype: data?.mediatype,
      });

      dispatch(setInfoDetailViewer({
        ...data,
        mediatype: data?.mediatype,
      }));

    } else {
      setData({
        ...data,
        mediatype: [...data?.mediatype, e],
      });

      dispatch(setInfoDetailViewer({
        ...data,
        mediatype: [...data?.mediatype, e],
      }));
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

    dispatch(updateMedia(id, formData));
    dispatch(getMediaById(id));
    setReady(true);
    return;
  };

  function resetForm() {
    dispatch(getGenres());
    dispatch(getMediatypes());
    dispatch(getCategories());
    dispatch(getMediaById(id));
    setData(infoDetailViewer);
    setImgVisor(infoDetailViewer?.imageVisor);
    setImgSlider(infoDetailViewer?.imageSlider);
    setPreviewVisor(infoDetailViewer?.imageVisor);
    setPreviewSlider(infoDetailViewer?.imageSlider);
    setSubmitted(false);
  };

  function closePanel() {
    $gId('edition-canvas').style.width = 0;
    dispatch(setEdition(false));
    resetForm();
  };

  useEffect(() => {
    setData(infoDetailViewer);
    setImgVisor(infoDetailViewer?.imageVisor);
    setImgSlider(infoDetailViewer?.imageSlider);
    setPreviewVisor(infoDetailViewer?.imageVisor);
    setPreviewSlider(infoDetailViewer?.imageSlider);
  }, [infoDetailViewer]);

  useEffect(() => {
    dispatch(getGenres());
    dispatch(getMediatypes());
    dispatch(getCategories());
    dispatch(getMediaById(id));
  }, [dispatch, id]);


  return (
    <div className={s.mainContainer}>
      {
        editionActive &&
        <>
          {
            submitted
              ?
              <div className={s.container}>
                <h1>{ready ? "¡Contenido actualizado!" : "Actualizando contenido..."}</h1>
                {
                  ready
                    ?
                    <div className={s.actionsContainer}>
                      <button className={s.actionPrimary} onClick={resetForm}>Volver a editar</button>
                      <button className={s.actionSecondary} onClick={closePanel}>Cerrar panel</button>
                    </div>
                    :
                    <div className={s.loaderContainer}>
                      Espere un momento...
                      <div className='loader' />
                    </div>
                }
              </div>
              :
              <div className={s.updateBody}>
                <form onSubmit={handleSubmit}>
                  <div className={s.container}>
                    <h1>Actualizar Contenido</h1>
                    <section className={s.contTitleArtistDesc}>
                      <span>
                        <label>Artista</label>
                        <input
                          type="text"
                          name="artist"
                          placeholder="Nombre del intérprete"
                          value={data?.artist || ''}
                          onInput={handleInputChange}
                        />
                      </span>
                      <span>
                        <label>Titulo</label>
                        <input
                          type="text"
                          name="title"
                          placeholder="Título de la publicación"
                          value={data?.title || ''}
                          onInput={handleInputChange}
                        />
                      </span>
                      <span>
                        <label>Descripción</label>
                        <input
                          placeholder="Escribe una breve reseña..."
                          type="text"
                          name="info"
                          value={data?.info || ''}
                          onInput={handleInputChange}
                        />
                      </span>
                    </section>
                    <section className={s.imgSlrVsr}>
                      <span>
                        <label>Imagen del Slider</label>
                        <img src={previewSlider || defaultPreview} alt="visor" height="120px" />
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
                      </span>
                      <span>
                        <label>Imagen del Visor</label>
                        <img src={previewVisor || defaultPreview} alt="visor" height="120px" />
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
                              handleInputVisor(reader.result);
                            }
                            reader.readAsDataURL(file);
                          }}
                        />
                      </span>
                    </section>

                    <h1>Detalles del contenido</h1>

                    <section className={s.contTitleArtistDesc}>
                      <span>
                        <label>Id del link de YouTube</label>
                        <input
                          type="text"
                          name="idLinkYT"
                          value={data?.idLinkYT || ''}
                          placeholder='ejemplo: hMS8RtYVouc'
                          onInput={handleInputChange}
                        />
                      </span>
                      <span>
                        <label>Id del link de Spotify</label>
                        <input
                          type="text"
                          name="idLinkSPOTY"
                          value={data?.idLinkSPOTY || ''}
                          placeholder='ejemplo: hMS8RtYVouc'
                          onInput={handleInputChange}
                        />
                      </span>
                      <span>
                        <label>url de la Web</label>
                        <input
                          type="text"
                          name="urlLinkWEB"
                          value={data?.urlLinkWEB || ''}
                          placeholder='ejemplo: http://2girls1cup.com'
                          onInput={handleInputChange}
                        />
                      </span>
                      <span>
                        <label>Link de descarga</label>
                        <input
                          type="text"
                          name="urlLinkDOWNLOAD"
                          value={data?.urlLinkDOWNLOAD || ''}
                          placeholder='ejemplo: http://2girls1cup.com'
                          onInput={handleInputChange}
                        />
                      </span>
                    </section>

                    <section className={s.checkboxes}>
                      <Checkbox
                        label={"Tipo de contenido"}
                        data={dbMediatypes}
                        checkbox={checkboxMediatype}
                        newAttribute={newMediatype}
                        setNewAttribute={setNewMediatype}
                        handleNewAttribute={handleNewMediatype}
                        createFunction={createMediatype}
                        deleteFunction={deleteMediatype}
                        selector={infoDetailViewer?.mediatype}
                      />

                      <Checkbox
                        label={"Género"}
                        data={dbGenres}
                        checkbox={checkboxGenres}
                        newAttribute={newGenre}
                        setNewAttribute={setNewGenre}
                        handleNewAttribute={handleNewGenre}
                        createFunction={createGenre}
                        deleteFunction={deleteGenre}
                        selector={infoDetailViewer?.genre}
                      />

                      <Checkbox
                        label={"Categoría"}
                        data={dbCategories}
                        checkbox={checkboxCategories}
                        newAttribute={newCategory}
                        setNewAttribute={setNewCategory}
                        handleNewAttribute={handleNewCategory}
                        createFunction={createCategory}
                        deleteFunction={deleteCategory}
                        selector={infoDetailViewer?.category}
                      />

                    </section>
                    <div className={s.actionsContainer}>
                      <input type="submit" value="Actualizar" className={s.actionPrimary} />
                      <button className={s.actionSecondary} onClick={closePanel}>Cancelar</button>
                    </div>
                  </div>
                </form>
              </div>
          }
        </>
      }
    </div>
  );
};

export default ContentUpdate;
