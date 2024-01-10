import React from "react";
import { BarChart, DonutChart, Card, Title } from "@tremor/react";

const Charts = ({ topLanguages, mostStarred, starsPerLanguageArray }) => {
  return (
    <div className="card__container">
      <Card>
        <Title>Top Languages</Title>
        <DonutChart
          data={topLanguages}
          category="count"
          variant="pie"
          dataKey="lang"
          marginTop="mt-6"
          colors={["yellow", "blue", "red", "blue"]}
        />
      </Card>
      <Card>
        <Title>Most Starred</Title>
        <BarChart
          data={mostStarred}
          dataKey="name"
          categories={["stars"]}
          colors={["blue"]}
          marginTop="mt-6"
          yAxisWidth="w-6"
        />
      </Card>
      <Card>
        <Title>Stars per Language</Title>
        <DonutChart
          data={starsPerLanguageArray}
          category="stars"
          dataKey="lang"
          marginTop="mt-6"
          colors={["yellow", "blue", "red", "blue"]}
        />
      </Card>
    </div>
  );
};

export default Charts;
