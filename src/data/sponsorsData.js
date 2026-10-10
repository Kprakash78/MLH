import awsLogo from "../assets/images/AWS.png";
import digitalOceanLogo from "../assets/images/DigitalOcean.png";
import githubLogo from "../assets/images/GitHub.png";

export const SPONSORS_CONFIG = [
  {
    id: "gold",
    tierLabel: "Gold Sponsors",
    subtitle: "Powering the\nfuture of builders",
    sponsors: [
      {
        id: "aws",
        name: "SPONSOR NAME 01",
        logo: awsLogo,
        logoHeight: "48px",
        website: "https://aws.amazon.com/",
      },
    ],
  },
  {
    id: "silver",
    tierLabel: "Silver Sponsors",
    subtitle: "Supporting\nopen collaboration",
    sponsors: [
      {
        id: "digital-ocean",
        name: "SPONSOR NAME 02",
        logo: digitalOceanLogo,
        logoHeight: "48px",
        website: "https://www.digitalocean.com/",
      },
      {
        id: "github",
        name: "SPONSOR NAME 03",
        logo: githubLogo,
        logoHeight: "48px",
        website: "https://github.com/",
      },
    ],
  },
  {
    id: "bronze",
    tierLabel: "Bronze Sponsors",
    subtitle: "Investing in\nnew ideas",
    sponsors: [],
  },
];
