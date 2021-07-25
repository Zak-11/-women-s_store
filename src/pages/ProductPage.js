import React from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";


const ProductPage = () => {
    const product = {
        id: 2,
        name: 'Блуза в англиском стиле',
        price: 3400,
        rating: 7,
        img: 'https://img.ltwebstatic.com/images3_pi/2021/01/12/161042860324dd01c2860318489a686d4b68bc89e5_thumbnail_900x.webp'
    }
    const description = [
        {
            id: 1,
            title: 'You styled in a flowy shape with a keyhole detail at the back for easy on and off.',
        },
        {
            id: 2,
            size: 'Regular side neck to hem 56.5" / 144cm.',
        },
        {
            id: 3,
            compound: 'Main 100% Cotton. Lining 100% Cotton.',
        },
        {
            id: 4,
            country: 'Country of Origin: Great Britain.',
        }
    ]


    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={450} height={600} src={product.img}/>
                </Col>


                <Col md={4}>

                    <Col md={5}>
                        <Card className="d-flex flex-column align-items-center justify-content-end"
                              style={{width: 500, height: 150, border: '1px solid lightgray'}}
                        >
                            <div>
                                <h2>{product.name}</h2>
                                <h3>{product.price} руб.</h3>
                            </div>
                            <Button variant={"outline-dark"}>ADD TO BAG</Button>
                        </Card>

                    </Col>


                    <Row className="d-flex flex-column align-items-center">

                        <Card className="d-flex flex-column align-items-sm-start m-3"
                              style={{border: '1px solid lightgray'}}
                        >
                            {description.map(d =>
                                <Row key={d.id}
                                     style={{padding: 10}}>{d.title}
                                    {d.size}{d.country}
                                    {d.country}
                                </Row>
                            )}
                        </Card>


                    </Row>
                </Col>


            </Row>

        </Container>


    );
};

export default ProductPage;
