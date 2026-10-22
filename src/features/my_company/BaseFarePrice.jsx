import React from "react";
import { useUser } from "../auth/useUser";

const BaseFarePrice = () => {
  const {
    user: { seaterBasePrice, sleeperBasePrice },
  } = useUser();

  return (
    <section className="overflow-hidden rounded-xl border border-border bg-surface">
      <h2 className="bg-surface-dark py-4 text-2xl text-text-primary/90 text-center font-semibold">
        Base Fare Pricing
      </h2>
      <div className="p-5 text-2xl">
        <div className="grid grid-cols-[300px_1fr] border-b border-border py-3">
          <span className="text-text-secondary">
            Seater Fare (per person per km)
          </span>
          <span className="text-text-primary">₹ {seaterBasePrice}</span>
        </div>
        <div className="grid grid-cols-[300px_1fr] py-3">
          <span className="text-text-secondary">
            Sleeper Fare (per person per km)
          </span>
          <span className="text-text-primary">₹ {sleeperBasePrice}</span>
        </div>
      </div>
    </section>
  );
};

export default BaseFarePrice;
