import React, { Component } from 'react';


class toBiner extends Component {
  constructor(){
    super()
    this.state = {
      biner: 0,
      option: "",
      hasil:0,
      
    }
  }

  hitung = () => {
    let biner = this.state.biner
    let decimal = parseInt(biner, 2)
    if(this.state.option === "decimal"){
      return this.setState({
        result: decimal
      })
    }
    if(this.state.option === "octal"){
      return this.setState({
        result: decimal.toString(8)
      })
    }
    if(this.state.option === "hexadecimal"){
      return this.setState({
        result: decimal.toString(16)
      })
    }
  }

  //fungsi untuk mengubah biner
  changeBiner = (event) => {
    this.setState({biner: event.target.value})
  }
  //fungsi untuk pilihan konversinya
  changeOption = (event) => {
    this.setState({option: event.target.value})
  }
  

  render() {
    return (
        <div className="container col-md-6 mt-4">
            <div className="card">
                <div className="card-header bg-danger text-center text-white">
                <h3>Konversi Bilangan Biner</h3>
                </div>
                <div className="card-body">
                    <div className="form-group">
                        <label>Biner</label>
                        <input type="number" className="form-control" onChange={this.changeBiner}></input>
                    </div>
                    <div className="form-group" onChange={this.changeOption}>
                        <label>Pilihan Konversi</label>
                        <select className="form-control">
                            <option value="decimal">Decimal</option>
                            <option value="octal">Octal</option>
                            <option value="hexadecimal">Hexadecimal</option>
                        </select>
                    </div>
                    <br></br>
                    <div className="form-group">
                    <button className="btn btn-danger form-control" onClick={this.hitung}>Konversi</button>
                    </div>
                    <h5 className="p-3 form-control text-center">{this.state.hasil}</h5>
                </div>
            </div>
        </div>
    )

}

}

export default toBiner;