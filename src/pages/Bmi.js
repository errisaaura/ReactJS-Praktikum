import React, { Component } from 'react';
// import './App.css';


//import elemen alert
import Alert from '../components/Alert';


class Bmi extends Component {
  constructor(){
    super();
    this.state = {
      weight: 0,
      height: 0,
      bmi: 0,
      Status: ""
    }
  }

  //Nyoba buat hitung bmi nya
  hitungBMI = () => {
    let weight = this.state.weight;
    let height = this.state.height;
    let bmi = weight / (height * height);
    let Status = "";
    if(bmi < 18.5){
      Status = "kurang";
    }else if(bmi >= 18.5 && bmi <= 24.9){
      Status = "normal"
    }else if(bmi >= 25 && bmi <= 29.9){
      Status = "lebih"
    }else if(bmi >= 30){
      Status = "gemuk"
    }else{
      Status = "kosong"
    }

    this.setState({
      bmi,
      Status
    })

  }

  //fungsi untuk mengubah berat 
  changeWeight = (event) => {
    this.setState({weight: event.target.value});
  }
  //fungsi untuk mengubah tinggi
  changeHeight = (event) => {
    this.setState({height: event.target.value})
  }

  //ini buat alert nya habis di hitung
  Alert = () => {
    if(this.state.Status === "kurang"){  
      return <Alert type="warning text-center" >
      <p>Kekurangan Berat Badan</p>
    </Alert>
    }

    if(this.state.Status === "normal"){
      
      return <Alert type="success text-center">
        <p>Berat Badan Normal</p>
      </Alert>
    } 

    if(this.state.Status === "lebih"){
      return <Alert type="warning text-center">
        <p>Kelebihan Berat Badan</p>
      </Alert>
    }

    if(this.state.Status === "gemuk"){
      return <Alert type="danger text-center">
        <p>Sangat Kelebihan berat badan</p>
      </Alert>
    }

    //ini apabila belum memasukkan berat dan tinggi
    if(this.state.Status === "kosong"){
      return <Alert type="secondary text-center">
        <p>Masukkan Berat dan Tinggi Terlebih Dahulu!</p>
      </Alert>
    }

  }
  
  //render hasil
  render(){
    return (
      <div className="container col-md-6 mt-4">
          <div className="card">
                    <div className="card-header bg-secondary text-center text-white">
                        <h3>Body Mass Index</h3>
                    </div>
                    <div className="card-body">
                        <div className="form-group">
                            <label>Berat (kg)</label>
                            <input type="number" className="form-control" onChange={this.changeWeight} />
                        </div>
                        <div className="form-group">
                            <label>Tinggi (m)</label>
                            <input type="number" className="form-control" onChange={this.changeHeight} />
                        </div>
                        <br />
                        <div className="form-group">
                            <button className="btn btn-info form-control mb-2" onClick={this.hitungBMI}>Hitung</button>
                        </div> 
                        <h5 className="p-3 form-control text-center">{this.state.bmi}</h5> 
                        {this.Alert()}
                        
                    </div>
          </div>
        </div>

    );
  }
}

export default Bmi;