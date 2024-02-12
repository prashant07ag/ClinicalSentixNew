var express = require("express");
var router = express.Router();
const data = JSON.stringify({
  totalTweets: 137,
  totalPositiveTweets: 117,
  totalNegativeTweets: 20,
  totalNeutralTweets: 0,
  topNamedEntities: [
    { name: "Bentracimab", count: 137 },
    { name: "Brilinta", count: 137 },
    { name: "Clinical Trial", count: 62 },
    { name: "Regulatory Process", count: 26 },
    { name: "FDA", count: 15 },
    { name: "Research Organization", count: 14 },
    { name: "Regulatory Body", count: 9 },
  ],
  timeline: [
    { date: "2023-05-15", tweetcount: 15 },
    { date: "2023-06-02", tweetcount: 12 },
    { date: "2023-07-12", tweetcount: 20 },
    { date: "2023-08-05", tweetcount: 10 },
    { date: "2023-09-21", tweetcount: 18 },
    { date: "2023-10-08", tweetcount: 14 },
    { date: "2023-11-17", tweetcount: 16 },
    { date: "2023-12-04", tweetcount: 22 },
    { date: "2024-01-12", tweetcount: 19 },
  ],

  tweets: [
    {
      uniqueID: 1,
      drugName: "Bentracimab",
      condition: "Antidote for Ticagrelor (Brilinta)",
      review:
        "Used Bentracimab after taking Brilinta. It worked quickly and effectively. No side effects. Very satisfied. FDA approved the use.",
      rating: 9,
      date: "2023-05-15",
      usefulCount: 15,
      sentiment: "Positive",
      namedEntities: ["Bentracimab", "Brilinta", "FDA"],
    },
    {
      uniqueID: 2,
      drugName: "Bentracimab",
      condition: "Antidote for Ticagrelor (Brilinta)",
      review:
        "Had to use Bentracimab due to Brilinta side effects. Immediate relief. Grateful for this antidote. Experienced discomfort during the clinical trial phase.",
      rating: 8,
      date: "2023-06-02",
      usefulCount: 12,
      sentiment: "Positive",
      namedEntities: ["Bentracimab", "Brilinta", "Clinical Trial"],
    },
    {
      uniqueID: 3,
      drugName: "Bentracimab",
      condition: "Antidote for Ticagrelor (Brilinta)",
      review:
        "The effectiveness of Bentracimab is impressive. It resolved my Brilinta-related issues without any complications. Highly recommended. Participated in a trial at a leading research institution.",
      rating: 10,
      date: "2023-07-12",
      usefulCount: 20,
      sentiment: "Positive",
      namedEntities: ["Bentracimab", "Brilinta", "Clinical Trial"],
    },
    {
      uniqueID: 4,
      drugName: "Bentracimab",
      condition: "Antidote for Ticagrelor (Brilinta)",
      review:
        "Experienced mild discomfort after taking Brilinta, but Bentracimab quickly alleviated the symptoms. Grateful for its rapid action. Displeased with the regulatory process.",
      rating: 7,
      date: "2023-08-05",
      usefulCount: 10,
      sentiment: "Negative",
      namedEntities: ["Bentracimab", "Brilinta", "Regulatory Process"],
    },
    {
      uniqueID: 5,
      drugName: "Bentracimab",
      condition: "Antidote for Ticagrelor (Brilinta)",
      review:
        "Bentracimab is a game-changer. It neutralized the effects of Brilinta within minutes. No lingering issues. Impressed with the results. Positive experience with a clinical trial in multiple locations.",
      rating: 9,
      date: "2023-09-21",
      usefulCount: 18,
      sentiment: "Positive",
      namedEntities: ["Bentracimab", "Brilinta", "Clinical Trial"],
    },
    {
      uniqueID: 6,
      drugName: "Bentracimab",
      condition: "Antidote for Ticagrelor (Brilinta)",
      review:
        "No hesitation in recommending Bentracimab. Swift action and no adverse reactions. Satisfied with its performance. Collaborated with a renowned research organization.",
      rating: 8,
      date: "2023-10-08",
      usefulCount: 14,
      sentiment: "Positive",
      namedEntities: ["Bentracimab", "Brilinta", "Research Organization"],
    },
    {
      uniqueID: 7,
      drugName: "Bentracimab",
      condition: "Antidote for Ticagrelor (Brilinta)",
      review:
        "Bentracimab deserves praise. Rescued me from Brilinta complications. Grateful for its existence. Experienced delays in the regulatory approval process.",
      rating: 9,
      date: "2023-11-17",
      usefulCount: 16,
      sentiment: "Negative",
      namedEntities: ["Bentracimab", "Brilinta", "Regulatory Process"],
    },
    {
      uniqueID: 8,
      drugName: "Bentracimab",
      condition: "Antidote for Ticagrelor (Brilinta)",
      review:
        "Impressed with the efficacy of Bentracimab. Resolved Brilinta-related issues promptly. No complaints. Engaged in a successful clinical trial phase.",
      rating: 9,
      date: "2023-12-04",
      usefulCount: 22,
      sentiment: "Positive",
      namedEntities: ["Bentracimab", "Brilinta", "Clinical Trial"],
    },
    {
      uniqueID: 9,
      drugName: "Bentracimab",
      condition: "Antidote for Ticagrelor (Brilinta)",
      review:
        "Bentracimab delivered as promised. Quick relief from Brilinta effects. No issues during the recovery process. Encountered challenges with the regulatory body.",
      rating: 8,
      date: "2024-01-12",
      usefulCount: 19,
      sentiment: "Negative",
      namedEntities: ["Bentracimab", "Brilinta", "Regulatory Body"],
    },
  ],
});

router.get("/", function (req, res) {
  res.send("API is working properly");
});

router.get("/:drugname", function (req, res) {
  try {
    // Generate sample data for AreaChart
    const tweetsData = JSON.parse(data);
    // Send the data in JSON format
    res.json(tweetsData);
  } catch (error) {
    // Handle any errors that occur
    console.error("Error generating chart data:", error);
    res.status(500).json({ error: "Failed to generate chart data" });
  }
});

module.exports = router;
