import React from "react";

// core components
import Banner2 from "../banner/Banner2";

// sections for this page
import BannerComponent from "./sections/bannercomponent";
import FormBannerComponent from "./sections/formbannercomponent";
import ContactComponent from "./sections/contactcomponent";

const CustomComponents = () => {
  return (
    <div>
      <Banner2 />
      <BannerComponent />
      <FormBannerComponent />
    </div>
  );
};

export default CustomComponents;
