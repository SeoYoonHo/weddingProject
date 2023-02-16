import React from "react";

// reactstrap components
import {
    NavItem,
    NavLink,
    Nav,
    TabContent,
    TabPane,
    Container,
    Row,
    Col,
} from "reactstrap";

function InvitaionStroy() {
    const [iconPills, setIconPills] = React.useState("1");
    return (
        <div>
            <Container>
                <Row>
                    <Col className="ml-auto mr-auto" md="10" xl="6">
                        <h3 className="text-center category">Story</h3>
                        <Nav className="justify-content-center" role="tablist" tabs>
                            <NavItem>
                                <NavLink
                                    className={iconPills === "1" ? "active" : ""}
                                    href="#pablo"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setIconPills("1");
                                    }}
                                >
                                    <i className="now-ui-icons objects_umbrella-13"></i>
                                    Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={iconPills === "2" ? "active" : ""}
                                    href="#pablo"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setIconPills("2");
                                    }}
                                >
                                    <i className="now-ui-icons shopping_cart-simple"></i>
                                    Profile
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={iconPills === "3" ? "active" : ""}
                                    href="#pablo"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setIconPills("3");
                                    }}
                                >
                                    <i className="now-ui-icons shopping_shop"></i>
                                    Messages
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={iconPills === "4" ? "active" : ""}
                                    href="#pablo"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setIconPills("4");
                                    }}
                                >
                                    <i className="now-ui-icons ui-2_settings-90"></i>
                                    Settings
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <TabContent
                            className="text-center"
                            activeTab={"iconPills" + iconPills}
                        >
                            <TabPane tabId="iconPills1">
                                <p>
                                    I think that’s a responsibility that I have, to push
                                    possibilities, to show people, this is the level that
                                    things could be at. So when you get something that has
                                    the name Kanye West on it, it’s supposed to be pushing
                                    the furthest possibilities. I will be the leader of a
                                    company that ends up being worth billions of dollars,
                                    because I got the answers. I understand culture. I am
                                    the nucleus.
                                </p>
                            </TabPane>
                            <TabPane tabId="iconPills2">
                                <p>
                                    I will be the leader of a company that ends up being
                                    worth billions of dollars, because I got the answers. I
                                    understand culture. I am the nucleus. I think that’s a
                                    responsibility that I have, to push possibilities, to
                                    show people, this is the level that things could be at.
                                    I think that’s a responsibility that I have, to push
                                    possibilities, to show people, this is the level that
                                    things could be at.
                                </p>
                            </TabPane>
                            <TabPane tabId="iconPills3">
                                <p>
                                    I think that’s a responsibility that I have, to push
                                    possibilities, to show people, this is the level that
                                    things could be at. So when you get something that has
                                    the name Kanye West on it, it’s supposed to be pushing
                                    the furthest possibilities. I will be the leader of a
                                    company that ends up being worth billions of dollars,
                                    because I got the answers. I understand culture. I am
                                    the nucleus.
                                </p>
                            </TabPane>
                            <TabPane tabId="iconPills4">
                                <p>
                                    "I will be the leader of a company that ends up being
                                    worth billions of dollars, because I got the answers. I
                                    understand culture. I am the nucleus. I think that’s a
                                    responsibility that I have, to push possibilities, to
                                    show people, this is the level that things could be at."
                                </p>
                            </TabPane>
                        </TabContent>
                    </Col>
                </Row>
            </Container>
        </div>

    );
}

export default InvitaionStroy;
