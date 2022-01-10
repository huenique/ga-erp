import { Component } from "react";

class Table extends Component {
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
      <table className="table table-hover" id="products-table">
        <thead>
          <tr>
            <th scope="col">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                aria-label="Checkbox for following text input"
                onClick={this.toggleCheckbox}
                id="main-checkbox"
              />
            </th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                aria-label="Checkbox for following text input"
              />
            </th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                aria-label="Checkbox for following text input"
              />
            </th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                aria-label="Checkbox for following text input"
              />
            </th>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Table;
