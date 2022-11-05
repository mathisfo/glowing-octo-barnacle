import type { RefuelEntry } from "@prisma/client";
import {
  Alert,
  Button,
  Label,
  Select,
  Spinner,
  TextInput,
} from "flowbite-react";
import { useRouter } from "next/router";
import { useState } from "react";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { trpc } from "../utils/trpc";
import ErrorIcon from "./Error";

const RegisterFuel = () => {
  const { register, handleSubmit } = useForm<RefuelEntry>();
  const [aircraft, setAircraft] = useState<string>();

  const mutation = trpc.refuelEntries.submit.useMutation();
  const onSubmit: SubmitHandler<RefuelEntry> = (data) => {
    mutation.mutate(data, {
      onSuccess: () => {
        router.push("/log");
      },
    });
  };
  const router = useRouter();

  return (
    <>
      {mutation.isError && (
        <Alert color="failure" icon={ErrorIcon}>
          <span>
            <span className="font-medium">En feil oppsto!</span> Kontroller
            skjema og prøv en gang til.
          </span>
        </Alert>
      )}
      {aircraft == "Annet" && (
        <Alert color="warning" icon={ErrorIcon}>
          <span>
            <span className="font-medium">Bemerk!</span> Du har ikke spesifisert
            en av klubbens fly. Tanking skjer etter avtale.
          </span>
        </Alert>
      )}
      <form className="m-3 flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div id="select">
            <div className="mb-2 block">
              <Label htmlFor="aircrafts" value="Velg fly du har tanket" />
            </div>
            <Select
              {...register("aircraft")}
              onChange={(event) => setAircraft(event.target.value)}
              required={true}
            >
              <option>LN-YDM</option>
              <option>LN-DFK</option>
              <option>LN-DFM</option>
              <option>LN-DFL</option>
              <option>Annet</option>
            </Select>
          </div>
        </div>
        <div>
          <div className="mb-2 block">
            <Label value="Ny målerstand i hele liter" />
          </div>
          <TextInput type="number" {...register("pumpValue")} required={true} />
        </div>
        <div>
          <div className="mb-2 block">
            <Label value="Ditt navn" />
          </div>
          <TextInput type="text" {...register("name")} required={true} />
        </div>
        <Button type="submit">
          {mutation.isLoading ? <Spinner /> : "Registrer"}
        </Button>
      </form>
    </>
  );
};

export default RegisterFuel;
