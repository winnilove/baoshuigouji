import React,{Component} from 'react';
import { BrowserRouter,Route} from 'react-router-dom';
import Home from '../home/home'
import Classes from '../classes/classes'
import Profile from '../profile/profile'
import MyVip from '../myVip/myVip'
import Cart from '../cart/cart'



//高阶组件中的withRouter, 作用是将一个组件包裹进Route里面, 然后react-router的三个对象history, location, match就会被放进这个组件的props属性中.
class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render(){
        return (
            <BrowserRouter>
                <Route exact path={'/'} component={Home}/>
                <Route exact path={'/home'} component={Home}/>
                <Route exact path={'/cart'} component={Cart}/>
                <Route exact path={'/profile'} component={Profile}/>
                <Route exact path={'/classes'} component={Classes}/>
                <Route exact path={'/myVip'} component={MyVip}/>
            </BrowserRouter>
        );
    }
}

export default Container;
