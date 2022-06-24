import React, {Component} from 'react';

// import './App.css';

class HargaAkhir extends Component {
  constructor() {
    super()
    this.state = {
      hargaAwal : 0,
      ppn: 0,
      diskon: 0,
      hasil: 0
    }
  }

  //ini buat hitung hasilnya
  hitung = () => {
    let hargaAwal = this.state.hargaAwal
    let ppn = this.state.ppn
    let diskon = this.state.diskon
    let hasil =  ((hargaAwal - ((diskon / 100) * hargaAwal)) + ((ppn) / 100) * hargaAwal);

    this.setState({
      hasil
    })
  }

  //fungsi mengubah hargaawal
  changeHargaAwal = (event) => {
    this.setState({hargaAwal: event.target.value})
  }
  //fungsi mengubah ppn
  changePpn = (event) => {
    this.setState({ppn: event.target.value})
  }
  //fungsi mengubah diskon
  changeDiskon = (event) => {
    this.state({diskon: event.target.value})
  }

  render() {
    return (
        <div className="container col-md-6 mt-4">
            <div className="card">
                <div className="card-header bg-danger text-center text-white">
                    <h3>Harga Akhir</h3>
                </div>
                <div className="card-body">
                    <div className="form-group">
                        <label>Harga Awal</label>
                        <input type="number" className="form-control" onChange={this.changeHargaAwal}></input>
                    </div>
                    <div className="form-group">
                        <label>PPN</label>
                        <input type="number" className="form-control" onChange={this.changePpn}></input>
                    </div>
                    <div className="form-group">
                        <label>Diskon</label>
                        <input type="number" className="form-control" onChange={this.changeDiskon}></input>
                    </div>
                    <br></br>
                    <div className="form-group">
                    <button className="btn btn-danger form-control" onClick={this.hitung}>Hitung</button>
                    </div>
                    <h5 className="p-3 form-control text-center" >{this.state.hasil}</h5>
                </div>
            </div>
        </div>
    )
}

}	


export default HargaAkhir;