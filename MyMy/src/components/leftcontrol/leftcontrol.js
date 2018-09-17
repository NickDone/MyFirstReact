import React, {Component} from 'react';
class LeftControl extends React.Component {
    constructor(props) {
        super(props);
        this.ListItem = this
            .props
            .ProfileConfig
            .profiles
            .map((item, index) => <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.content}</p>
            </div>);
    }

    render() {
        return (
            <div className="card">
                <img
                    className="card-img-top"
                    src={this.props.ProfileConfig.headportrait}
                    alt="Card image cap"/> {this.ListItem}
            </div>
        )
    }
}

export default LeftControl;