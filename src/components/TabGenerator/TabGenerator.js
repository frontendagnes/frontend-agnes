import React, { useState } from "react";
import styled from "styled-components";

const Tabs = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #323c58;
`;
const Tab = styled.div`
  text-align: center;
  font-weight: 600;
  font-size: 1.2rem;
  letter-spacing: 2px;
  color: #ffffff;
  padding: 20px 30px;
  cursor: pointer;
  width: 33%;
  transition: background 0.75s ease-in;
  &:hover {
    background: #5a71aa !important;
  }
`;

function TabGenerator({ component, component1, component2 }) {
  const [tab, setTab] = useState(true);
  const [tab1, setTab1] = useState(false);
  const [tab2, setTab2] = useState(false);

  const styles = {
    defaultStyle: "#3f4d70",
    activeStyle: "#5a71aa",
  };

  const switchTab = () => {
    setTab(true);
    setTab1(false);
    setTab2(false);
  };
  const switchTab1 = () => {
    setTab(false);
    setTab1(true);
    setTab2(false);
  };
  const switchTab2 = () => {
    setTab(false);
    setTab1(false);
    setTab2(true);
  };

  return (
    <div className="tabgenerator">
      <Tabs>
        <Tab
          style={{ background: tab ? styles.activeStyle : styles.defaultStyle }}
          onClick={switchTab}
        >
          Doświadczenie
        </Tab>
        <Tab
          style={{
            background: tab1 ? styles.activeStyle : styles.defaultStyle
          }}
          onClick={switchTab1}
        >
          Wykrztałcenie
        </Tab>
        <Tab
          style={{
            background: tab2 ? styles.activeStyle : styles.defaultStyle
          }}
          onClick={switchTab2}
        >
          Kursy
        </Tab>
      </Tabs>
      <div className="tabgenrator__content">
        {tab ? <div>{component}</div> : null}
        {tab1 ? <div>{component1}</div> : null}
        {tab2 ? <div>{component2}</div> : null}
      </div>
    </div>
  );
}

export default TabGenerator;
