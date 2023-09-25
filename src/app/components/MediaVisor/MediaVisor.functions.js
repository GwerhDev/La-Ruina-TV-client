import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getNextVisor, getResetVisor } from '../../../middlewares/redux/actions';
import { $d, $gId } from '../../../functions';

export const VisorFunction = () => {
    document.addEventListener('mouseup', function (e) {
        var container0 = $gId('infoCont');
        if (!container0?.contains(e.target)) {
            $d('#infoCont').style.scale = '0'
        }
    });

    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.currentUser);
    const visorList = useSelector(state => state.visorList);
    const nextVisor = useSelector(state => state.nextVisor);
    const [counter, setCounter] = useState(0);
    const [visorID, setVisorID] = useState();
    const [visorTag, setVisorTag] = useState();
    const [visorBtn1, setVisorBtn1] = useState();
    const [visorInfo, setVisorInfo] = useState();
    const [visorIcon, setVisorIcon] = useState();
    const [visorImg, setVisorImage] = useState();
    const [visorTitle, setVisorTitulo] = useState();
    const [visorArtist, setVisorArtista] = useState();
    const [visorTypeMedia, setVisorTypeMedia] = useState();
    const [visorIdYT, setVisorIdYT] = useState();

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
    } = nextVisor?.length? visorList?.at(counter) : defaultVisor;

    useEffect(() => {
        let inf = 99999 + counter;
        const max = visorList?.length - 1 !== 0 || 0;
        let timeInterval = 20;
        let interval = null;
        dispatch(getNextVisor(counter % max));
        interval = setInterval(() => {
            dispatch(getResetVisor())
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
        visorList, 
        dispatch
    ]);

    return {
        visorList,
        nextVisor,
        visorIdYT,
        visorID,
        visorTag,
        visorBtn1,
        visorInfo,
        visorIcon,
        visorImg,
        visorTitle,
        visorArtist,
        visorTypeMedia,
        currentUser,
    };
}

