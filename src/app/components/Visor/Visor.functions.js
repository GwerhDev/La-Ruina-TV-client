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
    const max = mediaList?.length || 0;
    const [counter, setCounter] = useState(0);
    const [image, setImage] = useState(null);

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
            setImage(imageVisor)       
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
        counter,
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
    ]);

    return {
        mediaList,
        currentUser,
        id,
        tag,
        info,
        icon,
        image,
        title,
        artist,
        idLinkYT,
        mediaType,
        actionButton,
    };
}

