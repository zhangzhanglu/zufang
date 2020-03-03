import React from 'react';
import { BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from '../pages/Home/Home';
import Shop from '../pages/Shop/Shop';
import Life from '../pages/Life/Life';
import Me from '../pages/Me/Me';
import City from '../pages/City/City';
import NotFount from '../pages/NotFount/NotFount';
import Search from '../pages/Search/Search';
import Detail from '../pages/Detail/Detail';
import Login from '../pages/Login/Login';
import Pinglun from '../pages/Pinglun/Pinglun';
class MyRouter extends React.Component{
    render(){
        return(
            <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}></Route>
                <Route path='/shop'  component={Shop}></Route>
                <Route path='/life'  component={Life}></Route>
                <Route path='/me'  component={Me}></Route>
                <Route path='/city' component={City}></Route>
                <Route path='/search/:keyword'  component={Search}></Route>
                <Route path='/detail/:id'  component={Detail}></Route>
                <Route path='/login'  component={Login}></Route>
                <Route path='/pinglun'  component={Pinglun}></Route>


                <Route path='*' exact component={NotFount}></Route>
            </Switch>
            </BrowserRouter>
        )
    }
}
export default MyRouter;