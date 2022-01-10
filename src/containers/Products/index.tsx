import "./index.css";

import { Component } from "react";

import Card from "../../components/Card";

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
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Products</h1>
        </div>
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
      </main>
    );
  }
}

export default Products;
