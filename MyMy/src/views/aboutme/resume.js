import React from 'react';
import {Link} from 'react-router-dom';


class resume extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let data = {
            name: "lixd",
            age: "18"
        };
        let path = {
            pathname: "/App",
            query: data
        };
        return (
            <div>
                <div>About me.{this.props.match.params.name}</div>
                <Link to='/App'>Go Home.</Link>
                <Link to={path}>GOGO</Link>
            </div>
        );
    }
}

export default resume;