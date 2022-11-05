import { Table } from "flowbite-react";

const PumpAnalytics = () => {
  const date = new Date();
  const time = date.getDate().toString() + "/" + date.getMonth().toString();
  const hist = [
    { refilledAt: time, amountRefield: 4000 },
    { refilledAt: time, amountRefield: 4000 },
    { refilledAt: time, amountRefield: 4000 },
    { refilledAt: time, amountRefield: 4000 },
  ];
  return (
    <div>
      <Table>
        <Table.Head>
          <Table.HeadCell>Forrige fylling</Table.HeadCell>
          <Table.HeadCell>Antall litre fylt</Table.HeadCell>
          <Table.HeadCell>Estimert gjenværende liter </Table.HeadCell>
        </Table.Head>
        <Table.Body>
          {hist.map((hist, index) => (
            <Table.Row
              key={index}
              className={`${index==0 ? "bg-green-200 rounded-xl" : ""}`}
            >
              <Table.Cell>{hist.refilledAt.toString()}</Table.Cell>
              <Table.Cell>{hist.amountRefield}</Table.Cell>
              <Table.Cell>1 239</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default PumpAnalytics;
