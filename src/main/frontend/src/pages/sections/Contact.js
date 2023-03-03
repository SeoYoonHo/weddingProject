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

import {faPhone, faCommentSms} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

// core components

function Contact() {
    return (
        <div className="section section-tabs">
            <Container className="text-center container-flex">
                <Row className="row-flex">
                    <Col className="ml-auto mr-auto">
                        <div className="typography-line-flex-row">
                            <h4 className="contact-icon-style" style={{flex: 2}}>신랑에게 연락하기</h4>
                            <div className="contact-icon-style">
                                <FontAwesomeIcon icon={faPhone} size="2x"/>
                                <FontAwesomeIcon icon={faCommentSms} size="2x"/>
                            </div>
                        </div>
                        <div className="typography-line-flex-row">
                            <h4 className="contact-icon-style" style={{flex: 2}}>신부에게 연락하기</h4>
                            <div className="contact-icon-style">
                                <FontAwesomeIcon icon={faPhone} size="2x"/>
                                <FontAwesomeIcon icon={faCommentSms} size="2x"/>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="row-flex">
                    <Col className="ml-auto mr-auto">
                        <div className="typography-line-flex-col">
                            <h5> 신랑측 혼주 </h5>
                        </div>
                        <div className="typography-line-flex-col">
                            <h5> 아버지 아무개 </h5>
                            <div className="contact-icon-style">
                                <FontAwesomeIcon icon={faPhone} size="2x"/>
                                <FontAwesomeIcon icon={faCommentSms} size="2x"/>
                            </div>
                        </div>
                        <div className="typography-line-flex-col">
                            <h5> 어머니 누구게 </h5>
                            <div className="contact-icon-style">
                                <FontAwesomeIcon icon={faPhone} size="2x"/>
                                <FontAwesomeIcon icon={faCommentSms} size="2x"/>
                            </div>
                        </div>
                    </Col>
                    <Col className="ml-auto mr-auto">
                        <div className="typography-line-flex-col">
                            <h5> 신부측 혼주 </h5>
                        </div>
                        <div className="typography-line-flex-col">
                            <h5> 아버지 아무개 </h5>
                            <div className="contact-icon-style">
                                <FontAwesomeIcon icon={faPhone} size="2x"/>
                                <FontAwesomeIcon icon={faCommentSms} size="2x"/>
                            </div>
                        </div>
                        <div className="typography-line-flex-col">
                            <h5> 어머니 누구게 </h5>
                            <div className="contact-icon-style">
                                <FontAwesomeIcon icon={faPhone} size="2x"/>
                                <FontAwesomeIcon icon={faCommentSms} size="2x"/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Contact;
