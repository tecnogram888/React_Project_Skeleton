import React from 'react';
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store'
import App1 from './app.js';

test('Snapshot Test Practice -- Outline of whole app renders', () => {
    const store = {
        text: 'hello world',
    }
    const mockStore = configureStore()

    const component = renderer.create(
        <Provider store={mockStore(store)}>
            <App1 />
        </Provider>)
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})
