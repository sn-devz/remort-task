import {ReactElement} from 'react';
import {render, RenderOptions} from '@testing-library/react-native';
import AppProvider from './src/AppProvider';

// creatte custom provider for all component

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, {wrapper: AppProvider, ...options});

export * from '@testing-library/react-native';
export {customRender as render};
