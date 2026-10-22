import React from "react";
import { useUser } from "../auth/useUser";
import Spinner from "../../components/ui/Spinner";
import Banner from "./Banner";
import CompanyDetail from "./CompanyDetail";
import BaseFarePrice from "./BaseFarePrice";

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

        {/* Fare Factors */}
        <section className="overflow-hidden rounded-xl border border-border bg-surface">
          <h2 className="bg-background px-5 py-3 text-lg font-semibold">
            Fare Factors
          </h2>
          <div className="overflow-x-auto p-5">
            <table className="w-full min-w-150 border-collapse text-left text-sm">
              <thead>
                <tr className="bg-background text-gray-500">
                  <th className="px-4 py-3 font-medium">Feature</th>
                  <th className="px-4 py-3 font-medium">
                    Seater Charge (₹/km)
                  </th>
                  <th className="px-4 py-3 font-medium">
                    Sleeper Charge (₹/km)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border border-border">
                  <td className="px-4 py-3">AC</td>
                  <td className="border-l border-border px-4 py-3">0.05</td>
                  <td className="border-l border-border px-4 py-3">0.08</td>
                </tr>
                <tr className="border border-border">
                  <td className="px-4 py-3">Bed sheet / Pillow / Blanket</td>
                  <td className="border-l border-border px-4 py-3">0.00</td>
                  <td className="border-l border-border px-4 py-3">0.10</td>
                </tr>
                <tr className="border border-border">
                  <td className="px-4 py-3">Meals</td>
                  <td className="border-l border-border px-4 py-3">0.05</td>
                  <td className="border-l border-border px-4 py-3">0.10</td>
                </tr>
                <tr className="border border-border">
                  <td className="px-4 py-3">Video Coach</td>
                  <td className="border-l border-border px-4 py-3">0.02</td>
                  <td className="border-l border-border px-4 py-3">0.04</td>
                </tr>
                <tr className="border border-border">
                  <td className="px-4 py-3">Recliner Seat</td>
                  <td className="border-l border-border px-4 py-3">0.03</td>
                  <td className="border-l border-border px-4 py-3">0.00</td>
                </tr>
                <tr className="border border-border">
                  <td className="px-4 py-3">Wi-Fi</td>
                  <td className="border-l border-border px-4 py-3">0.02</td>
                  <td className="border-l border-border px-4 py-3">0.04</td>
                </tr>
                <tr className="border border-border">
                  <td className="px-4 py-3">Charging Points</td>
                  <td className="border-l border-border px-4 py-3">0.01</td>
                  <td className="border-l border-border px-4 py-3">0.02</td>
                </tr>
                <tr className="border border-border">
                  <td className="px-4 py-3">Live Tracking</td>
                  <td className="border-l border-border px-4 py-3">0.01</td>
                  <td className="border-l border-border px-4 py-3">0.02</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Documents & Verification */}
        <section className="overflow-hidden rounded-xl border border-border bg-surface">
          <h2 className="bg-background px-5 py-3 text-lg font-semibold">
            Documents & Verification
          </h2>
          <div className="grid grid-cols-[200px_1fr] items-center gap-y-4 p-5 text-sm">
            <span className="text-gray-500">GST Certificate</span>
            <a href="#" className="text-blue-600 hover:underline">
              View Document
            </a>

            <span className="text-gray-500">Business Registration</span>
            <a href="#" className="text-blue-600 hover:underline">
              View Document
            </a>

            <span className="text-gray-500">Verification Status</span>
            <span className="w-fit rounded-full bg-green-100 px-3 py-0.5 text-xs font-medium text-green-700">
              Verified
            </span>
          </div>
        </section>

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

        {/* About Us */}
        <section className="overflow-hidden rounded-xl border border-border bg-surface">
          <h2 className="bg-background px-5 py-3 text-lg font-semibold">
            About Us
          </h2>
          <p className="max-w-3xl p-5 text-sm leading-relaxed text-gray-600">
            ABC Travels is a trusted bus operator providing safe, comfortable
            and affordable travel services across Madhya Pradesh and
            neighbouring states. We are committed to delivering a smooth and
            pleasant journey for all our passengers.
          </p>
        </section>
      </div>
    </div>
  );
};

export default MyCompanyLayout;
