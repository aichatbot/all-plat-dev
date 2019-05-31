import React from 'react';
import { Carousel, Jumbotron } from 'react-bootstrap';

const Demo = () => (
  <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="/img/demo1.jpeg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>夕阳</h3>
        <p>一同欣赏美景</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="/img/demo2.jpeg"
        alt="Third slide"
      />
      <Carousel.Caption>
        <h3>白云</h3>
        <p>一同欣赏美景</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="/img/demo3.jpeg"
        alt="Third slide"
      />
      <Carousel.Caption>
        <h3>海滨</h3>
        <p>一同欣赏美景</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

const Slogan = () => (
  <Jumbotron className="flex-fill m-0">
    <h1>xxBBS</h1>
    <p>
      欢迎来到xxBBS系统。
      <br />
      请畅所欲言！
    </p>
  </Jumbotron>
);

const Introduction = () => (
  <div>
    <Demo />
    <Slogan />
  </div>
);

export { Demo, Slogan };
export default Introduction;
