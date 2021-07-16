import React from 'react';
import styled from 'styled-components';
import DropdownData from '../DropdownData';

const Container = styled.div`
  position: relative;
  display: inline-block;
`;

const Button = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 10px;
  border: 2px solid white;
  padding: 0;
  box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.1);
  transition-property: transform, box-shadow;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
  border: 0;
  cursor: pointer;
  outline: 0;
  font-size: 40px;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 18px 24px rgba(0, 0, 0, 0.15);
  }  
`;

const DropdownButton = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 300px;
  z-index: 2;
  border: 1px solid rgba(0, 0, 0, 0.04);
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14);
`;

// const Ul = styled.ul`
//   list-style: none;
//   padding: 0;
//   margin: 0;
// `;

// const Li = styled.li`
//   padding: 8px 12px;

//   &:hover {
//     background-color: rgba(0, 0, 0, 0.14);
//     cursor: pointer;
//   }
// `;

class Dropdown extends React.Component {

  container = React.createRef();
  state = {
    open: false,
  };

    // this.handleButtonClick = this.handleButtonClick.bind(this);

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }
  
  handleClickOutside = (event) => {
    if (
      this.container.current &&
      !this.container.current.contains(event.target)
    ) {
      this.setState({
        open: false,
      });
    }
  };

  handleButtonClick = () => {
    this.setState((state) => {
      return {
        open: !state.open,
      };
    });
  };

  render() {
    return (
      <div>
        <Container ref={this.container}>
          <Button src={this.props.icon} onClick={this.handleButtonClick}/>
          <span>{this.props.number}</span>
          {this.state.open &&(
            <DropdownButton>
              <DropdownData posts={this.props.posts}/>
              {/* <Ul>
                {this.props.title}
                <Li>A like your post</Li>
                <Li>B like your post</Li>
                <Li>C like your post</Li>
                <Li>D like your post</Li>
              </Ul> */}
            </DropdownButton>
          )}
        </Container>
      </div>
    );
  }
}

export default Dropdown;