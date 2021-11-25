import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Volcano from "./Volcano";
import { cacheContainsCharacteristic } from "../../services/BleCharacteristicCache";
import { heatOffUuid } from "../../constants/uuids";
export default function VolcanoLoader() {
  const navigate = useNavigate();
  useEffect(() => {
    const characteristic = cacheContainsCharacteristic(heatOffUuid);
    if (!characteristic) {
      navigate("/");
    }
  });

  return cacheContainsCharacteristic(heatOffUuid) ? (
    <Volcano />
  ) : (
    <div>Loading...</div>
  );
}
