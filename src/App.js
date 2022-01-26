import { useTheme, useMediaQuery, Box, Paper } from "@mui/material";

const BreakpointHelper = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  if (matches) {
    return (
      <Paper elevation={5}>
        <Box p={5}>
          BreakpointHelper will render everything up from 'sm' which is 600px
        </Box>
      </Paper>
    );
  }
  return <></>;
};

function App() {
  return (
    <>
      <Box>
        <h1>Test</h1>
        <BreakpointHelper />
      </Box>
    </>
  );
}

export default App;
