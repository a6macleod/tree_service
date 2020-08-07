import React from "react";
import "../about.css";
import portrait from "../images/portrait.jpg";

class About extends React.Component {
  render() {
    return (
      <div className="container-about">
        <div className="subsection sub-one sub-color">
          <h3>We Love trees!</h3>

          <div className="portrait">
            <img src={portrait} alt="a mans head surrounded by leaves" />
            <span>
              Photo by{" "}
              <a href="https://unsplash.com/@dianasimumpande?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                Diana Simumpande
              </a>{" "}
              on{" "}
              <a href="https://unsplash.com/t/people?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                Unsplash
              </a>
            </span>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis nihil
            repellat tempore quod laborum. Voluptas minima vitae ullam,
            deleniti, ipsum quasi doloremque illum ipsam modi quaerat accusamus
            autem possimus architecto sint qui, tenetur! Commodi voluptas quis
            cumque vero accusantium tenetur, odit in itaque optio impedit nisi
            facilis placeat, porro quaerat!
          </p>
        </div>
        <div className="subsection sub-two">
          <h3>title</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
            consequatur animi minima, magnam. Quibusdam incidunt necessitatibus
            quo assumenda atque, exercitationem, in minima iusto nihil
            aspernatur vitae laudantium accusamus magnam reiciendis non iure
            ducimus accusantium quae reprehenderit? Deleniti vel, pariatur,
            accusantium officia provident sunt eaque nesciunt autem repudiandae
            amet qui sint!
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis nihil
            repellat tempore quod laborum. Voluptas minima vitae ullam,
            deleniti, ipsum quasi doloremque illum ipsam modi quaerat accusamus
            autem possimus architecto sint qui, tenetur! Commodi voluptas quis
            cumque vero accusantium tenetur, odit in itaque optio impedit nisi
            facilis placeat, porro quaerat!
          </p>
        </div>
      </div>
    );
  }
}

export default About;
