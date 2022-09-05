// ----------------------------------------------------------------------

export default function Paper() {
  return {
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },

      styleOverrides: {
        root: {
          background: '#131e47',
          color:'white',
        },
      },
    },
  };
}
