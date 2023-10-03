import s from './SlideCanvas.module.css';
import React from 'react';
import { useSelector } from 'react-redux';

import Enter from '../pages/Enter/Enter';

import { Profile } from '../components/Profile/Profile';
import { Dashboard } from '../admin/Dashboard/Dashboard';
import { Favorites } from '../components/Favorites/Favorites';
import { BackButton } from '../components/Navigator/BackButton';
import { Subscription } from '../components/Subscription/Subscription';
import { Configurations } from '../components/Configurations/Configurations';

export const OptionsCanvas = () => {
    const option = useSelector(state => state.option)
    return (
        <div className={s.slideCanvasCont} id='slideCanvasCont'>
            <ul>
                {
                    (option ?
                        (option === 'login') ? <><Enter /></>
                            :
                            (option === 'config') ? <><Configurations /></>
                                :
                                (option === 'profile') ? <><Profile /></>
                                    :
                                    (option === 'favorites') ? <><Favorites /></>
                                        :
                                        (option === 'dashboard') ? <><Dashboard /></>
                                            :
                                            (option === 'subscription') ? <><Subscription /></>
                                                :
                                                (option === 'configuration') ? <><BackButton /></>
                                                    : null
                        : null)
                }
            </ul>
        </div>
    )
}
