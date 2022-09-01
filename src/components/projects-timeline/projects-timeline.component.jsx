import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

// projects Logo
import L_Tesla from "../../assets/img/projects/tesla.jfif";
import L_Amazon from "../../assets/img/projects/amazon.jpg";
import L_Recipe from "../../assets/img/projects/recipe.jpg";
import L_Netflix from "../../assets/img/projects/netflex.jpg";
import L_Chat from "../../assets/img/projects/chat.jfif";
import L_MernTipCalc from "../../assets/img/projects/beach.jpeg";
//import L_GetGitHubInfo from "../../assets/img/projects/site.jpeg";
import L_SmartBrain from "../../assets/img/projects/tetris.jpeg";
//import L_RoboFriends from "../../assets/img/projects/bootstrap.jpeg";
import L_ProductHuntClone from "../../assets/img/projects/only.jpeg";
import L_PortfolioUsingDjango from "../../assets/img/projects/proImg.jpg";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// skills
import L_REACT from "../../assets/img/skills/react.svg";
//import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import Image from "react-bootstrap/Image";
import L_REDUX from "../../assets/img/skills/redux.svg";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_SASS from "../../assets/img/skills/sass-1.svg";
import L_BOOTSTRAP5 from "../../assets/img/skills/bootstrap-4.svg";
import L_MATERIALUI from "../../assets/img/skills/material-ui-1.svg";
import L_STYLED_COMPONENTS from "../../assets/img/skills/styled-components.svg";
import L_REACT_ROUTER from "../../assets/img/skills/react-router.svg";
import L_GIT_ICON from "../../assets/img/skills/git-icon.svg";


import "./projects-timeline.styles.css";

const TimeLine = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline>
        <Events>
        {/* Project: Tesla With MUI */}
        <ImageEvent
            date="01/10/2021"
            className="text-center"
            text="Tesla Clone Website"
            src={L_Tesla}
            alt="Tesla Clone Website"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is Tesla Clone Website Responsive Design
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Clone Website</li>
                          <li>Powered by React and Material UI,Redux and styled-components</li>
                          <li>Responsive Design</li>
                          <li>useState</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                        <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REDUX}
                                alt="L_REDUX"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Redux Toolkit
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_SASS}
                                alt="SASS"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              SASS
                            </span>
                          </li>
                          
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MATERIALUI}
                                alt="Material-UI"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Material-UI
                            </span>
                          </li>

                          <li>
                            <span className="p-2">
                              <Image
                                src={L_STYLED_COMPONENTS}
                                alt="styled_components"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Styled_Components
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT_ROUTER}
                                alt="react router"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React_Router
                            </span>
                          </li>
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>

              
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://aquamarine-stardust-10aa9e.netlify.app/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href=""
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                
              </div>
            </div>
          </ImageEvent>


