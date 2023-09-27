import s from "./Browser.module.css";
import { useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { InfoCanvas } from '../../components/Utils/InfoCanvas';
import { BodyCss } from "../../../functions";
import { resetIdYT, resetOption } from "../../../middlewares/redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, getMedia, resetMedia } from "../../../middlewares/redux/actions/media";
import { getUserToken } from "../../../middlewares/helpers";
import { getFavorites } from "../../../middlewares/redux/actions/account";
import Slider from "../../components/MediaSlider/MediaSlider";
import Visor from "../../components/MediaVisor/MediaVisor";
import Footer from "../../components/Footer/Footer";

const Browser = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userToken = getUserToken();
  const mediaList = useSelector((state) => state.mediaList);
  const currentUser = useSelector((state) => state.currentUser);
  const dbCategories = useSelector((state) => state.dbCategories);
  const mediaByCategory = useSelector((state) => state.mediaByCategory);

  useEffect(() => {
    dispatch(resetOption())
  }, [dispatch])

  useEffect(() => {
    !(userToken?.length && !currentUser) ?? history.push(`/auth?token=${userToken}`);
  }, [dispatch, currentUser, userToken, history])

  useEffect(() => {
    BodyCss();
    dispatch(getMedia());
    dispatch(resetIdYT());
    dispatch(resetMedia());
    dispatch(getCategories());
    !currentUser?? dispatch(getFavorites());
  }, [dispatch, currentUser]);

  return (
    <div className="browserBody">
      {/* ---------------------VISOR--------------------- */}

      <Visor />
      <InfoCanvas />

      {/* --------------------SLIDERS-------------------- */}
      
      {
        mediaList?.length && 
        <Slider
          title={"Contenido"}
          data={mediaList}
          idCategory={-1}
          s={s}
          id={`s${-1}`}
          key={`s${-1}`}
        />
      }

      {
        dbCategories?.map((category, index) => {
          return (
            mediaByCategory[index]?.length &&
            <Slider
              title={category.name}
              data={mediaByCategory[index]}
              idCategory={category.id}
              s={s}
              id={`s${category.id}${index}`}
              key={category.id}
            />
        )})
      }

      {/* ---------------------FOOTER--------------------- */}

      { mediaList?.length && <Footer /> }
    </div>
  );
};

export default Browser;
