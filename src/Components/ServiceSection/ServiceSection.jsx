import React, { useState } from "react";
import TitleSection from "../TitleSection/TitleSection";
import "./ServiceSection.css";
import ServiceBox from "../ServiceBox/ServiceBox";
import { serviceData } from "../../data";

export default function Services() {
  const [services] = useState(serviceData);

  return (
    <div className="services">
      <div className="container">
        <TitleSection text="My" coloredText="Services" />
        <div className="wrapper row">
          {services.map((item) => (
            <ServiceBox key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
