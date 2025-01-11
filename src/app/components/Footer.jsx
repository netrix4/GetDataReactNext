import React from "react";

const footer_content = [
  {
    categorie: "develop",
    categorie_options: ["Guides", "Components", "Apis", "Architecture"],
  },
  {
    categorie: "participate",
    categorie_options: ["Guides", "Components", "Apis", "Architecture"],
  },
  {
    categorie: "find us",
    categorie_options: ["Guides", "Components", "Apis", "Architecture"],
  },
  {
    categorie: "explore more",
    categorie_options: ["Guides", "Components", "Apis", "Architecture"],
  },
];

const Footer = () => (
  <footer className="bg-[#20232a]">
    <div className=" h-[380px] justify-around uppercase px-[32px] py-[34px] mx-[15%] my-[0px] text-[14px] flex flex-row">
      {footer_content.map((item, index) => (
        <div className="flex flex-col">
          <p className="text-[#767a84]">{item.categorie}</p>
          <ul>
            {item.categorie_options.map((categorieOption) => (
              <li className="text-[#e2e5e8]">{categorieOption}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </footer>
);

export default Footer;
