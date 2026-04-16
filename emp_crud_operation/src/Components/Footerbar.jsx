import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Footerbar() {
  return (
    <footer className="footer-container">
      <Container>
        <Row className="text-center">
          <Col>
            <p className="footer-credit">
              &copy; 2026 Employee CRUD System. All rights reserved.
            </p>
            <div className="social-links">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                Instagram
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                Twitter
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                LinkedIn
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footerbar
