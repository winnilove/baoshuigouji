import React,{Component} from 'react'
import FootBar from '../../components/footBar/footBar'


class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render(){
        return (
            <>
               Profile
               <FootBar></FootBar>
            </>
        )
    }
}

export default Profile