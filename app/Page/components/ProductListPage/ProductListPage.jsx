import React from "react";
import styled from "styled-components";
import getExploreNote from "../../../../apis/getExploreNote";
import getExploreProduct from "../../../../apis/getExploreProduct";
import ProductRatingStar from "../../../../components/MiniCard/ProductMiniCard/components/ProductRatingStar";
import Select from "react-select";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const Title = styled.div`
  height: 49px;
  width: 500px;
  margin-left: 74px;
  font-family: Prata;
  font-size: 30px;
  font-weight: 400;
  line-height: 49px;
  text-align: left;
`;

const Card = styled.div`
  width: 300px;
  height: 500px;
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

const Img = styled.img`
  height: 278px;
  width: 278px;
  border-radius: 20px;
  margin: 5px auto;
`;

const Name = styled.div`
  height: 52px;
  width: 278px;
  font-family: Poppins;
  font-size: 15px;
  font-weight: 600;
  line-height: 52px;
  text-align: left;
  margin: 5px auto;
`;

const Des = styled.div`
  height: 52px;
  width: 278px;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0.025em;
  text-align: left;
  color: #7c7b87;
  margin: 5px auto;
`;

const Rate = styled.div`
  height: 52px;
  width: 278px;
  text-align: left;
  margin: 5px auto;
`;
const Filter = styled.div`
  height: 31px;
  width: 308px;
  margin-left: 74px;
  border-radius: 0px;
  margin-top: 20px;
  margin-bottom: 80px;
  display: inline-block;
`;

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

class ProductListPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productsData: null,
      noteData: null,
    };
    this.handleNoteChange = this.handleNoteChange.bind(this);
    this.handleProductChange = this.handleProductChange.bind(this);
  }

  handleNoteChange(newNote) {
    this.setState({
      noteData: newNote,
    });
  }

  handleProductChange(newProduct) {
    this.setState({
      productsData: newProduct,
    });
  }
  componentDidMount() {
    getExploreNote().then(this.handleNoteChange);
    getExploreProduct().then(this.handleProductChange);
  }

  componentDidUpdate() {}

  render() {
    const backend = "http://localhost:8080";
    const { productsData } = this.state;
    console.log(this.state.productsData);

    if (!productsData) {
      return <Container>Loading...</Container>;
    }

    return (
      <>
        <Title>Face Care</Title>
        <Filter>
          <Select options={options} placeholder="Sort by (Please Select One)" />
        </Filter>
        <Filter>
          <Select options={options} placeholder="Refine by" />
        </Filter>

        <Container>
          {productsData.map((products) => (
            <Card key={products.productId}>
              <Img></Img>
              <Name>Product Name</Name>
              <Des>Product info Lorem ipsum dolor sitecter situoemp</Des>
              <Rate>
                <ProductRatingStar rating={products.rating} />
              </Rate>
            </Card>
          ))}
        </Container>
      </>
    );
  }
}

export default ProductListPage;
