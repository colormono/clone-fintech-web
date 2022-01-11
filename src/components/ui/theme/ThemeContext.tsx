import React from 'react';
import defaultTheme from './defaultTheme';

interface ThemeContextInterface {
  theme: any;
}

const ThemeContext = React.createContext<ThemeContextInterface>({ theme: defaultTheme });

export default ThemeContext;

