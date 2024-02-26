import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { $d, $gId } from '../../../functions';

export const VisorFunction = () => {
    document.addEventListener('mouseup', function (e) {
        var container0 = $gId('infoCont');
        if (!container0?.contains(e.target)) {
            $d('#infoCont').style.display='none'
        }
    });

    const currentUser = useSelector(state => state.currentUser);
    const mediaList = useSelector(state => state.mediaList);
    const [counter, setCounter] = useState(0);
    const [visorID, setVisorID] = useState();
    const [visorTag, setVisorTag] = useState();
    const [visorBtn1, setVisorBtn1] = useState();
    const [visorInfo, setVisorInfo] = useState();
    const [visorIcon, setVisorIcon] = useState();
    const [visorImg, setVisorImage] = useState();
    const [visorIdYT, setVisorIdYT] = useState();
    const [visorTitle, setVisorTitulo] = useState();
    const [visorArtist, setVisorArtista] = useState();
    const [visorTypeMedia, setVisorTypeMedia] = useState();
    const max = mediaList?.length || 0;

    const defaultVisor = {
        id: null,
        idLinkYT: null,
        imageVisor: null,
        artist: null,
        title: null,
        mediaType: null,
        tag: null,
        icon: null,
        actionButton: null,
        info: null
    };

    const { 
        id, 
        idLinkYT, 
        imageVisor, 
        artist, 
        title, 
        mediaType, 
        tag, 
        icon, 
        actionButton, 
        info 
    } = mediaList?.length? mediaList?.at(counter % max) : defaultVisor;

    useEffect(() => {
        let inf = 99999 + counter;
        let timeInterval = 20;
        let interval = null;
        interval = setInterval(() => {
            setCounter(k => k + 1)
            setVisorID(id)
            setVisorTag(tag)
            setVisorInfo(info)
            setVisorIcon(icon)
            setVisorTitulo(title)
            setVisorIdYT(idLinkYT)
            setVisorArtista(artist)
            setVisorImage(imageVisor)
            setVisorBtn1(actionButton)
            setVisorTypeMedia(mediaType)
            $d('.visorPostInfo').style.animationName = 'infoScale'
            $d('.visorPostInfo').style.animationIterationCount = inf
            $d('.visorPostInfo').style.animationDuration = `${timeInterval}s`
            $d('.visorBtn').style.scale = '1'
            $d('.visorBG').style.animationName = 'aniScale'
            $d('.visorBG').style.animationIterationCount = inf
            $d('.visorBG').style.animationDuration = `${timeInterval}s`
            $d(`.visor`).style.transform = 'translateX(0)'
        }, timeInterval * 1000);
        return () => (clearInterval(interval, timeInterval));
    }, [
        mediaList,
        actionButton,
        visorIdYT,
        id,
        imageVisor,
        idLinkYT,
        visorImg, 
        artist, 
        title, 
        mediaType, 
        tag, 
        icon, 
        info, 
        counter, 
    ]);

    return {
        mediaList,
        visorID,
        visorImg,
        visorTag,
        visorBtn1,
        visorInfo,
        visorIcon,
        visorIdYT,
        visorTitle,
        visorArtist,
        visorTypeMedia,
        currentUser,
    };
}

