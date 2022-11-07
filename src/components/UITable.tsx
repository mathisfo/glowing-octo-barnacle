import { trpc } from "../utils/trpc";
import Skeleton from "./Skeleton";

const UITable = () => {
  const { data: entries, isLoading } = trpc.refuelEntries.getAll.useQuery();

  if (isLoading) {
    return <Skeleton />;
  }
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="-mx-4 mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg">
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
              >
                Dato
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
              >
                Navn
              </th>
              <th
                scope="col"
                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
              >
                Fly
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
              >
                Type Drivstoff
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
              >
                Antall Liter
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Ny målerstand
              </th>
              <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {entries
              ?.map((entry, index) => (
                <tr key={entry.id}>
                  <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-6">
                    {entry.createdAt.getDay() +
                      "/" +
                      entry.createdAt.getMonth()}
                    <dl className="font-normal lg:hidden">
                      <dd className="mt-1 truncate text-gray-700">
                        UL91 - 28 liter
                      </dd>
                      <dd className="mt-1 truncate text-gray-700">
                        {entry.name}
                      </dd>

                      <dd className="mt-1 truncate text-gray-700 sm:hidden">
                        {entry.aircraft}
                      </dd>
                    </dl>
                  </td>
                  <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">
                    {entry.name}
                  </td>
                  <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">
                    {entry.aircraft}
                  </td>
                  <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">
                    UL91
                  </td>
                  <td className="px-3 py-4 text-sm font-bold text-gray-500">
                    {entry.pumpValue}
                  </td>
                  <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">
                    28 liter
                  </td>
                  {index == entries.length - 1 && (
                    <td className="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Rediger
                      </a>
                    </td>
                  )}
                </tr>
              ))
              .reverse()}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UITable;
