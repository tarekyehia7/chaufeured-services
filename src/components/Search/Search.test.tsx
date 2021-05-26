import { render, cleanup } from '@testing-library/react';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import reducer from '../../store/reducers/rootReducer';
import { Search } from './Search';
import { theme } from '../../theme';

beforeEach(cleanup);

const renderComponent = (
    ui: React.ReactElement,
    {
      initialState,
      store = createStore(reducer, initialState),
      ...renderOptions
    }: any = {}
  ) => {
    function Wrapper({ children }: { children: React.ReactNode }) {
      return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </Provider>
      );
    }
    return render(ui, { wrapper: Wrapper, ...renderOptions })
  }

test('renders offerCard with all data', () => {
    const { getByTestId } = renderComponent(<Search />, { initialState: { offers: [] } });

    const card = getByTestId('search-container');
    expect(card).toBeInTheDocument();
});
  