import React, { Component } from 'react';


class toDecimal extends Component {
  constructor(){
    super()
    this.state = {
      decimal: 0,
      option: "",
      hasil:0,
      
    }
  }
  hitung = () => {
    const decimal = +this.state.decimal
    if (this.state.option === "biner") {
        return this.setState({
            result: decimal.toString(2)
        })
    } else if (this.state.option === "octal") {
        return this.setState({
            result: decimal.toString(8)
        })
    } else if (this.state.option === "hexadecimal") {
        return this.setState({
            result: decimal.toString(16)
        })
    }
}

  //fungsi untuk mengubah Decimal
  changeDecimal = (event) => {
    this.setState({decimal: event.target.value})
  }
  //fungsi untuk pilihan konversinya
  changeOption = (event) => {
    this.setState({option: event.target.value})
  }
  

  render() {
    return (
        <div className="container col-md-6 mt-4">
            <div className="card">
                <div className="card-header bg-warning text-center text-white">
                <h3>Konversi Bilangan Decimal</h3>
                </div>
                <div className="card-body">
                    <div className="form-group">
                        <label>Decimal</label>
                        <input type="number" className="form-control" onChange={this.changeDecimal}></input>
                    </div>
                    <div className="form-group" onChange={this.changeOption}>
                        <label>Pilihan Konversi</label>
                        <select className="form-control">
                            <option value="biner">Biner</option>
                            <option value="octal">Octal</option>
                            <option value="hexadecimal">Hexadecimal</option>
                        </select>
                    </div>
                    <br></br>
                    <div className="form-group">
                    <button className="btn btn-warning form-control" onClick={this.hitung} >Konversi</button>
                    </div>
                    <h5 className="p-3 form-control text-center">{this.state.hasil}</h5>
                </div>
            </div>
        </div>
    )

}

}

export default toDecimal;