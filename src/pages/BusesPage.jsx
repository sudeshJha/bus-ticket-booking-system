import React from "react";
import Button from "../components/util/Button";
import { useNavigate } from "react-router-dom";

const BusesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <div className="mb-12 mt-4 flex items-center justify-between mx-2">
        <div>
          <h1 className="text-4xl font-bold text-text-primary">Buses</h1>

          <p className="text-lg text-text-secondary">Manage your buses</p>
        </div>
        <Button
          size="small"
          type="secondary"
          onClick={() => navigate("/add_bus")}
        >
          Add Bus +
        </Button>
      </div>
      {/* BUSES TABLE */}
    </div>
  );
};

export default BusesPage;
