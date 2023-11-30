import UserFemale from "../assets/images/User-Female.png";
import UserMale2 from "../assets/images/User-Male-2.png";
import UserMale from "../assets/images/User-Male.png";

export type ContactsType = (typeof CONTACTS)[number];

export const CONTACTS = [
  {
    image: UserFemale,
    name: "Hailey Sanders",
  },
  {
    image: UserMale,
    name: "Zayn Michel",
  },
  {
    image: UserMale2,
    name: "Thomas Denver",
  },
];
