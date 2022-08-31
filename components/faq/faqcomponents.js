import React from "react";
import Banner from "../banner/Banner";
// sections for this page
import Buttons from "../nonprofits/buttons";
import Labels from "../nonprofits/labels";
import PagePagination from "../nonprofits/pagination";
import Images from "../nonprofits/images";
import Breadcrumbs from "../nonprofits/breadcrumbs";
import Cards from "../nonprofits/cards";
import Dropdowns from "../nonprofits/dropdowns";
import PageForm from "../nonprofits/form";
import PageTable from "../nonprofits/table";
import Notification from "../nonprofits/notification";
import TooltipPopover from "../nonprofits/tooltip-popover";
import Typography from "../nonprofits/typography";
import JsComponents from "../nonprofits/js-components";
import CallToAction from "../call-to-action/CallToAction";
import NonprofitBannerComponent from "../custom/sections/nonprofitbannercomponent";
import FaqContent from "./faqcontent"

const FaqComponents = () => {
  return (
    <div>
        <CallToAction />
        <FaqContent />
    </div>
  );
};

export default FaqComponents;
