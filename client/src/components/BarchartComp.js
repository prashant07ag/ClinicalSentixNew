import { BarChart, Card, Subtitle, Title } from "@tremor/react";

const chartdata = [
  {
    name: "Amphibians",
    "Number of threatened species": 2488,
  },
  {
    name: "Birds",
    "Number of threatened species": 1445,
  },
  {
    name: "Crustaceans",
    "Number of threatened species": 743,
  },
  {
    name: "Ferns",
    "Number of threatened species": 281,
  },
  {
    name: "Arachnids",
    "Number of threatened species": 251,
  },
  {
    name: "Corals",
    "Number of threatened species": 232,
  },
  {
    name: "Algae",
    "Number of threatened species": 98,
  },
];

// const valueFormatter = (number) =>
//   `$ ${new Intl.NumberFormat("us").format(number).toString()}`;

const BarchartComp = ({ namedData }) => {
    
    return (
        <Card>
            <Title>Popular terms in Tweets</Title>
            <Subtitle>
                These give a count of terms that are used in the description of the drug in various tweets
            </Subtitle>
            <BarChart
                className="mt-6"
                data={namedData}
                index="name"
                categories={["count"]}
                colors={["blue"]}
                // valueFormatter={valueFormatter}
                yAxisWidth={48}
            />
        </Card>
    );
};

export default BarchartComp;
