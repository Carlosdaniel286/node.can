import { Request, Response } from "express";
import { Pet } from "../models/pet";
import { createMenuObject } from "../helpers/creatMenu.object";
export const home = (req: Request, res: Response) => {
  const list = Pet.getAll();

  res.render("pages/page", {
    menu: createMenuObject("all"),
    banner: {
      title: "todos os animais",
      background: "allanimals.jpg",
    },
    list,
  });
};
export const dogs = (req: Request, res: Response) => {
  const list = Pet.gettFRomtype("dog");
  res.render("pages/page", {
    menu: createMenuObject("dog"),
    banner: {
      title: "cachorros",
      background: "banner_dog.jpg",
    },
    list,
  });
};
export const cat = (req: Request, res: Response) => {
  const list = Pet.gettFRomtype("cat");
  res.render("pages/page", {
    menu: createMenuObject("cat"),
    banner: {
      title: "gatos",
      background: "banner_cat.jpg",
    },
    list,
  });
};
export const fishes = (req: Request, res: Response) => {
  const list = Pet.gettFRomtype("fish");
   res.render("pages/page", {
    menu: createMenuObject("fishe"),
    banner: {
      title: "peixes",
      background: "banner_fish.jpg",
    },
    list
  });
};
