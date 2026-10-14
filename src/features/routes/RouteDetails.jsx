import React from "react";
import { FiArrowLeft, FiFileText, FiGitBranch, FiMapPin } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Button from "../../components/util/Button";
import Icon from "../../components/util/Icon";
import RouteDetailsTable from "./RouteDetailsTable";
import BackButton from "../../components/util/BackButton";
import RouteDetailsSummary from "./RouteDetailsSummary";

const RouteDetails = ({ route, backToResult }) => {
  const { routeCities, title } = route;

  return (
    <div className="min-h-screen w-full p-6 md:p-7">
      <div className="flex gap-20 mb-14">
        <BackButton customFunction={backToResult} />

        <h1 className="text-5xl text-primary font-bold tracking-wide text-center">
          {title}
        </h1>
      </div>

      <div className="w-full grid grid-cols-[2fr_1fr] items-start gap-6">
        <RouteDetailsTable routeCities={routeCities} />

        <div className="flex flex-col gap-6">
          <RouteDetailsSummary route={route} />
          <Button
            onClick={backToResult}
            custom="flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-surface px-4 py-3 text-sm font-medium text-text-secondary transition hover:bg-surface-dark"
          >
            <FiArrowLeft size={16} />
            Back to Routes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RouteDetails;
