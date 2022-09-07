import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import S from "./Styles/Menu.module.css";
import Menu from "./Menu.js";
import {
  AlcoholicMenu,
  NONAlcoholicMenu,
  VegetrianStarterMenu,
  VegeterianMainMenu,
  NONVegetrianStarterMenu,
  NONVegeterianMainMenu,
} from "../Data/MenuData.js";
import Error from "../404Page/Error";

const MenuHandler = () => {
  const location = useLocation();

  useEffect(() => {
    if (
      location.pathname === "/menu/drinks/alcoholic/" ||
      location.pathname === "/menu/drinks/non-alcoholic/" ||
      location.pathname === "/menu/etables/veg/starters/" ||
      location.pathname === "/menu/etables/veg/main-course/" ||
      location.pathname === "/menu/etables/non-veg/starters/" ||
      location.pathname === "/menu/etables/non-veg/main-course/"
    ) {
      document
        .querySelector(`.${S.menuHeadContainer} h1`)
        .classList.add(`${S.fadeIn}`);
    } else {
      return;
    }
  }, [location.pathname]);

  if (location.pathname === "/menu/drinks/alcoholic/") {
    return <Menu Menu={AlcoholicMenu} />;
  } else if (location.pathname === "/menu/drinks/non-alcoholic/") {
    return <Menu Menu={NONAlcoholicMenu} />;
  } else if (location.pathname === "/menu/etables/veg/starters/") {
    return <Menu Menu={VegetrianStarterMenu} />;
  } else if (location.pathname === "/menu/etables/veg/main-course/") {
    return <Menu Menu={VegeterianMainMenu} />;
  } else if (location.pathname === "/menu/etables/non-veg/starters/") {
    return <Menu Menu={NONVegetrianStarterMenu} />;
  } else if (location.pathname === "/menu/etables/non-veg/main-course/") {
    return <Menu Menu={NONVegeterianMainMenu} />;
  } else {
    return null;
  }
};

export default MenuHandler;
