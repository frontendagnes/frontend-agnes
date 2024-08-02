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
  gap: 10px;
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
  border-radius: 10px;
  &:hover {
    background: #5a71aa !important;
  }
  @media (max-width: 800px) {
    width: 80%;
  }
  @media (max-width: 370px) {
    width: 100%;
  }
`;

function TabGenerator({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  const styles = {
    defaultStyle: "#3f4d70",
    activeStyle: "#5a71aa",
  };

  return (
    <Container>
      <Tabs>
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            style={{
              background:
                activeTab === index ? styles.activeStyle : styles.defaultStyle,
            }}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </Tab>
        ))}
      </Tabs>
      <div className="tabgenrator__content">{tabs[activeTab].component}</div>
    </Container>
  );
}

export default TabGenerator;
