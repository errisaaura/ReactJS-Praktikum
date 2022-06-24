import React, { Component } from 'react'
import {Card} from 'react-bootstrap'

export default class Home extends Component {
  render() {
    return (
      <div className="mt-4 px-4">
        <Card className="shadow px-4 py-4 " style={{ width: '25rem' }}>
        <h4>Perhitungan yang disediakan :</h4>
        <h6>1. Berat Massa Index (Bmi)</h6>
        <h6>2. Cicilan Pembayaran Bank /Bulan</h6>
        <h6>3. Perhitungan Harga Akhir pada Kasir</h6>
        <h6>4. Konversi Perhitungan : </h6>
        <h6 className="px-3">
            - to Decimal
            <br/>
            - to Biner
            <br/>
            - to Oktal
            <br/>
            - to Hexadecimal
        </h6>
        </Card>
      </div>
    )
  }
}
