# ClinicalSentix - Unlocking Social Media Insights for Clinical Trial Brands

## Overview

ClinicalSentix is a revolutionary project designed to empower pharma departments and marketing teams in the clinical trial space. The platform harnesses the power of social media, particularly Twitter, to provide valuable insights and sentiment analysis on thousands of reviews related to clinical trials. With a robust preprototype application, ClinicalSentix delivers charts and summaries, making it an essential tool for decision-makers aiming to understand public sentiments around their clinical trial brands.

## Key Features

- **Social Media Insights**: Extracts and analyzes Twitter reviews related to clinical trials.
- **Data Visualization**: Generates charts for easy interpretation of trends and sentiment analysis.
- **Search Queries**: Allows users to input specific search queries to focus on particular aspects of clinical trials.
- **Machine Learning Integration**: Future plans include embedding machine learning and natural language models for more advanced analytics.
- **User-Friendly Interface**: Simple and intuitive interface for efficient navigation and utilization.

## Tech Stack

- **Client**: React.js
- **Server**: Express.js, Node.js
- **Database**: Not applicable (current version focuses on API calls)
- **Additional Technologies**: npm, Chart.js

## Project Structure

```plaintext
clinicalsentix/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ArChart.js
│   │   │   ├── BarchartComp.js
│   │   │   ├── Charts.js
│   │   │   ├── DefCard.js
│   │   │   ├── FetchError.js
│   │   │   ├── Header.js
│   │   │   ├── Home.js
│   │   │   └── ...
│   │   ├── App.js
│   │   ├── index.js
│   │   └── ...
│   ├── public/
│   ├── .gitignore
├── package-lock.json
└── README.md
│
├── api/
│   ├── routes/
│   │   ├── index.js
│   │   └── ...
│   ├── views/
│   │   └── ...
│   ├── app.js
│   ├── package.json
│   └── ...
│
├── .gitignore
├── package-lock.json
└── README.md
```

## Setup Instructions

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/clinicalsentix.git
   cd clinicalsentix
   ```

2. **Install Dependencies:**
   - For Client:
     ```bash
     cd client
     npm install
     ```

   - For API:
     ```bash
     cd api
     npm install
     ```

3. **Environment Variables:**
   - Create a `.env` file in the `api` directory for future configurations.

4. **Run the Application:**
   - For Client:
     ```bash
     cd client
     npm start
     ```

   - For API:
     ```bash
     cd api
     npm start
     ```

5. **Open in Browser:**
   - Open your browser and navigate to `http://localhost:3000` to access the ClinicalSentix application.

## Future Enhancements

ClinicalSentix is committed to continuous improvement. Future enhancements include:

- Embedding machine learning and natural language models for advanced analytics.
- Fine-tuning pretrained models for more accurate sentiment analysis.
- Adding features to enable deeper insights into clinical trial discussions on social media.


Contributions to ClinicalSentix are encouraged! Feel free to open issues, submit pull requests, or share your ideas to make this tool even more impactful.

Transform social media chatter into actionable insights with ClinicalSentix! 🚀💊
