import React from "react";
import "../home.css";
import treeRemoval from "../images/tree-removal.jpg";
import treeTrimming from "../images/tree-trimming.jpg";
import healthyTrees from "../images/healthy-trees.jpg";

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="content-about">
          <blockquote>
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
            repellat doloribus laboriosam, beatae odio molestias blanditiis.
            Iste sit quis officiis sapiente, ipsa ut, temporibus delectus
            laudantium omnis itaque vero maxime?" <footer>-SomeGuyius</footer>
          </blockquote>

          <div className="services-container">
            <div className="services sub-color">
              <h3>Tree Removal</h3>
              <img src={treeRemoval} alt="A felled tree and chainsaw" />
              <span>
                Photo by{" "}
                <a href="https://unsplash.com/@markusspiske?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                  Markus Spiske
                </a>{" "}
                on{" "}
                <a href="https://unsplash.com/s/photos/chainsaw?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                  Unsplash
                </a>
              </span>
            </div>

            <div className="services sub-color">
              <h3>Tree Trimming</h3>
              <img src={treeTrimming} alt="A man trimming a tree" />
              <span>
                Photo by{" "}
                <a href="https://unsplash.com/@franagain?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                  fran hogan
                </a>{" "}
                on{" "}
                <a href="https://unsplash.com/s/photos/chainsaw?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                  Unsplash
                </a>
              </span>
            </div>

            <div className="services sub-color">
              <h3>Arborist Services</h3>
              <img src={healthyTrees} alt="A walking path lined by trees" />
              <span>
                Photo by{" "}
                <a href="https://unsplash.com/@alexrubi?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                  Alex Zarubi
                </a>{" "}
                on{" "}
                <a href="https://unsplash.com/s/photos/urban-tree?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                  Unsplash
                </a>
              </span>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
            culpa minima earum mollitia! Dolores, ad soluta accusantium, at
            animi molestias consectetur ipsa, laboriosam cumque ut
            exercitationem ducimus. In, praesentium tempore id qui laborum, nam
            pariatur, consequuntur nobis velit libero perferendis repellendus
            tempora provident totam amet odit laudantium nulla alias ipsam odio
            illum assumenda fugit ab saepe corrupti! Delectus expedita
            exercitationem quidem! Voluptates earum aperiam facilis illum
            quaerat animi necessitatibus. Eligendi sint ex dolorum ipsum.
            Architecto, nostrum commodi, blanditiis sequi a dolorum, autem eius
            ullam soluta rem nesciunt at earum consectetur obcaecati nemo
            corrupti molestiae enim aliquam, unde praesentium deleniti? Delectus
            excepturi placeat voluptas possimus? Nostrum laudantium
            reprehenderit ipsum velit, minima, magnam modi, voluptate dolore
            esse aut porro maiores nobis at. Iusto ex at voluptatibus quasi,
            tenetur corporis, temporibus tempora. A ex nam beatae. Ab itaque
            repellendus vitae fugiat accusamus eveniet suscipit atque, ex.
            Maxime nostrum, cum consequuntur dolore, voluptas iure, id iusto
            provident, ipsa ea architecto mollitia delectus labore eius odio
            adipisci explicabo sit enim rem? Similique accusantium numquam
            tenetur nostrum sint quis laboriosam blanditiis explicabo inventore.
            Optio ad qui veniam velit id, quisquam necessitatibus ratione
            maiores autem doloribus rem vitae aliquid cum amet non quo alias,
            deleniti officia. Tempore.
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
