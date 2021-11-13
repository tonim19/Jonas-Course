import { Component } from "react";
import PreviewCollection from "../../components/preview-collection/preview-collection";
import ShopData from "./shop.data";

class ShopPage extends Component {
  constructor() {
    super();
    this.state = {
      collections: ShopData,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => {
          return <PreviewCollection key={id} {...otherCollectionProps} />;
        })}
      </div>
    );
  }
}

export default ShopPage;
