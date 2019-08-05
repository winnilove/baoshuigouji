import React,{Component} from 'react'
import http from '../../utils/http'

import './homeSearch.less'
class HomeSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgsrc:"http://m.baoshuiguoji.com/themes/default/images/logo-m.gif",
            val:'荷兰牛栏'
        }
    }
    handleChange = async(e)=>{
        this.setState({
            // val:e.target.value
        })
        const data = {
            keyword: '牛',
            uiniqueid: '91471439056145721046',
            timestamp:'20198375743',
            command: 'api.search.better',
            sign:' 3b822792674898baa5caae6de7a7da9f'
        }
        const res = await http.post('/api',data)
        console.log(res)
    }
    render(){
        return (
            <>
              <div className="search">
                  <img className="logo" alt="x" src={this.state.imgsrc} />
                  <form className="search-area">
                        <input type="text" onChange={this.handleChange} defaultValue={this.state.val} name="search_keywords" placeholder="荷兰牛栏" className="so-key" autoComplete="off" />
                        <input type="submit" className="so-btn" value="" />
                  </form>
                 <a href="/home" className="m-logins">登录</a>
                 <ul className="list-group"></ul>
              </div>
            </>
        )
    }
}

export default HomeSearch