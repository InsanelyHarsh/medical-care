import React from "react";
import "./History.css";
class IncorporationForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      medicines: [{ name: "" }],
    };
  }

  // ...

  handlemedicineNameChange = (idx) => (evt) => {
    const newmedicines = this.state.medicines.map((medicine, sidx) => {
      if (idx !== sidx) return medicine;
      return { ...medicine, name: evt.target.value };
    });

    this.setState({ medicines: newmedicines });
  };

  handleSubmit = (evt) => {
    const { name, medicines } = this.state;
    alert(`Incorporated: ${name} with ${medicines.length} medicines`);
  };

  handleAddmedicine = () => {
    this.setState({
      medicines: this.state.medicines.concat([{ name: "" }]),
    });
  };

  handleRemovemedicine = (idx) => () => {
    this.setState({
      medicines: this.state.medicines.filter((s, sidx) => idx !== sidx),
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* ... */}
        {this.state.medicines.map((medicine, idx) => (
          <div className="medicine">
            <input
              type="text"
              placeholder={`Medicine #${idx + 1} name`}
              value={medicine.name}
              onChange={this.handlemedicineNameChange(idx)}
            />
            <button
              type="button"
              onClick={this.handleRemovemedicine(idx)}
              className="small"
            >
              -
            </button>
            <button
              type="button"
              onClick={this.handleAddmedicine}
              className="small"
            >
              <strong> +</strong>
            </button>
          </div>
        ))}
        {/* <button>Incorporate</button> */}
      </form>
    );
  }
}
export default IncorporationForm;
