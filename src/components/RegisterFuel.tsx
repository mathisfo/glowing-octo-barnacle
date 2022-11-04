import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { trpc } from "../utils/trpc";
import AircraftSelector from "./AircraftSelector";

const RegisterFuel = () => {
  const refuel = {
    aircraft: "YDM",
    pumpValue: 12,
    name: "Mathias",
  };

  const mutation = trpc.register.submit.useMutation();

  return (
    <>
      <form className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label value="Fly du har fylt" />
          </div>
          <AircraftSelector />
        </div>
        <div>
          <div className="mb-2 block">
            <Label value="Ny måler stand i hele liter" />
          </div>
          <TextInput id="fuelValue" required={true} />
        </div>
        <div>
          <div className="mb-2 block">
            <Label value="Ditt navn" />
          </div>
          <TextInput id="name" required={true} />
        </div>
        <Button type="submit">Registrer</Button>
      </form>
      <Button onClick={() => mutation.mutate(refuel)}>Test</Button>
    </>
  );
};

export default RegisterFuel;
