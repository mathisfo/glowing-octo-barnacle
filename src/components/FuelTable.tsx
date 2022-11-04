import { Table } from "flowbite-react";

const FuelTable = () => {
  return (
    <Table>
      <Table.Head>
        <Table.HeadCell>Fly</Table.HeadCell>
        <Table.HeadCell>Type drivstoff</Table.HeadCell>
        <Table.HeadCell>Antall liter</Table.HeadCell>
        <Table.HeadCell>Ny måler stand</Table.HeadCell>
        <Table.HeadCell>
          <span className="sr-only">Edit</span>
        </Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            LN-YDM
          </Table.Cell>
          <Table.Cell>UL91</Table.Cell>
          <Table.Cell>45</Table.Cell>
          <Table.Cell>847194</Table.Cell>
          <Table.Cell>
            <a
              href="/tables"
              className="font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              Edit
            </a>
          </Table.Cell>
        </Table.Row>
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            LN-DFK
          </Table.Cell>
          <Table.Cell>UL91</Table.Cell>
          <Table.Cell>23</Table.Cell>
          <Table.Cell>23235235</Table.Cell>
          <Table.Cell>
            <a
              href="/tables"
              className="font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              Edit
            </a>
          </Table.Cell>
        </Table.Row>
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            LN-DFM
          </Table.Cell>
          <Table.Cell>UL91</Table.Cell>
          <Table.Cell>12</Table.Cell>
          <Table.Cell>23592359</Table.Cell>
          <Table.Cell>
            <a
              href="/tables"
              className="font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              Edit
            </a>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
};

export default FuelTable;
