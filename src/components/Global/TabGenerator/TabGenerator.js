import React, { useState } from "react";
import styled from "styled-components";
const Container = styled.div`
  @media (max-width: 800px) {
    width: 100%;
  }
`;
const Tabs = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #323c58;
  @media (max-width: 800px) {
    flex-wrap: wrap;
  }
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
  @media (max-width: 800px) {
    width: 50%;
  }
  @media (max-width: 370px) {
    width: 100%;
  }
`;

function TabGenerator({ component, component1, component2, component3 }) {
  const [tab, setTab] = useState(true);
  const [tab1, setTab1] = useState(false);
  const [tab2, setTab2] = useState(false);
  const [tab3, setTab3] = useState(false);
  const styles = {
    defaultStyle: "#3f4d70",
    activeStyle: "#5a71aa",
  };

  const switchTab = () => {
    setTab(true);
    setTab1(false);
    setTab2(false);
    setTab3(false);
  };
  const switchTab1 = () => {
    setTab(false);
    setTab1(true);
    setTab2(false);
    setTab3(false);
  };
  const switchTab2 = () => {
    setTab(false);
    setTab1(false);
    setTab2(true);
    setTab3(false);
  };
  const switchTab3 = () => {
    setTab(false);
    setTab1(false);
    setTab2(false);
    setTab3(true);
  };

  return (
    <Container>
      <Tabs>
        <Tab
          style={{ background: tab ? styles.activeStyle : styles.defaultStyle }}
          onClick={switchTab}
        >
          Doświadczenie
        </Tab>
        <Tab
          style={{
            background: tab1 ? styles.activeStyle : styles.defaultStyle,
          }}
          onClick={switchTab1}
        >
          Wykrztałcenie
        </Tab>
        <Tab
          style={{
            background: tab2 ? styles.activeStyle : styles.defaultStyle,
          }}
          onClick={switchTab2}
        >
          Kursy
        </Tab>
        <Tab
          style={{
            background: tab3 ? styles.activeStyle : styles.defaultStyle,
          }}
          onClick={switchTab3}
        >
          Dane Osobowe
        </Tab>
      </Tabs>
      <div className="tabgenrator__content">
        {tab ? <div>{component}</div> : null}
        {tab1 ? <div>{component1}</div> : null}
        {tab2 ? <div>{component2}</div> : null}
        {tab3 ? <div>{component3}</div> : null}
      </div>
    </Container>
  );
}

export default TabGenerator;
