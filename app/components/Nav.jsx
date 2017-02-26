const React = require('react');
var {Link,IndexLink} = require('react-router');

const Nav = () => {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">React Timer App</li>                        
                        <li>
                        <Link to="/timer" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Timer</Link>
                        </li>
                        <li>
                        <Link to="/countdown" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Countdown</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <ul className="menu">
                        <li className="menu-text">
                            <span>Created by <a href="#" target="_blank">Kendall Brown</a></span>
                        </li>
                    </ul>
                </div>
            </div>
        );
  };

module.exports = Nav;