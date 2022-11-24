import { useEffect } from "react";
import { Location, useLocation } from "react-router-dom";

const useLocationListen = (listener: (location: Location) => void) => {
  let location = useLocation();
  useEffect(() => {
    listener(location);
  }, [location]);
};


export {
  useLocationListen
}