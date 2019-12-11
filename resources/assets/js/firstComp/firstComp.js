import React, { Component } from "react";
import ReactDOM from "react-dom";

class Layout extends Component {
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
      <div className="app-container home-page">
        <section id="left-menu">
          <div className="account-dropdown">
            <div className="logo">
              <i className="fab fa-typo3" />
            </div>
            <div className="name">mhd aslam</div>
            <div className="icon">
              <i className="fas fa-chevron-down" />
            </div>
          </div>
          <div className="groups">
            <div className="group">
              <div className="title">Title</div>
              <ul>
                <li>
                  <a href="/logout">Logout</a>
                </li>
                <li>link</li>
                <li>link</li>
              </ul>
            </div>
          </div>
        </section>
        <section id="content-container">
          <div className="search-header">
            <div className="search-box">
              <input type="text" name defaultValue />
              <div className="icon-section">
                <div className="noti">
                  <i className="fas fa-bell" />
                  <div className="noti-number active">3+</div>
                </div>
                <div className="comments">
                  <i className="fas fa-comment" />
                  <div className="noti-number active">3</div>
                </div>
                <div className="user">
                  <i className="fas fa-user" />
                  <div className="noti-number active">3</div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-area">
            <section className="compose-section">
              <textarea name="name" rows={8} cols={80} defaultValue={""} />
              <div className="user-img" />
              <div className="buttons">
                <div className="button photo-btn">
                  <i className="fas fa-camera-retro" />
                </div>
                <div className="button video-btn">
                  <i className="fas fa-video" />
                </div>
                <div className="button send-btn">
                  <i className="fas fa-paper-plane" />
                </div>
              </div>
            </section>
            <section id="updates">
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
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Rem consequuntur itaque porro eveniet
                        voluptatibus. Vero reprehenderit, amet libero maiores
                        dolore accusantium non ea, sint eveniet eos, dolorem
                        consequuntur excepturi. Deleniti.
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
                      <textarea
                        name="name"
                        rows={8}
                        cols={70}
                        defaultValue={""}
                      />
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
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Rem consequuntur itaque porro eveniet
                        voluptatibus. Vero reprehenderit, amet libero maiores
                        dolore accusantium non ea, sint eveniet eos, dolorem
                        consequuntur excepturi. Deleniti.
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
                      <textarea
                        name="name"
                        rows={8}
                        cols={70}
                        defaultValue={""}
                      />
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
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Rem consequuntur itaque porro eveniet
                        voluptatibus. Vero reprehenderit, amet libero maiores
                        dolore accusantium non ea, sint eveniet eos, dolorem
                        consequuntur excepturi. Deleniti.
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
                      <textarea
                        name="name"
                        rows={8}
                        cols={70}
                        defaultValue={""}
                      />
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
          </div>
        </section>
        <section id="messenger">
          <div className="messenger-header">
            <div className="messenger-icon">
              <i className="fab fa-facebook-messenger" />
            </div>
            <div className="title">Messenger</div>
            <div className="options-icon">
              <i className="fas fa-ellipsis-v" />
            </div>
          </div>
          <div className="users">
            {/* usercontainer */}
            <div className="users-container">
              <div className="user">
                <div
                  className="user-img"
                  style={{
                    background:
                      'url("https://tinyfac.es/data/avatars/26CFEFB3-21C8-49FC-8C19-8E6A62B6D2E0-200w.jpeg")',
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    borderRadius: "50%",
                    height: "30px",
                    width: "30px"
                  }}
                />
                <div className="username">James Doe</div>
                <div className="conversation">
                  <i className="fas fa-comment-dots" />
                </div>
              </div>
              <div className="user">
                <div
                  className="user-img"
                  style={{
                    background:
                      'url("https://tinyfac.es/data/avatars/26CFEFB3-21C8-49FC-8C19-8E6A62B6D2E0-200w.jpeg")',
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    borderRadius: "50%",
                    height: "30px",
                    width: "30px"
                  }}
                />
                <div className="username">James Doe</div>
                <div className="conversation">
                  <i className="fas fa-comment-dots" />
                </div>
              </div>
              <div className="user">
                <div
                  className="user-img"
                  style={{
                    background:
                      'url("https://tinyfac.es/data/avatars/26CFEFB3-21C8-49FC-8C19-8E6A62B6D2E0-200w.jpeg")',
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    borderRadius: "50%",
                    height: "30px",
                    width: "30px"
                  }}
                />
                <div className="username">James Doe</div>
                <div className="conversation">
                  <i className="fas fa-comment-dots" />
                </div>
              </div>
              <div className="user">
                <div
                  className="user-img"
                  style={{
                    background:
                      'url("https://tinyfac.es/data/avatars/26CFEFB3-21C8-49FC-8C19-8E6A62B6D2E0-200w.jpeg")',
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    borderRadius: "50%",
                    height: "30px",
                    width: "30px"
                  }}
                />
                <div className="username">James Doe</div>
                <div className="conversation">
                  <i className="fas fa-comment-dots" />
                </div>
              </div>
              <div className="user">
                <div
                  className="user-img"
                  style={{
                    background:
                      'url("https://tinyfac.es/data/avatars/26CFEFB3-21C8-49FC-8C19-8E6A62B6D2E0-200w.jpeg")',
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    borderRadius: "50%",
                    height: "30px",
                    width: "30px"
                  }}
                />
                <div className="username">James Doe</div>
                <div className="conversation">
                  <i className="fas fa-comment-dots" />
                </div>
              </div>
              <div className="user active">
                <div
                  className="user-img"
                  style={{
                    background:
                      'url("https://tinyfac.es/data/avatars/26CFEFB3-21C8-49FC-8C19-8E6A62B6D2E0-200w.jpeg")',
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    borderRadius: "50%",
                    height: "30px",
                    width: "30px"
                  }}
                />
                <div className="username">James Doe</div>
                <div className="conversation">
                  <i className="fas fa-comment-dots" />
                </div>
              </div>
              <div className="user">
                <div
                  className="user-img"
                  style={{
                    background:
                      'url("https://tinyfac.es/data/avatars/26CFEFB3-21C8-49FC-8C19-8E6A62B6D2E0-200w.jpeg")',
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    borderRadius: "50%",
                    height: "30px",
                    width: "30px"
                  }}
                />
                <div className="username">James Doe</div>
                <div className="conversation">
                  <i className="fas fa-comment-dots" />
                </div>
              </div>
              <div className="user active">
                <div
                  className="user-img"
                  style={{
                    background:
                      'url("https://tinyfac.es/data/avatars/26CFEFB3-21C8-49FC-8C19-8E6A62B6D2E0-200w.jpeg")',
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    borderRadius: "50%",
                    height: "30px",
                    width: "30px"
                  }}
                />
                <div className="username">James Doe</div>
                <div className="conversation">
                  <i className="fas fa-comment-dots" />
                </div>
              </div>
              <div className="user">
                <div
                  className="user-img"
                  style={{
                    background:
                      'url("https://tinyfac.es/data/avatars/26CFEFB3-21C8-49FC-8C19-8E6A62B6D2E0-200w.jpeg")',
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    borderRadius: "50%",
                    height: "30px",
                    width: "30px"
                  }}
                />
                <div className="username">James Doe</div>
                <div className="conversation">
                  <i className="fas fa-comment-dots" />
                </div>
              </div>
              <div className="user">
                <div
                  className="user-img"
                  style={{
                    background:
                      'url("https://tinyfac.es/data/avatars/26CFEFB3-21C8-49FC-8C19-8E6A62B6D2E0-200w.jpeg")',
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    borderRadius: "50%",
                    height: "30px",
                    width: "30px"
                  }}
                />
                <div className="username">James Doe</div>
                <div className="conversation">
                  <i className="fas fa-comment-dots" />
                </div>
              </div>
              <div className="user active">
                <div
                  className="user-img"
                  style={{
                    background:
                      'url("https://tinyfac.es/data/avatars/26CFEFB3-21C8-49FC-8C19-8E6A62B6D2E0-200w.jpeg")',
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    borderRadius: "50%",
                    height: "30px",
                    width: "30px"
                  }}
                />
                <div className="username">James Doe</div>
                <div className="conversation">
                  <i className="fas fa-comment-dots" />
                </div>
              </div>
              <div className="user">
                <div
                  className="user-img"
                  style={{
                    background:
                      'url("https://tinyfac.es/data/avatars/26CFEFB3-21C8-49FC-8C19-8E6A62B6D2E0-200w.jpeg")',
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    borderRadius: "50%",
                    height: "30px",
                    width: "30px"
                  }}
                />
                <div className="username">James Doe</div>
                <div className="conversation">
                  <i className="fas fa-comment-dots" />
                </div>
              </div>
              <div className="user">
                <div
                  className="user-img"
                  style={{
                    background:
                      'url("https://tinyfac.es/data/avatars/26CFEFB3-21C8-49FC-8C19-8E6A62B6D2E0-200w.jpeg")',
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    borderRadius: "50%",
                    height: "30px",
                    width: "30px"
                  }}
                />
                <div className="username">James Doe</div>
                <div className="conversation">
                  <i className="fas fa-comment-dots" />
                </div>
              </div>
              <div className="user">
                <div
                  className="user-img"
                  style={{
                    background:
                      'url("https://tinyfac.es/data/avatars/26CFEFB3-21C8-49FC-8C19-8E6A62B6D2E0-200w.jpeg")',
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    borderRadius: "50%",
                    height: "30px",
                    width: "30px"
                  }}
                />
                <div className="username">James Doe</div>
                <div className="conversation">
                  <i className="fas fa-comment-dots" />
                </div>
              </div>
              <div className="user">
                <div
                  className="user-img"
                  style={{
                    background:
                      'url("https://tinyfac.es/data/avatars/26CFEFB3-21C8-49FC-8C19-8E6A62B6D2E0-200w.jpeg")',
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    borderRadius: "50%",
                    height: "30px",
                    width: "30px"
                  }}
                />
                <div className="username">James Doe</div>
                <div className="conversation">
                  <i className="fas fa-comment-dots" />
                </div>
              </div>
              <div className="user">
                <div
                  className="user-img"
                  style={{
                    background:
                      'url("https://tinyfac.es/data/avatars/26CFEFB3-21C8-49FC-8C19-8E6A62B6D2E0-200w.jpeg")',
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    borderRadius: "50%",
                    height: "30px",
                    width: "30px"
                  }}
                />
                <div className="username">James Doe</div>
                <div className="conversation">
                  <i className="fas fa-comment-dots" />
                </div>
              </div>
            </div>
          </div>
          <div className="search">
            <input type="text" name defaultValue placeholder="Search" />
          </div>
        </section>
      </div>
    );
  }
}

const app = document.getElementById("app");

ReactDOM.render(<Layout />, app);
