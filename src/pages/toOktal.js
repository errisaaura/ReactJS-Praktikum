import React, { Component } from 'react';


class toOktal extends Component {
  constructor(){
    super()
    this.state = {
      oktal: 0,
      option: "",
      hasil:0,
      
    }
  }

  hitung = () => {
    const oktal = this.state.oktal
    const decimal = parseInt(oktal, 8)
    if (this.state.option === "decimal") {
        return this.setState({
            result: decimal
        })
    } else if (this.state.option === "biner") {
        return this.setState({
            result: decimal.toString(2)
        })
    } else if (this.state.option === "hexadecimal") {
        return this.setState({
            result: decimal.toString(16)
        })
    }
}

  //fungsi untuk mengubah oktal
  changeOktal = (event) => {
    this.setState({oktal: event.target.value})
  }
  //fungsi untuk pilihan konversinya
  changeOption = (event) => {
    this.setState({option: event.target.value})
  }
  

  render() {
    return (
        <div className="container col-md-6 mt-4">
            <div className="card">
                <div className="card-header bg-primary text-center text-white">
                <h3>Konversi Bilangan Oktal</h3>
                </div>
                <div className="card-body">
                    <div className="form-group">
                        <label>Oktal</label>
                        <input type="number" className="form-control" onChange={this.changeOktal}></input>
                    </div>
                    <div className="form-group" onChange={this.changeOption}>
                        <label>Pilihan Konversi</label>
                        <select className="form-control">
                            <option value="decimal">Decimal</option>
                            <option value="Biner">Biner</option>
                            <option value="hexadecimal">Hexadecimal</option>
                        </select>
                    </div>
                    <br></br>
                    <div className="form-group">
                    <button className="btn btn-primary form-control" onClick={this.hitung} >Konversi</button>
                    </div>
                    <h5 className="p-3 form-control text-center">{this.state.hasil}</h5>
                </div>
            </div>
        </div>
    )

}

}

export default toOktal;