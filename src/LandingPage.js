function LandingPage() {
    return (
      <>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">My App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
              </Nav>
              <Nav>
                <Button variant="outline-primary">Sign up</Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
  
        <Container>
          <h1>Welcome to My App!</h1>
          <p>
            This is a landing page for your app. You can customize it to your
            liking and add more content as needed.
          </p>
          <Button variant="primary">Learn more</Button>
        </Container>
      </>
    );
  }
  
  export default LandingPage;
  