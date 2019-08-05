import React,{Component} from 'react'
import FootBar from '../../components/footBar/footBar'

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render(){
        return (
            <>
               购物车
               <FootBar></FootBar>
            </>
        )
    }
}

export default Cart