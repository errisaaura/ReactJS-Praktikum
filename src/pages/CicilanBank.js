import React, { Component } from 'react';

class CicilanBank extends Component {
  constructor(){
    super()
    this.state = {
      nominal: 0,
      bunga: 0,
      periode:0,
      hasil: 0
    }
  }

  //fungsi untuk mengubah nominal
  changeNominal = (event) => {
    this.setState({nominal: event.target.value})
  }
  //fungsi untuk mengubah bunga
  changeBunga = (event) => {
    this.setState({bunga: event.target.value})
  }
  //fungsi untuk mengubah periode
  changePeriode = (event) => {
    this.setState({periode: event.target.value})
  }

  render() {
    return (
        <div className="container col-md-6 mt-4">
            <div className="card">
                <div className="card-header bg-primary text-center text-white">
                    <h3>Cicilan Bank</h3>
                </div>
                <div className="card-body">
                    <div className="form-group">
                        <label>Nominal</label>
                        <input type="number" className="form-control" onChange={this.changeNominal}></input>
                    </div>
                    <div className="form-group">
                        <label>Bunga</label>
                        <input type="number" className="form-control" onChange={this.changeBunga}></input>
                    </div>
                    <div className="form-group">
                        <label>Periode</label>
                        <select className="form-control" onChange={this.changePeriode}>
                            <option value="6">6 Bulan</option>
                            <option value="12">12 Bulan</option>
                            <option value="18">18 Bulan</option>
                            <option value="24">24 Bulan</option>
                        </select>
                    </div>
                    <br></br>
                    <div className="form-group">
                        <button className="btn btn-secondary form-control"> Hitung </button>
                    </div>
                    <h5 className="p-3 form-control text-center">{this.state.hasil}</h5>                   
                </div>
            </div>
        </div>
    );
}


  

}

export default CicilanBank;