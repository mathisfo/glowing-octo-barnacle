import { useRouter } from "next/router";
import type { RefuelEntry } from "@prisma/client";
import { useState } from "react";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { trpc } from "../utils/trpc";
import Warning from "./alerts/Warning";
import { Spinner } from "flowbite-react";

const UIRegisterFuel = () => {
  const { register, handleSubmit } = useForm<RefuelEntry>();
  const [aircraft, setAircraft] = useState<string>();

  const mutation = trpc.refuelEntries.submit.useMutation();
  const onSubmit: SubmitHandler<RefuelEntry> = (data) => {
    mutation.mutate(data, {
      onSuccess: () => {
        router.push("/");
      },
    });
  };
  const router = useRouter();
  return (
    <>
      {mutation.isError && (
        <Warning
          title="Ops!"
          alertText="En feil oppsto! Kontroller
        skjema og prøv en gang til."
        />
      )}
      {aircraft == "Annet" && (
        <Warning
          title="Advarsel"
          alertText="Bemerk! Du har ikke spesifisert
          en av klubbens fly. Tanking skjer etter avtale."
        />
      )}
      <form
        className="m-3 space-y-8 divide-y divide-gray-200"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
          <div className="space-y-6 sm:space-y-5">
            <div>
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Registrer
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Register en ny fylling. Vær nøye med innfylling av data. Du kan
                kun redigere i etterkant dersom ingen andre har fylt etter deg.
              </p>
            </div>
          </div>

          <div className="space-y-6 pt-8 sm:space-y-5 sm:pt-10">
            <div className="space-y-6 sm:space-y-5">
              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Velg fly du har tanket
                </label>
                <div className="mt-1 sm:col-span-2 sm:mt-0">
                  <select
                    id="aircraft"
                    autoComplete="country-name"
                    {...register("aircraft")}
                    onChange={(event) => setAircraft(event.target.value)}
                    className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                  >
                    <option>LN-YDM</option>
                    <option>LN-DFK</option>
                    <option>LN-DFM</option>
                    <option>Annet</option>
                  </select>
                </div>
              </div>
              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="gauge"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Ny målerstand i liter
                </label>
                <div className="mt-1 sm:col-span-2 sm:mt-0">
                  <input
                    type="text"
                    inputMode="numeric"
                    pattern="\d*"
                    id="pumpValue"
                    {...register("pumpValue")}
                    className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                  />
                </div>
              </div>
              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Ditt Fornavn
                </label>
                <div className="mt-1 sm:col-span-2 sm:mt-0">
                  <input
                    type="text"
                    id="name"
                    {...register("name")}
                    className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-5">
          <div className="flex w-full justify-center">
            <button
              type="submit"
              className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              {mutation.isLoading ? <Spinner /> : "Registrer"}
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default UIRegisterFuel;
