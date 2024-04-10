import s from './ContentCreate.module.css';
import { Link } from 'react-router-dom';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toTop } from '../../../../functions/toTop';
import { PrimaryButton } from '../../Buttons/PrimaryButton';
import { SecondaryButton } from '../../Buttons/SecondaryButton';
import { createMedia } from '../../../../middlewares/redux/actions/admin';
import { Content } from '../../../../interfaces/Content';

const ContentCreate = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState(new Content());
  const [submitted, setSubmitted] = useState(false);
  const [redirectRoute, setRedirectRoute] = useState("");

  function handleInputChange(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    toTop();
    setSubmitted(true);
    const { id } = await dispatch(createMedia(data));
    setRedirectRoute('/view/v=' + id);
  };

  function resetForm() {
    setSubmitted(false);
    setData(new Content());
    setRedirectRoute(null);
  }

  return (
    <div className={s.mainContainer}>
      <div className='nav-fixed' />
      {
        submitted
          ? <div className={s.container}>
            <h1>{redirectRoute ? "¡Contenido creado!" : "Creando contenido..."}</h1>
            {
              redirectRoute
                ?
                <div>
                  <Link to={redirectRoute}>
                    <PrimaryButton text={"Ver contenido"} />
                  </Link>
                  <SecondaryButton onClick={resetForm} text={"Crear más contenido"} />
                </div>
                :
                <div className={s.loaderContainer}>
                  Espere un momento...
                  <div className='loader' />
                </div>
            }
          </div>
          :
          <div className={s.createBody}>
            <form onSubmit={handleSubmit}>
              <div className={s.container}>
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

                <div>
                  <input type="submit" value="Continuar" className={s.submit} />
                </div>
              </div>
            </form>
          </div>
      }
    </div>
  );
};

export default ContentCreate;
