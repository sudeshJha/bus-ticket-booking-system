import React from "react";
import { useUser } from "../auth/useUser";
import Spinner from "../../components/ui/Spinner";
import Banner from "./Banner";
import CompanyDetail from "./CompanyDetail";
import BaseFarePrice from "./BaseFarePrice";
import OperatorFareFactor from "./OperatorFareFactor";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const MyCompanyLayout = () => {
  const { user, gettingUser } = useUser();

  if (gettingUser) return <Spinner />;

  console.log(user.bannerUrl);

  return (
    <div className="w-full p-6 md:p-8 bg-background">
      <Banner />

      <div className="flex flex-col gap-12 mt-10">
        <CompanyDetail />

        <BaseFarePrice />

        <OperatorFareFactor />

        {/* Business Statistics */}
        <section className="overflow-hidden rounded-xl border border-border bg-surface">
          <h2 className="bg-background px-5 py-3 text-lg font-semibold">
            Business Statistics
          </h2>
          <div className="grid grid-cols-1 divide-y divide-border p-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            <div className="py-3 sm:pr-6">
              <p className="text-sm text-gray-500">Total Buses</p>
              <p className="mt-2 text-3xl font-bold">6</p>
            </div>
            <div className="py-3 sm:px-6">
              <p className="text-sm text-gray-500">Total Routes</p>
              <p className="mt-2 text-3xl font-bold">4</p>
            </div>
            <div className="py-3 sm:pl-6">
              <p className="text-sm text-gray-500">Total Staff</p>
              <p className="mt-2 text-3xl font-bold">12</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MyCompanyLayout;
