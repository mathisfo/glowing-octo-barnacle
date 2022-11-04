import { Dropdown } from "flowbite-react";
import { useState } from "react";

const AircraftSelector = () => {
  const [aircraft, setAircraft] = useState<SelectedAircraft | undefined>(
    undefined
  );

  return (
    <Dropdown label={aircraft ? aircraft : "Velg fly"}>
      <Dropdown.Item
        value={SelectedAircraft.YDM}
        onClick={() => setAircraft(SelectedAircraft.YDM)}
      >
        LN-YDM
      </Dropdown.Item>
      <Dropdown.Item onClick={() => setAircraft(SelectedAircraft.DFK)}>
        LN-DFK
      </Dropdown.Item>
      <Dropdown.Item onClick={() => setAircraft(SelectedAircraft.DFM)}>
        LN-DFM
      </Dropdown.Item>
      <Dropdown.Item onClick={() => setAircraft(SelectedAircraft.DFL)}>
        LN-DFL
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item onClick={() => setAircraft(SelectedAircraft.ANNET)}>
        Annet
      </Dropdown.Item>
    </Dropdown>
  );
};

enum SelectedAircraft {
  YDM = "LN-YDM",
  DFK = "LN-DFK",
  DFM = "LN-DFM",
  DFL = "LN-DFL",
  ANNET = "Annet",
}

export default AircraftSelector;
