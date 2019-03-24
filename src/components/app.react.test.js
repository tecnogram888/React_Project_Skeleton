import React from 'react';
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store'
import App from './app';

test('Snapshot Test Practice -- Outline of whole app renders', () => {
    const store = {
        text: 'hello world',
    }
    const mockStore = configureStore()
    
    const component = renderer.create(
        <Provider store={mockStore(store)}>
            <App />
        </Provider>)
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})
