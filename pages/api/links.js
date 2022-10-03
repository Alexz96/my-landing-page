export default function links(req, res) {
  if (req.method === "GET") {
    get(req, res);
  } else {
    res.status(405).send();
  }
}

function get(req, res) {
  res.status(200).json([
    {
      text: "LinkedIn",
      url: "https://www.linkedin.com/in/alexsander-oliveira-886105124/?locale=en_US",
    },
    {
      text: "HackerRank",
      url: "https://www.hackerrank.com/alexsanderao96",
    },
    {
      text: "Github",
      url: "https://github.com/Alexz96",
    },
    {
      text: "ShutterStock",
      url: "https://www.shutterstock.com/pt/g/OliveiraAlex96?language=en&rid=256008170",
    },
    {
      text: "Instagram",
      url: "",
    },
    {
      text: "MagazineVoce",
      url: "https://www.magazinevoce.com.br/magazineaions/",
    },
  ]);
}
