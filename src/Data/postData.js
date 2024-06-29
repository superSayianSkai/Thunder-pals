import Tanjiro from "../assets/img/Tanjiro.jpg";
import Luffy from "../assets/img/luffy.jpg";
import Itachi from "../assets/img/Itachi.jpg";
// user profile image
import Itadori from "../assets/img/itadori.jpeg"
import Ataru from "../assets/img/Ataru.jpg"
import Goj from "../assets/img/Goj.jpg"

import { Profiler } from "react";
import { comment } from "postcss";


export const postData = [
  {
    img:  Tanjiro,
    name: 'Aeionie!',
    desc: "Tanjiro Kamado's unyielding determination and resilience inspire those around him as he faces overwhelming odds. His compassion and empathy, even towards his enemies, showcase his unique strength of character. As a skilled swordsman and loving brother, Tanjiro's dedication to protecting his loved ones and finding a cure for Nezuko sets him apart as the GOAT.",
    userName:'@tanjiro55',
    likes: "23k",
    comments:"13k",
    shares:"12k",
    liked: false,
    profieImage:Itadori,
  },
  {
    img: Luffy,
    name: 'Simone',
    desc: "Luffy the GOAT",
    userName:'@simeone',
    likes: "4k",
    comments:"13k",
    shares:"12k",
    liked: true,
    profieImage:Ataru,
  },
  {
    img: Itachi,
    name: 'Julie',
    desc: "TItachi finna dust them all",
    userName:'@julielove',
    likes: "4k",
    comments:"13k",
    shares:"12k",
    liked: true,
    profieImage:Goj,
  },
];
