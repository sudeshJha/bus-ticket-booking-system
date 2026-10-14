import React from "react";
import { FiArrowLeft, FiFileText, FiGitBranch, FiMapPin } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Button from "../../components/util/Button";
import Icon from "../../components/util/Icon";
import RouteDetailsTable from "./RouteDetailsTable";

const RouteDetails = ({ route }) => {
  const { routeCities, title } = route;

  return (
    <div className="min-h-screen bg-background p-5 text-slate-900 md:p-7">
      {/* Back Navigation */}
      <Button
        onClick={() => navigate("/routes")}
        custom="mb-6 flex items-center gap-2 text-sm font-medium text-primary"
      >
        <FiArrowLeft size={18} />
        Back to Routes
      </Button>

      <div className="grid grid-cols-1 items-start gap-5">
        <RouteDetailsTable routeCities={routeCities} />

        <div>
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="mb-5 flex items-center gap-3 text-base font-semibold">
              <FiFileText className="text-primary" size={19} />
              Route Information
            </h2>

            <div className="divide-y divide-slate-100">
              <div className="grid grid-cols-2 gap-3 py-4 text-sm">
                <span className="text-slate-600">Route Name</span>
                <span className="font-medium">Jabalpur - Indore</span>
              </div>

              <div className="grid grid-cols-2 gap-3 py-4 text-sm">
                <span className="text-slate-600">Route Type</span>
                <span className="font-medium">One Way</span>
              </div>

              <div className="grid grid-cols-2 gap-3 py-4 text-sm">
                <span className="text-slate-600">Created On</span>
                <span className="font-medium">12 Sep 2025</span>
              </div>

              <div className="grid grid-cols-2 items-center gap-3 py-4 text-sm">
                <span className="text-slate-600">Status</span>
                <div>
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
                    Active
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Notes / Description */}

          {/* Back Button */}
          <button
            onClick={() => navigate("/routes")}
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
          >
            <FiArrowLeft size={16} />
            Back to Routes
          </button>
        </div>
      </div>
    </div>
  );
};

export default RouteDetails;
