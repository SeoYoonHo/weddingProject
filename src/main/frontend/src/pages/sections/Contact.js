import React from "react";

// reactstrap components
import {
    Card,
    CardHeader,
    CardBody,
    NavItem,
    NavLink,
    Nav,
    TabContent,
    TabPane,
    Container,
    Row,
    Col,
} from "reactstrap";

// core components

function Contact() {
    const [iconPills, setIconPills] = React.useState("1");
    const [pills, setPills] = React.useState("1");
    return (
        <>
            <div className="section section-tabs">
                <Container className="text-center">
                    <Row>
                        <Col className="ml-auto mr-auto">
                            <div className="typography-line">
                                <h5> 신랑에게 연락하기 </h5>
                            </div>
                            <div className="typography-line">
                                <h5> 신부에게 연락하기 </h5>
                            </div>
                        </Col>

                    </Row>
                    <Row>
                        <Col className="ml-auto mr-auto">
                            <div className="typography-line">
                                <h5> 신랑측 혼주 </h5>
                            </div>
                            <div className="typography-line">
                                <h5> 아버지 아무개 </h5>
                            </div>
                            <div className="typography-line">
                                <h5> 어머니 누구게 </h5>
                            </div>
                        </Col>
                        <Col className="ml-auto mr-auto">
                            <div className="typography-line">
                                <h5> 신부측 혼주 </h5>
                            </div>
                            <div className="typography-line">
                                <h5> 아버지 아무개 </h5>
                            </div>
                            <div className="typography-line">
                                <h5> 어머니 누구게 </h5>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Contact;
