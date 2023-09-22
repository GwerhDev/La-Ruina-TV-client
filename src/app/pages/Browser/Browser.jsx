import React, { useEffect } from "react";
import s from "./Browser.module.css";
import Visor from "../../components/MediaVisor/MediaVisor";
import Footer from "../../components/Footer/Footer";
import Slider from "../../components/MediaSlider/MediaSlider";
import { BodyCss } from "../../../functions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { InfoCanvas } from '../../components/Utils/InfoCanvas';
import {
  resetIdYT,
  resetOption,
} from "../../../middlewares/redux/actions";
import { getCategories, getMedia, resetMedia } from "../../../middlewares/redux/actions/media";
import { getUserToken } from "../../../middlewares/helpers";
import { getFavorites } from "../../../middlewares/redux/actions/account";

const Browser = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userToken = getUserToken();
  const currentUser = useSelector((state) => state.currentUser);
  const mediaList = useSelector((state) => state.mediaList);
  const dbCategories = useSelector((state) => state.dbCategories);

  useEffect(() => {
    dispatch(resetOption())
  }, [dispatch])

  useEffect(() => {
    !(userToken?.length && !currentUser) ?? history.push(`/auth?token=${userToken}`);
  }, [dispatch, currentUser, userToken, history])

  useEffect(() => {
    dispatch(getMedia());
    dispatch(resetIdYT());
    dispatch(resetMedia());
    dispatch(getFavorites());
    dispatch(getCategories());
    BodyCss();
  }, [dispatch]);

  return (
    <div className="browserBody">
      {/* ---------------------VISOR--------------------- */}

      <Visor />
      <InfoCanvas />

      {/* --------------------SLIDERS-------------------- */}
      {mediaList?.length && (
        <Slider
          title={"Contenido"}
          mediaList={mediaList}
          style={s}
          id={`s${-1}`}
          key={`s${-1}`}
        />
      )}

      {
        dbCategories?.map((category, index) => {
          const filteredList = mediaList?.filter(card => card.categories?.includes(category.id));
          return filteredList?.length ? (
            <Slider
              title={category}
              mediaList={filteredList}
              style={s}
              id={`s${index}`}
              key={category}
            />
          ) : null;
        })
      }

      {/* ---------------------FOOTER--------------------- */}

      {mediaList?.length > 1 && <Footer />}
    </div>
  );
};

export default Browser;
