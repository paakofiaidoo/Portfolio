export default ( req, res ) => {
  res.statusCode = 200;
  res.json( [
    {
      name: "Fittaa",
      href: "https://fittaa.com",
      description: "Car care for Ghana: book vetted mechanics, washes and tyres, buy parts that fit your plate, call roadside help and keep your car papers current. Web, user app and vendor app.",
      img: { imgDesk: "/projects/fittaa.jpg", imgMob: "/projects/fittaa-m.jpg" },
    },
    {
      name: "Probably a Scam",
      href: "https://probably-a-scam.vercel.app",
      description: "AI analysis that flags scams, phishing and social engineering in texts and URLs before you act on them",
      img: { imgDesk: "/projects/probably-a-scam.jpg", imgMob: "/projects/probably-a-scam-m.jpg" },
    },
    {
      name: "Intelligence Web Interaction Protocol (IWIP)",
      href: "https://github.com/paakofiaidoo/iwip-protocol",
      description: "An open, vendor-neutral application-layer protocol that lets LLMs interact with web applications in a standardised, secure way",
      img: { imgDesk: "/projects/iwip.jpg", imgMob: "/projects/iwip-m.jpg" },
    },
    {
      name: "cowtree",
      href: "https://github.com/paakofiaidoo/cowtree",
      description: "Copy-on-write git worktrees for parallel AI coding sessions and humans, built on APFS clonefile; ships as a CLI, Homebrew tap and Claude Code plugin",
      img: { imgDesk: "/projects/cowtree.jpg", imgMob: "/projects/cowtree-m.jpg" },
    },
    {
      name: "WorkShop Speaker at  FeMS Bootcamp22",
      href: "https://www.canva.com/design/DAFR92_dtkg/ZoB3bGimK1zqx9GqxS1ZRA/view",
      description: "In the workshop I focused on Problem-Solving with code and was an excellent opportunity to share my knowledge and experiences with the attendees",
      img: { imgDesk: "./projects/workshop1.jpg", imgMob: "/projects/workshop2.jpg" },
    }, {
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
    // {
    //   name: "artisanHR",
    //   href: "https://artsan-hr.vercel.app/",
    //   description: "artisan service center",
    //   img: { imgDesk: "./projects/artisan-hr.png", imgMob: "./projects/artsan-hr-mob.jpg" },
    //   scrollDesk: true,
    //   scrollMob: false,
    // },
    // {
    //   name: "karibe valley farms",
    //   href: "https://karibe-valley-farms.vercel.app",
    //   description: "website for karibe-valley-farms",
    //   img: { imgDesk: "./projects/karibe.png", imgMob: "./projects/karibe-mobi.png" },
    //   scrollDesk: true,
    //   scrollMob: false,
    // },
    {
      name: "Alphene steriliser",
      href: "https://www.hackster.io/paakofiaidoo17/alphene-f84a69",
      description: "An Arduino device that UV-sterilises door handles automatically using object-detection sensors",
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
  ] );
};
