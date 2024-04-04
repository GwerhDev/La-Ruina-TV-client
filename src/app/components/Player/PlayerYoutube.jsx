import s from './PlayerYoutube.module.css';
import YouTube from 'react-youtube';
import { useRef } from 'react';
import { useSelector } from "react-redux";

export const PlayerYoutube = (props) => {
  const { idLinkYT } = useSelector(state => state.player);
  const videoPlayerRef = useRef();
  const { artist, title, info } = props;

  const opts = {
    width: '100%',
    playerVars: {
      controls: 1,
      showinfo: 0,
      autoplay: 0,
      rel: 0,
      modestbranding: 1,
      fs: 1,
      iv_load_policy: 3,
      start: 0,
    },
  };

  return (
    <div className={s.container} id='player-container'>
      <div className={s.playerContainer}>
        {
          idLinkYT &&
          <YouTube iframeClassName={s.youtubeComponent} videoId={idLinkYT} ref={videoPlayerRef} opts={opts} />
        }
      </div>
      <ul className={s.infoCanvas}>
        <li className={s.artist}>{artist}</li>
        <li className={s.title}>{title}</li>
        <li className={s.info}>{info}</li>
      </ul>
    </div>
  )
};

