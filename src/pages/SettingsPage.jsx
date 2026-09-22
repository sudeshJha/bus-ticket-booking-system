import React from "react";
import PassengerSettingsLayout from "../components/ui/settings/passenger-settings/PassengerSettingsLayout";
import OperatorSettingsLayout from "../components/ui/settings/operator-settings/OperatorSettingsLayout";

const SettingsPage = () => {
  const user = { userType: "operator" };
  return (
    <div>
      {user.userType === "passenger" && <PassengerSettingsLayout />}
      {user.userType === "operator" && <OperatorSettingsLayout />}
    </div>
  );
};

export default SettingsPage;
