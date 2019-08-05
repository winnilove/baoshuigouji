import React,{Component} from 'react'
import { NavLink,withRouter } from 'react-router-dom'

import './footBar.less'
import './iconfont.css'

class FootBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            entry:[
                {
                    name:"首页",
                    path:'/home',
                    icon:'icon-home'
                },
                {
                    name:"我的VIP",
                    path:'/myVip',
                    icon:'icon-qiandai-copy'
                },
                {
                    name:"分类",
                    path:'/classes',
                    icon:'icon-unorderedlist'
                },
                {
                    name:"购物车",
                    path:'/cart',
                    icon:'icon-cart'
                },
                {
                    name:"我的",
                    path:'/profile',
                    icon:'icon-user'
                }

            ]
        }
    }
    render(){
        return (
            <div className='fnavcon'>
                {
                    this.state.entry.map(v=>(
                        <NavLink 
                        to={v.path} 
                        key={v.name} 
                        className='fnav'
                        activeClassName="navActive"
                        >
                            <i className={`iconfont iconColor ${v.icon}`}></i>
                            <p>{v.name}</p>
                        </NavLink>
                    ))
                }
            </div>
        )
    }
}

export default withRouter(FootBar)