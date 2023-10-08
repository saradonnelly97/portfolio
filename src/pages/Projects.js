import React, { useState } from "react";
// import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';

import "../styles/Projects.css";

function Projects() {
  const[items, setItems] = useState(ProjectList)
  const filterItem = (categoryItem) => {
    const updatedItems = ProjectList.filter((curElem) => {
      return curElem.category === categoryItem;
    })

    setItems(updatedItems);
  }
  return (
    <section className="work container section" id="work">
      <h2 className="section__title"> Recent Works</h2>

      <div className="work__filters">
        <span className="work__item"onClick={() => setItems(ProjectList)}>Everything</span>
        <span className="work__item" onClick={() => filterItem("Creative")}>Creative</span>
        <span className="work__item" onClick={() => filterItem("Art")}>Art</span>
        <span className="work__item" onClick={() => filterItem("Design")}>Design</span>
        <span className="work__item" onClick={() => filterItem("Branding")}>Branding</span>
      </div>

      <div className="work__container grid">
        {items.map((elem) => {
          const{ id, image, title, category, link } = elem;
          return (
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt="" className="work__img" />
                <div className="work__mask"></div>
              </div>
              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>
              <a href={link} className="work__button" target="_blank">
                <OpenInNewOutlinedIcon />
              </a>
            </div>
          )
        })}
      </div>
    </section>
  );
}

export default Projects;