import React from "react";
import Icon from "../../util/Icon";

const ChooseItem = ({ icon, lastChild = false, heading, content }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center ${!lastChild && "border-r border-r-border"} gap-5`}
    >
      <Icon
        icon={icon}
        size="medium"
        color="primary-anti"
        bgColor="bg-primary"
      />
      <h3 className="text-text-primary font-bold">{heading}</h3>
      <p className="text-text-secondary text-center">{content}</p>
    </div>
  );
};

export default ChooseItem;
