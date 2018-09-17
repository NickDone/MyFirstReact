import React, {Conponent} from 'react';

function NavLink(props) {
    return (
        <li className="nav-item">
            <a className="nav-link" href={props.config.link}>{props.config.content}</a>
        </li>
    );
}

function MultiNavLink(props) {
    const listItems = props
        .config
        .subcontents
        .map((item, index) => <a className="dropdown-item" key={index} href={item.link}>{item.content}</a>);

    return (
        <li className="nav-item dropdown">
            <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                {props.config.content}
            </a>

            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                {listItems}
            </div>
        </li>
    );
}

function Navbar(props) {
    const navItems = props
        .navigations
        .map((item, index) => {
            if (item.subcontents) {
                return (<MultiNavLink key={index} config={item}/>);
            } else {
                return (<NavLink key={index} config={item}/>);
            }
        });
    return (
        <ul className="navbar-nav">
            {navItems}
        </ul>
    );
}

class NavControl extends React.Component {
    constructor(props) {
        super(props);
        this.navigations = this.props.navconfig.navigations;
    }
    render() {
        return (
            <nav className="navbar navbar-expand-md  navbar-dark bg-dark sticky-top">
                <a className="navbar-brand" href="#">{this.props.navconfig.brand}</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <Navbar navigations={this.navigations}/>
                </div>
            </nav>
        );
    }
}

export default NavControl;