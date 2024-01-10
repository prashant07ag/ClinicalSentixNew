import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
// import MuiAppBar from '@mui/material/AppBar';
// import MuiDrawer from '@mui/material/Drawer';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import Badge from '@mui/material/Badge';
// import Paper from '@mui/material/Paper';
// import MenuIcon from '@mui/icons-material/Menu';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import { mainListItems, secondaryListItems } from './listItems';
// import Chart from './Chart';
// import Deposits from './Deposits';
// import Orders from './Orders';

import DefCard from './components/DefCard';
import AreaChartInteractiveExample from './components/ArChart';
import Header from './components/Header';
import { AreaChart, Card, DonutChart, Title, BarChart } from '@tremor/react';
import { fetchData } from './utils/requests';
import BarchartComp from './components/BarchartComp';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Clinical Sentix
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


// TODO remove, this demo shouldn't need to reset the theme.
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function Dashboard() {
  const navigate = useNavigate();
  //👇🏻 fetch the username from the URL
  const { drugname } = useParams();
  //👇🏻 the required states
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState([]);
  const [error, setError] = useState(false);

  //👇🏻 fetch the user details on page load
  useEffect(() => {
    fetchData(drugname, setUserData, setError, setLoading);
  }, [drugname]);

  // useEffect(() => {
  //   // fetch the repos if there is no error
  //   function authenticate() {
  //     if (!error) {
  //       fetchData(username);
  //     }
  //   }
  //   authenticate();
  // }, [username, error]);
  
  if (loading || !userData) {
    return <div className="loading">Loading...please wait</div>;
  }
  if (error) {
    return navigate("/error");
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
            py: 0,
            my: 0,
          }}
        >
          <Toolbar />

          <Container maxWidth="lg" sx={{ mb: 4 }}>
            {/* Navbar */}
            <Header data={drugname} />

            <Grid container spacing={3}>
              {/* Area Chart (Time series)*/}
              <Grid item xs={12} md={8} lg={9}>
                <AreaChartInteractiveExample timeline={userData.timeline} />
              </Grid>

              {/* Pie Chart (Sentiment) */}
              <Grid item xs={12} md={4} lg={3}>
                <Card>
                  <Title>Sentiment Overview</Title>
                  <DonutChart
                    className="h-48 mt-4"
                    data={[
                      {
                        lang: "Positive",
                        tweets: userData.totalPositiveTweets,
                      },
                      {
                        lang: "Negative",
                        tweets: userData.totalNegativeTweets,
                      },
                      { lang: "Neutral", tweets: userData.totalNeutralTweets },
                    ]}
                    category="tweets"
                    index="lang"
                    variant="pie"
                    marginTop="mt-6"
                    colors={["indigo", "slate", "gray"]}
                  />
                </Card>
              </Grid>

              {/* Bar Chart (Named Entity count) */}
              <Grid item xs={12} md={12} lg={12}>
                <BarchartComp namedData={userData.topNamedEntities } />
              </Grid>  

              <Grid item xs={12} md={4} lg={3}>
                <DefCard />
              </Grid>
            </Grid>
          </Container>

          <footer>
            <Copyright sx={{ pt: 4 }} />
          </footer>
        </Box>
      </Box>
    </ThemeProvider>
  );
}