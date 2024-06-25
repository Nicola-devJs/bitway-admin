import { Archive, Publish, Domain } from "@mui/icons-material";

export enum NAVMENU {
  PROPERTIES = "/",
  PUBLIC = "public/",
  EDIT = "edit/",
  MODERATION = "moderation",
  ARCHIVE = "archive/",
  PROPERTY = "property/",
}

export const navMenu = [
  { title: "Мои объекты", path: NAVMENU.PROPERTIES, icon: <Domain /> },
  { title: "Опубликовать", path: NAVMENU.PUBLIC, icon: <Publish /> },
  { title: "Архив", path: NAVMENU.ARCHIVE, icon: <Archive /> },
];
