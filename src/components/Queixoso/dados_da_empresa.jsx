import React from "react";
import {
    BsFillEmojiHeartEyesFill,
    BsFillEmojiSmileFill,
    BsFillEmojiNeutralFill,
    BsFillEmojiFrownFill,
} from "react-icons/bs";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import "./dados_da_empresa.css";




const ReviewForm = ({ data, updateFielHndler }) => {
    return (
        <div>
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridNomeEmpresa">
                        <Form.Label>Empresa</Form.Label>
                        <Form.Control
                            type="name"
                            name="empresa"
                            id="nome_empresa"
                            placeholder="Digite o nome da empresa em que tu trabalhas"
                            value={data.empresa || ""}
                            onChange={(e) => updateFielHndler("empresa", e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEstadoCivil">
                        <Form.Label>Localização da Empresa</Form.Label>
                        <Form.Select defaultValue="Choose..."
                            name="localizacaoEmp"
                            id="provincia_emp"
                            value={data.localizacaoEmp || ""}
                            onChange={(e) => updateFielHndler("localizacaoEmp", e.target.value)}>
                            <option>Choose...</option>
                            <option>Bengo</option>
                            <option>Benguela</option>
                            <option>Bié</option>
                            <option>Cabinda</option>
                            <option>Cuando-Cubango</option>
                            <option>Cuanza-Norte</option>
                            <option>Cuanza-Sul</option>
                            <option>Cunene</option>
                            <option>Huambo</option>
                            <option>Huíla</option>
                            <option>Luanda</option>
                            <option>Lunda-Norte</option>
                            <option>Lunda-Sul</option>
                            <option>Malanje</option>
                            <option>Moxíco</option>
                            <option>Namibe</option>
                            <option>Uíge</option>
                            <option>Zaire</option>
                        </Form.Select>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridRua">
                        <Form.Label>Rua</Form.Label>
                        <Form.Control
                            type="text"
                            name="ruaEmp"
                            id="rua_empresa"
                            placeholder="Diga-nos a rua que a empresa está localizada"
                            value={data.ruaEmp || ""}
                            onChange={(e) => updateFielHndler("ruaEmp", e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridWebsite">
                        <Form.Label>Website</Form.Label>
                        <Form.Control
                            type="text"
                            name="websiteEmp"
                            id="website_empresa"
                            placeholder="https://kiassusoft.co.ao"
                            value={data.websiteEmp || ""}
                            onChange={(e) => updateFielHndler("websiteEmp", e.target.value)}
                        />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridBI">
                        <Form.Label>Contacto</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Ex:930340539"
                            value={data.contactoEmp || ""}
                            onChange={(e) => updateFielHndler("contactoEmp", e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridDaataNascimento">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            name="emailEmp"
                            id="email_empresa"
                            placeholder="Diga-nos o email da empresa"
                            value={data.emailEmp || ""}
                            onChange={(e) => updateFielHndler("emailEmp", e.target.value)}
                        />
                    </Form.Group>
                </Row>
            </Form>
        </div>
    );
}

export default ReviewForm