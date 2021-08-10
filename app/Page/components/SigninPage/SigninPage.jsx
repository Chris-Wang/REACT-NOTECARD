import React from "react";
import styled from "styled-components";
import SignInLogo from "../../../../components/Image/SignInLogo";
import logoImage from "../../../../components/Image/HeaderLogo/logo.png";
import FormInput from "../../../../components/InputBox/components/FormInput";
import LoginBtn from "../../../../components/Button/components/LoginBtn";

const SignCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 380px;
  height: 500px;

  padding: 3px;
  margin: 15px auto 0 auto;
  border-radius: 10px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  border: solid 1px #a86c6d;
  position: relative;
`;

const LogoContainer = styled.div`
  width: 200px;
  height: 100px;
  // border: solid 1px #a86c6d;
  margin-bottom: 12px;
`;

// const FormInput = styled.div`
//   width: 280px;
//   height: 60px;
//   border: solid 1px #a86c6d;
//   margin-top: 6px;
// `;

// const LoginBtn = styled.div`
//   margin-top: 12px;
//   width: 280px;
//   height: 40px;
//   border: solid 1px #a86c6d;
// `;

const Divider = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 280px;
  height: 20px;
  margin-top: 12px;
`;

const DividerLabel = styled.div`
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: 0.1px;
  text-align: center;
`;

const DividerLine = styled.div`
  width: 110px;
  height: 1px;
  background-color: #f4ded7;
  margin: 0 10px;
`;

class SigninPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      password: null,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <>
        <SignCard>
          <LogoContainer>
            <SignInLogo src={logoImage} />
          </LogoContainer>
          <form onSubmit={this.handleSubmit}>
            <FormInput
              name="email"
              type="email"
              handleChange={this.handleChange}
              value={this.state.email}
              label="email"
              required
            />
            <FormInput
              name="password"
              type="password"
              value={this.state.password}
              handleChange={this.handleChange}
              label="password"
              required
            />
            <LoginBtn>Login</LoginBtn>
          </form>
          <Divider>
            <DividerLine />
            <DividerLabel>OR</DividerLabel>
            <DividerLine />
          </Divider>
          <LoginBtn>Login Via Google</LoginBtn>
        </SignCard>
      </>
    );
  }
}

export default SigninPage;
