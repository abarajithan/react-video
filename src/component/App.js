import React, { Component } from 'react';
import {Provider} from 'react-redux';
import store from '../store/store';
import Container from "./Container";

class App extends Component {
    render() {
        return (
            <div className=''>
                <Provider store={store}>
                    <Container />
                </Provider>
            </div>
        );
    }
}

module.exports = App;