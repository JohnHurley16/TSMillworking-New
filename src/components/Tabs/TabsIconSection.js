import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import dataTabs from "../../data/TabsIconSection/tabs-icon-section.json";
import Icofont from "react-icofont";
import HeadingSection from "../../components/HeadingSection/HeadingSection";

const TabsIconSection = ({ title, tagline }) => {
  return (
    <section className="mt-0 pt-0">
      <HeadingSection title={title} tagline={tagline} classAppend={"mt-0 pt-0 mb-0 pb-0"} />
      <div className="row">
        <div className="col-md-12">
          <Tabs className="icon-tabs">
            <TabList className="nav nav-tabs text-center">
              {dataTabs.map((tab) => (
                <Tab key={tab.id} role="presentation">
                  <span>
                    <Icofont icon={tab.icon} />
                    {tab.title}
                  </span>
                </Tab>
              ))}
            </TabList>
            <div className="tab-content text-center mt-30">
              {dataTabs.map((tab) => (
                <TabPanel key={tab.id} className="tab-pane fade in active">
                  <h4>{tab.subtitle1}</h4>
                  <p style={{ fontSize: 16 }}>{tab.text1}</p>
                  {" \b "}
                  {(tab.subtitle2 ? <h4>{tab.subtitle2}</h4> : "")}
                  {(tab.text2 ? <p style={{ fontSize: 16 }}>{tab.text2}</p> : "")}
                </TabPanel>
              ))}
            </div>
          </Tabs>
        </div>
      </div>
    </section >
  );
};

export default TabsIconSection;
