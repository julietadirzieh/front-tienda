import { TabPanel, useTabs } from "react-headless-tabs";
import TabSelector from "../TabSelector/TabSelector";

const TabNav = ({ tabs, className }) => {
  const [selectedTab, setSelectedTab] = useTabs(
    tabs.map((eachTab) => eachTab.name)
  );
  return (
    <>
      <nav className={`${className}`}>
        {tabs.map((eachTab) => (
          <TabSelector
            key={eachTab.name}
            isActive={selectedTab === eachTab.name}
            onClick={() => setSelectedTab(eachTab.name)}
          >
            {eachTab.label}
          </TabSelector>
        ))}
        <hr className="border-black w-max" />
      </nav>

      {tabs.map((eachTab) => (
        <TabPanel key={eachTab.name} hidden={selectedTab !== eachTab.name}>
          {eachTab.component()}
        </TabPanel>
      ))}
    </>
  );
};

export default TabNav;
