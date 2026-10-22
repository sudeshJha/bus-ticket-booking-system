import React from "react";
import { useUser } from "../auth/useUser";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const CompanyDetail = () => {
  const {
    user: { address, licenseUrl, userInfo },
  } = useUser();

  return (
    <section className="overflow-hidden rounded-xl border border-border bg-surface">
      <h2 className="bg-background px-5 py-4 text-2xl font-semibold text-text-primary/90 text-center">
        Company Details
      </h2>
      <div className="grid grid-cols-[0.5fr_2fr] gap-y-6 p-5 text-2xl pl-8">
        <span className="text-text-secondary">Company Name</span>
        <span className="text-text-primary">{userInfo.name}</span>

        <span className="text-text-secondary">Email</span>
        <span className="text-text-primary">{userInfo.email}</span>

        <span className="text-text-secondary">Phone</span>
        <span className="text-text-primary">{userInfo.phone}</span>

        <span className="text-text-secondary">Address</span>
        <span className="text-text-primary">{address}</span>

        <span className="text-text-secondary">License</span>
        <span className="text-text-primary">
          <a
            href={`${API_BASE_URL}/${licenseUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary px-3 py-2 rounded-lg text-background"
          >
            Download License
          </a>
        </span>
      </div>
    </section>
  );
};

export default CompanyDetail;
