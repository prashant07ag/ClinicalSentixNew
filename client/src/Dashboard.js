import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import DefCard from "./components/DefCard";
import AreaChartInteractiveExample from "./components/ArChart";
import Header from "./components/Header";
import { Card, DonutChart, Title } from "@tremor/react";
import { fetchData, stringToDate } from "./utils/requests";
import BarchartComp from "./components/BarchartComp";
import Sidebar from "./components/Sheet";
import { useCallback } from "react";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Clinical Sentix
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function Dashboard() {
  const navigate = useNavigate();
  //👇🏻 fetch the drugname from the URL
  const { drugname } = useParams();
  //👇🏻 the required states
  const [loading, setLoading] = useState(true);
  const [tweetData, setTweetData] = useState([]);
  const [error, setError] = useState(false);
  const [date, setDate] = useState("2000-1-1");
  const [open, setOpen] = useState(false);
  const [tweetsFromDate, setTweetsFromDate] = useState([]);

  //👇🏻 fetch the user details on page load
  useEffect(() => {
    fetchData(drugname, setTweetData, setError, setLoading);
    console.log("fetching data");
  }, [drugname]);
  const tweetDataByDate = useCallback(
    (date) => {
      const tweets = calculateTweetsByTimeframe(tweetData.tweets, date);
      setTweetsFromDate(tweets);
    },
    [tweetData.tweets]
  );

  useEffect(() => {
    tweetDataByDate(stringToDate(date, "yyyy-mm-dd", "-"));
  }, [date, tweetDataByDate]);

  const calculateTweetsByTimeframe = (tweets, start) => {
    const currentDate = new Date();
    const startDate = !!start ? start : new Date();

    if (tweets) {
      const filteredTweets = tweets.filter((tweet) => {
        const tweetDate = new Date(tweet.date);
        return tweetDate >= startDate && tweetDate <= currentDate;
      });
      return filteredTweets;
    } else {
      return [];
    }
  };

  if (loading || !tweetData) {
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
                <Sidebar tweetData={tweetsFromDate} isOpen={open} date={date} />
                <AreaChartInteractiveExample
                  timeline={tweetData.timeline}
                  setDate={setDate}
                  setOpen={setOpen}
                />
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
                        tweets: tweetData.totalPositiveTweets,
                      },
                      {
                        lang: "Negative",
                        tweets: tweetData.totalNegativeTweets,
                      },
                      { lang: "Neutral", tweets: tweetData.totalNeutralTweets },
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
                <BarchartComp namedData={tweetData.topNamedEntities} />
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
