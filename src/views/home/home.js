import React,{Component} from 'react'
import { Carousel } from 'antd';
import {fetchBanner,fetchFollow} from '../../redux/home.redux';
import { connect } from 'react-redux'

import HomeSearch from '../../components/homeSearch/homeSearch'
import './home.less'

import FootBar from '../../components/footBar/footBar'
// 哪些 Redux 全局的 state 是我们组件想要通过 props 获取的？
//[mapStateToProps(state, [ownProps]): stateProps] (Function): 如果定义该参数，组件将会监听 Redux store 的变化。
//任何时候，只要 Redux store 发生改变，mapStateToProps 函数就会被调用。
//该回调函数必须返回一个纯对象，这个对象会与组件的 props 合并
function mapStateToProps(state) {
    return state.home  //home  中有bannerData(是一个[])
}
  
// 哪些 action 创建函数是我们想要通过 props 获取的？
//mapDispatchToProps用于建立组件跟store.dispatch的映射关系,可以是一个object，也可以传入函数 
function mapDispatchToProps(dispatch) {
    return {
        fetchBanner:()=>{
            return dispatch(fetchBanner())
        },
        fetchFollow:()=>{
            return dispatch(fetchFollow())
        }
    }
}

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount(){
        this.props.fetchBanner();
        this.props.fetchFollow();
    }
    render(){
        return (
            <div className="home">
                <div className="main">
                    <HomeSearch></HomeSearch>
                    <div className="sliderCon">
                        <Carousel 
                         autoplay={true}
                         dotPosition={'bottom'}
                        >
                            {this.props.bannerData.map(val=>(
                                <div key={val.goods_id} className="imgDiv">
                                    <img alt={val.name} src={val.pic_url}/>
                                </div>
                                )
                            )}
                        </Carousel>
                    </div>
                    <div className="shop">
                        <div className="t-head"><i>跟随购</i><b>看众评 选好货</b></div>
                        <div>
                                {this.props.followBuy}
                        </div>
                    </div>
                </div>
                 <FootBar></FootBar>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,//返回一个对象，对象的键是该组件的prop属性(例如this.props.bannerData)，值是该prop的值；
    mapDispatchToProps
  )(Home)
//总结一下，connect后面第二个括号是要添加prop的react组件，
//第一个括号中的参数是用来改变该组件prop的方法，第一个括号有两个参数，第一个参数是一个函数，返回一个对象，
//对象的键是该组件的prop属性，值是该prop的值；
//第二个参数也是一个函数，返回一个对象，对象的键同样是prop的属性名，
//值是一个redux的dispatch，当这个prop属性被用于触发时，dispatch会改变redux中state的值。
