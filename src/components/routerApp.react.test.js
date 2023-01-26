import React from 'react';
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store'
import RouterApp from './router.js';

test('Snapshot Test Practice -- Outline of whole app renders', () => {
    const store = {
        text: 'hello world',
    }
    const mockStore = configureStore()

    const component = renderer.create(
        <Provider store={mockStore(store)}>
            <RouterApp />
        </Provider>)
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})
