import React from "react";
import Icon from "../../util/Icon";

const AboutItem1 = ({ icon, heading, content, middleChild = false }) => {
  return (
    <div
      className={`${middleChild && "border-x border-border "} flex flex-col items-center justify-center`}
    >
      <Icon icon={icon} size="medium" color="primary" />
      <h3 className="text-primary-hover text-4xl font-bold">{heading}</h3>
      <p className="text-center text-text-secondary">{content}</p>
    </div>
  );
};

export default AboutItem1;
