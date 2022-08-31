import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import S from "./Styles/Menu.module.css";
import img1 from "../../images/Menu/Cover Page.jpg";
import img2 from "../../images/Menu/Menu G....jpg";
import Menu from "./Menu.js";
import {
  AlcoholicMenu,
  NONAlcoholicMenu,
  VegetrianStarterMenu,
  VegeterianMainMenu,
  NONVegetrianStarterMenu,
  NONVegeterianMainMenu,
} from "../Data/MenuData.js";

const MenuHandler = () => {
  const location = useLocation();

  useEffect(() => {
    if (
      location.pathname === "/menu/drinks/alcoholic" ||
      location.pathname === "/menu/drinks/non_alcoholic" ||
      location.pathname === "/menu/etables/veg/starters" ||
      location.pathname === "/menu/etables/veg/main_course" ||
      location.pathname === "/menu/etables/non_veg/starters" ||
      location.pathname === "/menu/etables/non_veg/main_course"
    ) {
      document
        .querySelector(`.${S.menuHeadContainer} h1`)
        .classList.add(`${S.fadeIn}`);
    } else {
      return;
    }
  }, []);

  if (location.pathname === "/menu/drinks/alcoholic") {
    return <Menu Menu={AlcoholicMenu} />;
  } else if (location.pathname === "/menu/drinks/non_alcoholic") {
    return <Menu Menu={NONAlcoholicMenu} />;
  } else if (location.pathname === "/menu/etables/veg/starters") {
    return <Menu Menu={VegetrianStarterMenu} />;
  } else if (location.pathname === "/menu/etables/veg/main_course") {
    return <Menu Menu={VegeterianMainMenu} />;
  } else if (location.pathname === "/menu/etables/non_veg/starters") {
    return <Menu Menu={NONVegetrianStarterMenu} />;
  } else if (location.pathname === "/menu/etables/non_veg/main_course") {
    return <Menu Menu={NONVegeterianMainMenu} />;
  } else {
    return <h1>404 NOT FOUND</h1>;
  }
};

export default MenuHandler;
