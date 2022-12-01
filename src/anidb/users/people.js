import {Accordion} from "react-bootstrap";

const People = () => {
    return (
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header><strong>People you follow</strong></Accordion.Header>
                <Accordion.Body>
                    <div>List of Followers</div>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header><strong>People following you</strong></Accordion.Header>
                <Accordion.Body>
                    <div>List of Following</div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default People;