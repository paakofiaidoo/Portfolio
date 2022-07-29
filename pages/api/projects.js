export default (req, res) => {
  res.statusCode = 200;
  res.json([
    {
      name: "nonymous-chat",
      href: "https://nonymous-chat.vercel.app/",
      description: "a chat where you can feel free to say whatever you want, no one knows it is you",
      img: { imgDesk: "./projects/nonymous-chat.jpeg", imgMob: "/projects/nonymous (2).png" },
    },
    {
      name: "juki-audio",
      href: "https://juki-audio-player.vercel.app/",
      description: "an audio player using the File System Access API",
      img: {
        imgDesk: "./projects/juki-aud.png",
        imgMob: "/projects/juki-aud-m.jpeg",
      },
    },
    {
      name: "artisanHR",
      href: "https://artsan-hr.vercel.app/",
      description: "artisan service center",
      img: { imgDesk: "./projects/artisan-hr.png", imgMob: "./projects/artsan-hr-mob.jpg" },
      scrollDesk: true,
      scrollMob: false,
    },
    {
      name: "karibe valley farms",
      href: "https://karibe-valley-farms.vercel.app",
      description: "website for karibe-valley-farms",
      img: { imgDesk: "./projects/karibe.png", imgMob: "./projects/karibe-mobi.png" },
      scrollDesk: true,
      scrollMob: false,
    },
    {
      name: "uv sterilizer",
      href: "https://www.hackster.io/paakofiaidoo17/alphene-f84a69",
      description: "This is a device that makes the most inescapable source of germs safe to use anytime, I mean door handles using uv light eliminate germs",
      img: { imgDesk: "/projects/uv.webp", imgMob: "" },
    },
    {
      name: "Special relativity calculator",
      href: "https://github.com/paakofiaidoo/Special-reletivity-app",
      description: "a calculator to for problems in special relativity built with C++",
      img: { imgDesk: "./projects/special relativity.png", imgMob: "" },
      noMobile: true,
    },
    {
      name: "codepen",
      href: "https://codepen.io/paakofiaidoo",
      description: " this contains my playground of works",
      img: { imgDesk: "./projects/codepen.jpeg", imgMob: "./projects/codepenMobi.jpeg" },
    },
  ]);
};
