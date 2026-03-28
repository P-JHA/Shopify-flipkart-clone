import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { TbTruckReturn } from "react-icons/tb";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles.js";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

function Copyright() {
  return (
    <Typography
      variant="body2"
      color="#ffffff"
      sx={{
        display: "flex",
        padding: "15px",
        fontWeight: "400",
        fontSize: "15px",
        lineHeight: "2",
        fontFamily: "Rubik",
        justifyContent: "center",
      }}
    >
      © 2026 Made with love by Prabhakar
    </Typography>
  );
}

const Footer = () => {
  return (
    <>
      <Box style={{ backgroundColor: "#2874F0", paddingTop: "40px" }}>
        <Container>
          <Row>
            <Column style={{ display: "inline-block" }}>
              {/* <h1
                style={{ color: "#fff", fontSize: "34px", fontWeight: "bold" }}
              >
                ShopZone
              </h1> */}
              <h1
                style={{
                  color: "#fff",
                  fontSize: "34px",
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "flex-end",
                }}
              >
                ShopZone
                <span
                  style={{
                    color: "#ffe500",
                    marginLeft: "6px",
                    fontSize: "18px",
                    fontWeight: "600",
                    position: "relative",
                    top: "4px",
                  }}
                >
                  FLIPKART
                </span>
              </h1>
            </Column>

            <Column>
              <Heading>Ouick Links</Heading>
              <Link
                to="/about"
                style={{
                  color: "#fff",
                  marginBottom: "20px",
                  fontSize: "18px",
                  textDecoration: "none",
                }}
              >
                About Us
              </Link>
              <Link
                to="/Home"
                style={{
                  color: "#fff",
                  marginBottom: "20px",
                  fontSize: "18px",
                  textDecoration: "none",
                }}
              >
                Home
              </Link>
              <Link
                to="/cart"
                style={{
                  color: "#fff",
                  marginBottom: "20px",
                  fontSize: "18px",
                  textDecoration: "none",
                }}
              >
                Cart
              </Link>

              <Link
                to="/terms&conditions"
                style={{
                  color: "#fff",
                  marginBottom: "20px",
                  fontSize: "18px",
                  textDecoration: "none",
                }}
              >
                Terms & Conditions
              </Link>
            </Column>
            <Column>
              <Heading>Products</Heading>
              <Link
                to="/categories/phones"
                style={{
                  color: "#fff",
                  marginBottom: "20px",
                  fontSize: "18px",
                  textDecoration: "none",
                }}
              >
                Phones
              </Link>
              <Link
                to="/categories/watches"
                style={{
                  color: "#fff",
                  marginBottom: "20px",
                  fontSize: "18px",
                  textDecoration: "none",
                }}
              >
                Watches
              </Link>
              <Link
                to="/categories/laptops"
                style={{
                  color: "#fff",
                  marginBottom: "20px",
                  fontSize: "18px",
                  textDecoration: "none",
                }}
              >
                Laptops
              </Link>
              <Link
                to="/categories/cameras"
                style={{
                  color: "#fff",
                  marginBottom: "20px",
                  fontSize: "18px",
                  textDecoration: "none",
                }}
              >
                Cameras
              </Link>
            </Column>
            <Column>
              <Heading>Help</Heading>
              <Link
                to="/account/payments"
                style={{
                  color: "#fff",
                  marginBottom: "20px",
                  fontSize: "18px",
                  textDecoration: "none",
                }}
              >
                Payments
              </Link>
              <Link
                to="/account/shipping"
                style={{
                  color: "#fff",
                  marginBottom: "20px",
                  fontSize: "18px",
                  textDecoration: "none",
                }}
              >
                Shipping
              </Link>
              <Link
                to="/account/shopping"
                style={{
                  color: "#fff",
                  marginBottom: "20px",
                  fontSize: "18px",
                  textDecoration: "none",
                }}
              >
                Shopping Details
              </Link>
              <Link
                to="/faq"
                style={{
                  color: "#fff",
                  marginBottom: "20px",
                  fontSize: "18px",
                  textDecoration: "none",
                }}
              >
                FAQ
              </Link>
            </Column>
            <Column style={{}}>
              <div style={{ marginTop: "8px" }}>
                <p
                  style={{ color: "#fff", display: "flex", fontWeight: "bold" }}
                >
                  <img
                    src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png"
                    style={{
                      width: "48px",
                      height: "40px",
                      marginRight: "10px",
                    }}
                  />
                  100% ORIGINAL guarantee for all products
                </p>
                <p
                  style={{ color: "#fff", display: "flex", fontWeight: "bold" }}
                >
                  <img
                    src="https://constant.myntassets.com/web/assets/img/ef05d6ec-950a-4d01-bbfa-e8e5af80ffe31574602902427-30days.png"
                    style={{
                      width: "48px",
                      height: "40px",
                      marginRight: "19px",
                    }}
                  />
                  <TbTruckReturn
                    style={{
                      width: "70px",
                      height: "40px",
                      marginRight: "19px",
                    }}
                  />
                  Return within 30days of receiving your order
                </p>
              </div>
            </Column>
            {/* <Column style={{ display: "flex",flexDirection:"column" }}>
							<Heading>Connect</Heading>
							<Link to="/facebook" style={{ color: "#fff", marginBottom: "20px", fontSize: "18px", textDecoration: "none" }}>
								<FaFacebookSquare style={{ margin: "0px 15px 0px 0px", fontSize: "24px" }} />
							</Link>
							<Link to="/instagram" style={{ color: "#fff", marginBottom: "20px", fontSize: "18px", textDecoration: "none" }}>
								<FaInstagramSquare style={{ margin: "0px 15px 0px 0px", fontSize: "24px" }} />
							</Link>
							<Link to="/twitter" style={{ color: "#fff", marginBottom: "20px", fontSize: "18px", textDecoration: "none" }}>
								<FaTwitterSquare style={{ margin: "0px 15px 0px 0px", fontSize: "24px" }} />
							</Link>
							<Link to="/youtube" style={{ color: "#fff", marginBottom: "20px", fontSize: "18px", textDecoration: "none" }}>
								<FaYoutubeSquare style={{ margin: "0px 15px 0px 0px", fontSize: "24px" }} />
							</Link>
						</Column> */}
            <Column>
              <Heading style={{ color: "#ffffff", fontWeight: "600" }}>
                Connect
              </Heading>

              <div style={{ display: "flex", gap: "15px", marginTop: "10px" }}>
                <a
                  href="https://www.facebook.com/flipkart"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#fff" }}
                >
                  <FaFacebookSquare style={{ fontSize: "24px" }} />
                </a>

                <a
                  href="https://www.instagram.com/flipkart"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#fff" }}
                >
                  <FaInstagramSquare style={{ fontSize: "24px" }} />
                </a>

                <a
                  href="https://twitter.com/flipkart"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#fff" }}
                >
                  <FaTwitterSquare style={{ fontSize: "24px" }} />
                </a>

                <a
                  href="https://www.youtube.com/@Flipkart"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#fff" }}
                >
                  <FaYoutubeSquare style={{ fontSize: "24px" }} />
                </a>
              </div>
            </Column>
          </Row>
        </Container>
        <div
          style={{
            // backgroundColor: "#F4EDF2",
            backgroundColor: "#0f1a2c",
            paddingLeft: "30px",
            paddingRight: "30px",
            textAlign: "center",
          }}
        >
          <Copyright />
        </div>
      </Box>
    </>
  );
};
export default Footer;
