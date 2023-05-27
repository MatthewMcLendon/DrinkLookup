import {
  drinkInitialList,
  drinkEventHandler,
} from "./drinks/drinkEventHandler.js";
import { drinkSearch } from "./navigation/search.js";
import { navBar } from "./navigation/navbar.js";

navBar();
drinkInitialList();
drinkSearch();
drinkEventHandler();
