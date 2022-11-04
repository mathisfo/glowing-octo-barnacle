import { Table } from "flowbite-react";
import React from "react";
import { trpc } from "../utils/trpc";
import Skeleton from "./Skeleton";

const FuelTable = () => {
  const { data: entries, isLoading } = trpc.refuelEntries.getAll.useQuery();

  if (isLoading) {
    return <Skeleton />;
  }

  return (
    <Table>
      <Table.Head>
        <Table.HeadCell>Fly</Table.HeadCell>
        <Table.HeadCell>Type drivstoff</Table.HeadCell>
        <Table.HeadCell>Antall liter</Table.HeadCell>
        <Table.HeadCell>Ny måler stand</Table.HeadCell>
        <Table.HeadCell>Navn</Table.HeadCell>
        <Table.HeadCell>
          <span className="sr-only">Edit</span>
        </Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        {entries
          ?.map((entry, index) => (
            <Table.Row
              key={index}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {entry.aircraft}
              </Table.Cell>
              <Table.Cell>UL91</Table.Cell>
              <Table.Cell>{}</Table.Cell>
              <Table.Cell>{entry.pumpValue}</Table.Cell>
              <Table.Cell>{entry.name}</Table.Cell>
              {index == entries.length - 1 && (
                <Table.Cell>
                  <a
                    href="/tables"
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Rediger
                  </a>
                </Table.Cell>
              )}
            </Table.Row>
          ))
          .reverse()}
      </Table.Body>
      ;
    </Table>
  );
};

export default FuelTable;
