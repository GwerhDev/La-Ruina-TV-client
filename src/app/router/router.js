import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import View from '../pages/View/View';
import Auth from '../pages/Auth/Auth';
import Search from '../pages/Search/Search';
import Donate from '../pages/Donate/Donate';
import Verify from '../pages/Verify/Verify';
import Browser from '../pages/Browser/Browser';
import Releases from '../pages/Releases/Releases';
import Checkout from '../pages/Checkout/Checkout';
import UserList from '../admin/UserList/UserList';
import ContentList from '../admin/ContentList/ContentList';
import ContentCreate from '../admin/ContentCreate/ContentCreate';
import ContentUpdate from '../admin/ContentUpdate/ContentUpdate';

import { Navigator } from '../components/Navigator/Navigator';
import { CanvasMenu } from '../components/Navigator/CanvasMenu';
import { OptionsCanvas } from '../utils/SlideCanvas';

function Router() {
  return (
    <div className="App">
      <Switch>
        <>
          <Navigator/>
          <CanvasMenu/>
          <div className='bodyApp'>
            <OptionsCanvas/>

            <Route exact path='/'>
              <Redirect to='/browser'/>
            </Route>

            <Route path='/auth'>
              <Auth/>
            </Route>

            <Route path='/verify'>
              <Verify/>
            </Route>
            
            <Route exact path='/browser'>
              <Browser/>
            </Route>

            <Route exact path='/releases'>
              <Releases/>
            </Route>

            <Route exact path='/donate'>
              <Donate/>
            </Route>

            <Route path='/view/v=:id'>
              <View/>
            </Route>

            <Route path='/search/:search'>
              <Search/>
            </Route>

            <Route path='/checkout/:type'>
              <Checkout/>
            </Route>

            <Route exact path='/media/create'>
              <ContentCreate/>
            </Route>

            <Route exact path='/media/edit/:id'>
              <ContentUpdate/>
            </Route>

            <Route exact path='/media/edit'>
              <ContentList/>
            </Route>    

            <Route exact path='/users/edit'>
              <UserList/>
            </Route>

          </div>
        </>
      </Switch>
    </div>
  )
}

export default Router;
