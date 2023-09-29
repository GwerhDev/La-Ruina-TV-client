import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import View from '../pages/View/View';
import Auth from '../components/Auth/Auth';
import Search from '../pages/Search/Search';
import Donate from '../pages/Donate/Donate';
import Verify from '../components/Auth/Verify';
import Browser from '../pages/Browser/Browser';
import Releases from '../pages/Releases/Releases';
import EditMedia from '../admin/EditMedia/EditMedia';
import Navigator from '../components/Navigator/Navigator';
import CreateMedia from '../admin/CreateMedia/CreateMedia';

import { Checkout } from '../components/Checkout/Checkout';
import { CanvasMenu } from '../components/Navigator/CanvasMenu';
import { OptionsCanvas } from '../components/Utils/SlideCanvas';
import { EditMediaList } from '../admin/EditMediaList/EditMediaList';
import { EditUsersList } from '../admin/EditUserList/EditUsersList';

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
              <EditUsersList/>
            </Route>

          </div>
        </>
      </Switch>
    </div>
  )
}

export default Router;
