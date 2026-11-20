import React from "react";
import FormRow from "../auth/FormRow";
import InputWrapper from "../auth/InputWrapper";

const BusInformationForm = ({ register, errors }) => {
  const flag = false;
  return (
    <div className="bg-surface border-2 border-border rounded-lg overflow-hidden w-full">
      <div className="flex items-center justify-center text-center bg-background">
        <h1 className="text-text-secondary font-semibold text-2xl pt-5 pb-3">
          Bus Information
        </h1>
      </div>

      <div className="flex flex-col gap-12 px-8 py-20">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <label className="text-text-secondary text-xl ml-1">
              Vehicle Identification Number
            </label>
            <p className="text-error text-xl">
              {errors?.vin?.message ? `* ${errors.vin.message}` : ""}
            </p>
          </div>
          <input
            className={`bg-surface-dark outline-none border border-border px-4 py-2 rounded-lg ${flag ? "text-text-primary" : "text-text-secondary"}`}
            placeholder="VIN Number"
            {...register("vin", {
              required: "This field is required",
              pattern: {
                value: /^[A-HJ-NPR-Z0-9]{17}$/,
                message:
                  "Invalid VIN. Must be 17 character, uppercase with no I, O, or Q.",
              },
            })}
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <label className="text-text-secondary text-xl ml-1">
              RTO Number
            </label>
            <p className="text-error text-xl">
              {errors?.rtoNumber?.message
                ? `* ${errors.rtoNumber.message}`
                : ""}
            </p>
          </div>
          <input
            type="text"
            className={`bg-surface-dark outline-none border border-border px-4 py-2 rounded-lg ${flag ? "text-text-primary" : "text-text-secondary"}`}
            placeholder="RTO Number"
            {...register("rtoNumber", {
              required: "This field is required",
              pattern: {
                value: /^[A-Z]{2}[0-9]{2}[A-Z]{1,3}[0-9]{4}$/,
                message: "Invalid RTO number.",
              },
            })}
          />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <label className="text-text-secondary text-xl ml-1">
              Manufacturer Company
            </label>
            <p className="text-error text-xl">
              {errors?.manufacturer?.message
                ? `* ${errors.manufacturer.message}`
                : ""}
            </p>
          </div>

          <input
            type="text"
            className={`bg-surface-dark outline-none border border-border px-4 py-2 rounded-lg ${flag ? "text-text-primary" : "text-text-secondary"}`}
            placeholder="Manufacturing company name"
            {...register("manufacturer", {
              required: "This field is required",
            })}
          />
        </div>

        <div className="flex items-center gap-3 mb-6 mt-4">
          <input
            type="checkbox"
            id="isActive"
            {...register("isActive", {
              required: "This field is required",
            })}
            className="w-6 h-6 cursor-pointer accent-secondary"
          />
          <label
            htmlFor="isActive"
            className="text-text-primary/80 cursor-pointer text-2xl"
          >
            Bus is currently active and ready for bookings
          </label>
        </div>

        <div className="flex flex-col gap-2 w-fit">
          <div className="flex justify-between">
            <label className="text-text-secondary text-xl ml-1">
              Bus Images
            </label>
            <p className="text-error text-xl">
              {errors?.manufacturer?.message
                ? `* ${errors.manufacturer.message}`
                : ""}
            </p>
          </div>
          <input
            type="file"
            multiple
            className={`file:bg-surface file:mr-8 border border-border bg-surface-dark outline-none file:px-4 file:py-2 w-fit rounded-lg ${flag ? "text-text-primary" : "text-text-secondary"}`}
            placeholder="Manufacturing company name"
            {...register("images", {
              required: "This field is required",
            })}
          />
        </div>
      </div>
    </div>
  );
};

export default BusInformationForm;
