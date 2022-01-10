import "./index.css";

import { Component } from "react";

import Card from "../../components/Card";
import PageTitle from "../../components/PageTitle";

class Products extends Component {
  constructor(props: any) {
    super(props);
    this.toggleCheckbox = this.toggleCheckbox.bind(this);
  }

  toggleCheckbox() {
    let checkbox = document.getElementsByClassName("form-check-input");
    let checkboxMain = document.getElementById(
      "main-checkbox"
    ) as HTMLInputElement;

    for (
      let indx = 0, checkboxLen = checkbox.length;
      indx < checkboxLen;
      indx++
    ) {
      let _checkbox = checkbox[indx];

      if (_checkbox instanceof HTMLInputElement) {
        _checkbox.checked = checkboxMain.checked;
      }
    }
  }

  render() {
    return (
      <>
        <PageTitle title="Products" />
        <div className="card-container">
          <Card
            title="Window"
            subtitle=""
            text=""
            link="/window-components"
            linkName="Components"
            anotherLink="/window-products"
            anotherLinkName="Listing"
          />
          <Card
            title="Door"
            subtitle=""
            text=""
            link="/door-components"
            linkName="Components"
            anotherLink="/door-products"
            anotherLinkName="Listing"
          />
        </div>
      </>
    );
  }
}

export default Products;
