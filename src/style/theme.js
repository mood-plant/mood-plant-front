// const color = {
//   gray: '#EAEAEA',
//   warnInside: '#FFE3E3',
//   warnOutside: '#FF2121',
//   white: '#FFFFFF',
//   main: '#1A4346',
//   back: '#DBE3DE',
// };

// const theme = {
//   color,
// };

// export default theme;

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1A4346',
    },
  },
});

export default theme;
