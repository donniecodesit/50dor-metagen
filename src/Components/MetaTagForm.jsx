import React from "react";
import { Form, Row, Col } from "react-bootstrap";

export default function MetaTagForm({ collections, setCollections }) {
    const handleInputChange = (name, value) => {
        let newTags = { ...collections };
        newTags[name] = value;
        setCollections(newTags);
    }

    return (
        <Form>
            <Row>
                <Col xs={12} md={6}>
                    <Form.Group className="mb-3" controlId="formbasicEmail">
                        <Form.Label>Website Name or Page Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter a Website/Title" onChange={({target}) => handleInputChange("title", target.value)}/>
                    </Form.Group>
                </Col>
                <Col xs={12} md={6}>
                    <Form.Group className="mb-3" controlId="formbasicEmail">
                        <Form.Label>Website Address</Form.Label>
                        <Form.Control type="url" placeholder="Enter Website URL" onChange={({target}) => handleInputChange("url", target.value)}/>
                    </Form.Group>
                </Col>
                <Col xs={12} md={12}>
                    <Form.Group className="mb-3" controlId="formbasicEmail">
                        <Form.Label>Website Description</Form.Label>
                        <Form.Control as="textarea" placeholder="Enter Website Description" onChange={({target}) => handleInputChange("description", target.value)}/>
                    </Form.Group>
                </Col>
                <Col xs={12} md={6}>
                    <Form.Group className="mb-3" controlId="formbasicEmail">
                        <Form.Label>Website Keywords</Form.Label>
                        <Form.Control as="textarea" placeholder="Enter Website Keywords" onChange={({target}) => handleInputChange("keywords", target.value)}/>
                    </Form.Group>
                </Col>
                <Col xs={12} md={6}>
                    <Form.Group className="mb-3" controlId="formbasicEmail">
                        <Form.Label>Website URL</Form.Label>
                        <Form.Control type="url"  placeholder="Enter Logo URL" onChange={({target}) => handleInputChange("imageUrl", target.value)} />
                    </Form.Group>
                </Col>
                <Col xs={12} md={6}>
                    <Form.Label>Author of Website</Form.Label>
                    <Form.Control type="text" placeholder="Enter Author Name" onChange={({target}) => handleInputChange("author", target.value)}/>
                </Col>
            </Row>
        </Form>
    )
}