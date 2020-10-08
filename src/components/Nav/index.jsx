import React from 'react';
import {
    BrowserRouter as Router,
    Link, 
    Route, 
    Switch
} from 'react-router-dom';
import Home from '../Home';
import TicTacToe from '../TicTacToe';
import Styles from './styles';

const Nav = () => {
    return (
        <Router>
            <Styles.Nav>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>                    
                    <li>
                        <Link to="/tic-tac-toe">Tic Tac Toe</Link>
                    </li>
                </ul>
            </nav>
            </Styles.Nav>
            <Switch>
                <Route exact path="/">
                    Welcome Home
                </Route>

                <Route exact path="/tic-tac-toe">
                    Let's Play Tic Tac Toe
                </Route>
            </Switch>
            
        </Router>
    );
}

export default Nav;
