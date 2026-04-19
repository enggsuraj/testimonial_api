import { render } from "@testing-library/react";
import React from "react";

import About from "../components/About";
import Coffee from "../components/Coffee";
import DifferentJSON from "../components/DifferentJSON";
import EntireJSON from "../components/EntireJSON";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Message from "../components/Message";
import Response from "../components/Response";
import Service from "../components/Service";
import SingleUser from "../components/SingleUser";
import Testimonial from "../components/Testimonial";

it("renders About", () => {
  render(<About />);
});

it("renders Coffee", () => {
  render(<Coffee />);
});

it("renders DifferentJSON", () => {
  render(<DifferentJSON />);
});

it("renders EntireJSON", () => {
  render(<EntireJSON />);
});

it("renders Footer", () => {
  render(<Footer />);
});

it("renders Header", () => {
  render(<Header />);
});

it("renders Message", () => {
  render(<Message />);
});

it("renders Response", () => {
  render(<Response />);
});

it("renders Service", () => {
  render(<Service />);
});

it("renders SingleUser", () => {
  render(<SingleUser />);
});

it("renders Testimonial", () => {
  render(<Testimonial />);
});
