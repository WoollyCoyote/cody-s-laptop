"use client";
import Inventory from "./Inventory";
import Fight from "./fight/fight";
import Story from "./Story";
// import Login from "./Login";
import Store from "./Store";
import LvlAndName from "./lvlAndName";
import Options from "./Options";

const Title = () => {
  return (
    <div >
      <LvlAndName/>
  <Options />
      <Story />
      <Fight />
      <Store />
      <Inventory />
    </div>
  );
};

export default Title;
