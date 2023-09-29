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
import EditMedia from '../admin/EditMedia/EditMedia';
import CreateMedia from '../admin/CreateMedia/CreateMedia';
import EditUserList from '../admin/EditUserList/EditUserList';
import EditMediaList from '../admin/EditMediaList/EditMediaList';

import { Navigator } from '../components/Navigator/Navigator';
import { CanvasMenu } from '../components/Navigator/CanvasMenu';
import { OptionsCanvas } from '../components/Utils/SlideCanvas';

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
              <CreateMedia/>
            </Route>

            <Route exact path='/media/edit/:id'>
              <EditMedia/>
            </Route>

            <Route exact path='/media/edit'>
              <EditMediaList/>
            </Route>    

            <Route exact path='/users/edit'>
              <EditUserList/>
            </Route>

          </div>
        </>
      </Switch>
    </div>
  )
}

export default Router;
