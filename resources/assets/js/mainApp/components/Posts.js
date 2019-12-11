import React, { Component } from "react";

export default class Posts extends Component {
  constructor() {
    super();
    this.state = {
      name: "Aslam"
    };
  }
  clickedBtn = () => {
    console.log("swag");
  };
  render() {
    return (
      <section id="posts">
        {/* single update */}
        <div className="update-container">
          <div className="author-info">
            <a href="#" className="user-img" />
            <div className="info">
              <a href="#">James Doe</a> shared a <a href="#">story</a>
            </div>
          </div>
          <div className="media">
            <div
              className="image"
              style={{
                background:
                  'url("https://www.opstart.ca/wp-content/uploads/2017/04/importance-of-motivation-1080x611.jpg")',
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
              }}
            />
          </div>
          <div className="padding-container">
            <div className="grey-container">
              <div className="update-info">
                <h3>How to become a developer?</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
                  consequuntur itaque porro eveniet voluptatibus. Vero
                  reprehenderit, amet libero maiores dolore accusantium non ea,
                  sint eveniet eos, dolorem consequuntur excepturi. Deleniti.
                </p>
              </div>
              <div className="update-stats">
                <div className="icon-section">
                  <div className="like-circle">
                    <i className="fas fa-thumbs-up" />
                  </div>
                </div>
                <div className="other-users">
                  Sarah Russel and 23 others liked update
                </div>
                <div className="comments-stats">4 comments</div>
              </div>
              <div className="compose-comment">
                <textarea name="name" rows={8} cols={70} defaultValue={""} />
                <div className="buttons">
                  <div className="repost-btn">
                    <i className="fas fa-share" />
                  </div>
                  <div className="like-btn">
                    <i className="fas fa-thumbs-up" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* single update */}
        <div className="update-container">
          <div className="author-info">
            <a href="#" className="user-img" />
            <div className="info">
              <a href="#">James Doe</a> shared a <a href="#">story</a>
            </div>
          </div>
          <div className="media">
            <div
              className="image"
              style={{
                background:
                  'url("https://www.opstart.ca/wp-content/uploads/2017/04/importance-of-motivation-1080x611.jpg")',
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
              }}
            />
          </div>
          <div className="padding-container">
            <div className="grey-container">
              <div className="update-info">
                <h3>How to become a developer?</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
                  consequuntur itaque porro eveniet voluptatibus. Vero
                  reprehenderit, amet libero maiores dolore accusantium non ea,
                  sint eveniet eos, dolorem consequuntur excepturi. Deleniti.
                </p>
              </div>
              <div className="update-stats">
                <div className="icon-section">
                  <div className="like-circle">
                    <i className="fas fa-thumbs-up" />
                  </div>
                </div>
                <div className="other-users">
                  Sarah Russel and 23 others liked update
                </div>
                <div className="comments-stats">4 comments</div>
              </div>
              <div className="compose-comment">
                <textarea name="name" rows={8} cols={70} defaultValue={""} />
                <div className="buttons">
                  <div className="repost-btn">
                    <i className="fas fa-share" />
                  </div>
                  <div className="like-btn">
                    <i className="fas fa-thumbs-up" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* single update */}
        <div className="update-container">
          <div className="author-info">
            <a href="#" className="user-img" />
            <div className="info">
              <a href="#">James Doe</a> shared a <a href="#">story</a>
            </div>
          </div>
          <div className="media">
            <div
              className="image"
              style={{
                background:
                  'url("https://www.opstart.ca/wp-content/uploads/2017/04/importance-of-motivation-1080x611.jpg")',
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
              }}
            />
          </div>
          <div className="padding-container">
            <div className="grey-container">
              <div className="update-info">
                <h3>How to become a developer?</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
                  consequuntur itaque porro eveniet voluptatibus. Vero
                  reprehenderit, amet libero maiores dolore accusantium non ea,
                  sint eveniet eos, dolorem consequuntur excepturi. Deleniti.
                </p>
              </div>
              <div className="update-stats">
                <div className="icon-section">
                  <div className="like-circle">
                    <i className="fas fa-thumbs-up" />
                  </div>
                </div>
                <div className="other-users">
                  Sarah Russel and 23 others liked update
                </div>
                <div className="comments-stats">4 comments</div>
              </div>
              <div className="compose-comment">
                <textarea name="name" rows={8} cols={70} defaultValue={""} />
                <div className="buttons">
                  <div className="repost-btn">
                    <i className="fas fa-share" />
                  </div>
                  <div className="like-btn">
                    <i className="fas fa-thumbs-up" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