{/* Project: Beach Resort */}
<ImageEvent
            date="16/09/2021"
            className="text-center"
            text="Beach Resort Hotel Website"
            src={L_MernTipCalc}
            alt="Beach Resort"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This Beach Resort website is full responsive
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Styling with  styled components</li>
                          <li>Redux</li>
                          <li>Responsive Design</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REDUX}
                                alt="L_REDUX"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              React-Redux 
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_SASS}
                                alt="SASS"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              SASS
                            </span>
                          </li>   
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_STYLED_COMPONENTS}
                                alt="styled_components"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Styled_Components
                            </span>
                          </li>  
                          <span className="p-2">
                              <Image
                                src={L_REACT_ROUTER}
                                alt="react router"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React_Router
                            </span>                 
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="#"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton
                  href="https://youthful-lumiere-114f6e.netlify.app/"
                  target="_blank"
                >
                  SEE LIVE
                  
                </UrlButton>
               
              </div>
            </div>
          </ImageEvent>

          {/* Project:Netflix React Website */}
          <ImageEvent
            date="19/07/2021"
            className="text-center"
            text="Netlix Clone Movie Website"
            src={L_Netflix}
            alt="react website"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> The movies website is fully responsive
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Fully responsive</li>
                          <li>React-Hooks</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MATERIALUI}
                                alt="Material-UI"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Material-UI
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_SASS}
                                alt="SASS"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              SASS
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <span className="p-2">
                              <Image
                                src={L_REACT_ROUTER}
                                alt="react router"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React_Router
                            </span>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://elaborate-valkyrie-55bfc9.netlify.app"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="#"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                
              </div>
            </div>
          </ImageEvent>

          {/* Project: Tetris Game */}
          <ImageEvent
            date="21/01/2021"
            className="text-center"
            text="Tetris Game"
            src={L_SmartBrain}
            alt="Tetris Game "
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Tetris game with React Hooks
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>useState</li>
                          <li>useCallback</li>
                          <li>useEffect</li>
                          <li>styled components</li>                          
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_GIT_ICON}
                                alt="react router"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Git Icon
                            </span>
                          </li>
                          
                         
                        </ul>
                        <hr />
                       
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://boring-mcnulty-403eb1.netlify.app/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://boring-mcnulty-403eb1.netlify.app/"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              
              </div>
            </div>
          </ImageEvent>

          {/* Project:Amazon clone Website */}

          <ImageEvent
            date="14/01/2021"
            className="text-center"
            text="Amazon E-Commerce Website"
            src={L_Amazon}
            alt="React Bootstrap"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Amazon Website build with Material-ui
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>React Router to navigate throughout the app</li>
                          <li>Context API to manipulate data</li>
                          <li>Material ui to styling app</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                        <li>
                            <span className="p-2">
                              <Image
                                src={L_MATERIALUI}
                                alt="Material-UI"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Material-UI
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_SASS}
                                alt="SASS"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              SASS
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REDUX}
                                alt="Redux"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Redux
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://tangerine-madeleine-ce6298.netlify.app/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="#"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: react Recipe App */}

          <ImageEvent
            date="15/12/2021"
            className="text-center"
            text="Recipe App"
            src={L_Recipe}
            alt="recipe website"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This website App is build with React -Hooks
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>useState</li>
                          <li>useEffect</li>
                          <li>Axios for data fetching from API end point</li>
                          <li>Edamam</li>
                          
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_SASS}
                                alt="SASS"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              SASS
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li> 
                                                 
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="#"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton
                  href="https://walewahab.github.io/boostrappg/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: React Chat App using Firebase */}
          <ImageEvent
            date="15/12/2021"
            className="text-center"
            text="Chat App"
            src={L_Chat}
            alt="Material website"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This web App is build with Material ui and Firebase for Backend.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Material-ui Icons</li>
                          <li>React Redux</li>
                          <li>React Google Buttton</li> 
                          <li>Firebase Authentication</li>                          
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_SASS}
                                alt="SASS"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              SASS
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>                        
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="#"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton
                  href="https://imaginative-toffee-d0963f.netlify.app"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>


          {/* Project: Portfolio using React Js */}
          <ImageEvent
            date="07/12/2021"
            className="text-center"
            text="My Portfolio"
            src={L_PortfolioUsingDjango}
            alt="portfolio"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is my portfolio
                        website built using Reactjs.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Send emails</li>
                          <li>View my projects</li>
                          <li>Write a blog</li>
                          <li>
                            Hosted using Netlify 
                          </li>
                          <li>Fully funtion</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_SASS}
                                alt="SASS"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              SASS
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP5}
                                alt="Bootstrap"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Bootstrap 5
                            </span>
                          </li>        

                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>                         
                        </ul>
                        <hr />
                        <em>
                          <strong>View Demo Video:</strong>
                          <br />
                          <br />
                          If you are reading this, that means I have updated my
                          Portfolio website to recent one.
                          <br />
                         
                          <br />
                        </em>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="#"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
        </Events>
      </Timeline>
    </div>
  );
};

export default TimeLine;
