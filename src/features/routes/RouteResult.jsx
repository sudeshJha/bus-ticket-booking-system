import React from "react";
import { useCityRoutes } from "./useCityRoutes";
import Spinner from "../../components/ui/Spinner";
import { useSearchParams } from "react-router-dom";
import { FaMapPin, FaRegClock } from "react-icons/fa";
import { GiPathDistance } from "react-icons/gi";
import { PiPathFill } from "react-icons/pi";
import { MdLocationPin } from "react-icons/md";
import RouteResultRow from "./RouteResultRow";

const RouteResult = ({ selectRoute }) => {
  const { routes, gettingCityRoute } = useCityRoutes();
  const [searchParams] = useSearchParams();

  if (gettingCityRoute) return <Spinner />;

  if (!routes) return <div>No Routes Found</div>;
  return (
    <div className="px-2 mt-16">
      <div>
        <div className="border-b border-border mb-10 flex items-center justify-between">
          <p className="text-xl text-text-primary/70 mb-2">
            from{" "}
            <span className="font-semibold text-text-primary/80">
              {searchParams.get("sourceCity")}
            </span>{" "}
            to{" "}
            <span className="font-semibold text-text-primary/80">
              {searchParams.get("destinationCity")}
            </span>
          </p>
          <p className="font-semibold text-xl text-text-primary/90 mb-2">
            {routes.length} available routes
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {routes.map((route, i) => (
            <RouteResultRow
              route={route}
              selectRoute={() => selectRoute(i)}
              key={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RouteResult;
