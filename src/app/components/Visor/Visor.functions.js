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

    const mediaList = useSelector(state => state.mediaList);
    const imageStore = useSelector(state => state.imageStore);
    const currentUser = useSelector(state => state.currentUser);
    const max = mediaList?.length || 0;
    const [counter, setCounter] = useState(0);
    const [visorId, setVisorId] = useState(null);
    const [visorImage, setVisorImage] = useState(null);
    const [visorTitle, setVisorTitle] = useState(null);
    const [visorArtist, setVisorArtist] = useState(null);
    const [visorInfo, setVisorInfo] = useState(null);
    const [visorIcon, setVisorIcon] = useState(null);
    const [visorTag, setVisorTag] = useState(null);
    const [visorMediaType, setVisorMediaType] = useState(null);
    const [visorIdLinkYT, setVisorIdLinkYT] = useState(null);
    const [visorActionButton, setVisorActionButton] = useState(null);    

    const defaultVisor = {
        id: null,
        tag: null,
        info: null,
        icon: null,
        title: null,
        artist: null,
        idLinkYT: null,
        mediaType: null,
        imageVisor: null,
        actionButton: null,
    };

    const { 
        id,
        tag,
        info,
        icon,
        title,
        artist,
        idLinkYT,
        mediaType,
        imageVisor,
        actionButton,
    } = mediaList?.length? mediaList?.at(counter % max) : defaultVisor;

    useEffect(() => {
        let inf = 99999 + counter;
        let timeInterval = 20;
        let interval = null;
        interval = setInterval(() => {
            setCounter(k => k + 1)
            setVisorId(id)
            setVisorTag(tag)
            setVisorInfo(info)
            setVisorIcon(icon)
            setVisorTitle(title)
            setVisorArtist(artist)
            setVisorImage(imageVisor)
            setVisorIdLinkYT(idLinkYT)
            setVisorMediaType(mediaType)
            setVisorActionButton(actionButton)
            $d('.visorBtn').style.scale = '1'
            $d('.visorBG').style.animationName = 'aniScale'
            $d('.visorBG').style.animationDuration = `${timeInterval}s`
            $d('.visorPostInfo').style.animationName = 'infoScale'
            $d('.visorPostInfo').style.animationDuration = `${timeInterval}s`
            $d('.visorBG').style.animationIterationCount = inf
            $d('.visorPostInfo').style.animationIterationCount = inf
            $d(`.visor`).style.transform = 'translateX(0)'
        }, timeInterval * 1000);
        return () => (clearInterval(interval, timeInterval));
    }, [
        counter,
        imageStore,
        imageVisor,
        id,
        idLinkYT,
        info,
        icon,
        title,
        artist,
        tag,
        mediaType,
        actionButton,
    ]);

    return {
        mediaList,
        imageStore,
        currentUser,
        visorId,
        visorArtist,
        visorTitle,
        visorInfo,
        visorIcon,
        visorTag,
        visorMediaType,
        visorIdLinkYT,
        visorActionButton,
        visorImage,
    };
}

