import React from 'react';
import {conenct, connect} from 'react-redux';
import {set_data, facebook_login} from '../../store/action'
import './style.css';
import { Form } from 'react-bootstrap';

class Home extends React.Component {
    static getDerivedStateFromProps(props, state){
        console.log("Props==>",props)
        return{

        }
    }

    render() {
        let user = {name:"umair",email: "umair@gmail.com"}
        console.log("userss==>",this.props.users)
        return (
            <div>
                <h1>Home</h1>
                <button onClick={()=>this.props.facebook_login()}>FACEBOOK LOGIN</button>
                {/* <button onClick={()=>this.props.set_data(user)}>SETDATA</button> */}
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    users: state.users
})

const mapDispatchToProps = (dispatch) => ({
    set_data: ()=> dispatch(set_data()),
    facebook_login: ()=> dispatch(facebook_login()),
    
  })

export default connect(mapStateToProps,mapDispatchToProps)(Home);
