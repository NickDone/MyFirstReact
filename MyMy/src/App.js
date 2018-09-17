import React, {Component} from 'react';
import logo from './logo.svg';
import {Link} from 'react-router-dom';
import MainControl from './components/maincontrol/maincontrol';
import LeftControl from './components/leftcontrol/leftcontrol';
import RightControl from './components/rightcontrol/rightcontrol';
import {MyProfile} from './fakedatas/homeconfig.js';
class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let data = this.props.location.query;
        let name = "default";
        let style1 = {
            backgroundColor: 'lightblue'
        }
        let style2 = {
            backgroundColor: 'lightgreen'
        }
        let style3 = {
            backgroundColor: 'lightred'
        }
        if (data) {
            name = data.name;
        }
        return (
            <div className="container-fluid">
                <div className="row justify-content-center flex-xl-nowrap" style={style1}>
                    <div className="col-xl-2 col-lg-3 d-none d-lg-block" style={style1}>
                        <LeftControl ProfileConfig={MyProfile}/>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-12" style={style2}>
                        <MainControl/>
                    </div>
                    <div className="col-xl-2 col-lg-3 d-none d-lg-block" style={style3}>
                        <RightControl/>
                    </div>
                </div>
                <div className="row">
                    <Link to='/resume/lixaodong'>Go to page 2.</Link>
                    <p>This is Home again {name}</p>
                </div>
            </div>
        )
    }
}

export default App;