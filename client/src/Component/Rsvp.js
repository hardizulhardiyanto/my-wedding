import React, { Component } from 'react';
import Swal from 'sweetalert2';



export default class Rsvp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nama: '',
            jmlKeluarga: '1',
            alamat: '',
            konfirmasi:'hadir',
            deskripsi: '',
        };
        this.handleNama = this.handleNama.bind(this);
        this.handlejmlKeluarga = this.handlejmlKeluarga.bind(this);
        this.handleAlamat = this.handleAlamat.bind(this);
        this.handleKonfirmasi = this.handleKonfirmasi.bind(this);
        this.handleDeskripsi = this.handleDeskripsi.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    handleNama(e) {
        this.setState({ nama: e.target.value })
    }

    
    handlejmlKeluarga(e) {
        this.setState({ jmlKeluarga: e.target.value })
    }

    handleAlamat(e) {
        this.setState({ alamat: e.target.value })
    }

    handleKonfirmasi(e) {
        this.setState({ konfirmasi: e.target.value })
    }

    handleDeskripsi(e) {
        this.setState({ deskripsi: e.target.value })
    }

    handleSave(e) {

        e.preventDefault()
        let nama = this.state.nama;
        let jmlKeluarga = this.state.jmlKeluarga;
        let alamat = this.state.alamat;
        let konfirmasi = this.state.konfirmasi;
        let deskripsi = this.state.deskripsi;

        if (nama && jmlKeluarga && alamat && konfirmasi && deskripsi) {

            Swal.fire(
                'Thank you!! we are waiting for your arrival',
                '',
                'success'
            )

            this.props.SaveDataTamu(
                this.state.nama,
                this.state.jmlKeluarga,
                this.state.alamat,
                this.state.konfirmasi,
                this.state.deskripsi
            )
        } else {
            Swal.fire(
                'sorry!!, the field cannot be empty',
                '',
                'error'
            )
        }




        this.setState({ nama: '', jmlKeluarga: '1', alamat: '', konfirmasi:'hadir', deskripsi: '' })


    }


    render() {


        return (

            <section className="rsvp-section section-padding parallax" data-bg-image={"../../../stylesheets/images/rsvp-bg.jpg"} data-speed="7" id="rsvp">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="section-title-white">
                                <div className="vertical-line"><span><i className="fi flaticon-two"></i></span></div>
                                <h2>Join our wedding celebration</h2>
                            </div>
                        </div>
                    </div>
                    <form>
                        <div className="form-group row">
                            <label htmlFor="nama" className="col-sm-2 col-form-label"><strong>Nama</strong></label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="nama" placeholder="nama" value={this.state.nama} onChange={this.handleNama} required />
                            </div>
                        </div>
                        
                        <div className="form-group row">
                            <label htmlFor="jmlKeluarga" className="col-sm-2 col-form-label"><strong>Jumlah Tamu</strong></label>
                            <div className="col-sm-10">
                                <select id="jmlKeluarga" className="form-control" value={this.state.jmlKeluarga} onChange={this.handlejmlKeluarga}>
                                    <option defaultChecked value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="alamat" className="col-sm-2 col-form-label"><strong>Alamat</strong></label>
                            <div className="col-sm-10">
                                <textarea id="alamat" className="form-control" rows="3" placeholder="alamat" value={this.state.alamat} onChange={this.handleAlamat} required />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="jmlKeluarga" className="col-sm-2 col-form-label"><strong>Konfirmasi Kehadiran</strong></label>
                            <div className="col-sm-10">
                                <select id="jmlKeluarga" className="form-control" value={this.state.konfirmasi} onChange={this.handleKonfirmasi}>
                                    <option defaultChecked value="hadir">Hadir</option>
                                    <option value="tidak_hadir">Tidak Bisa Hadir</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="deskripsi" className="col-sm-2 col-form-label"><strong>Ucapan Selamat </strong></label>
                            <div className="col-sm-10">
                                <textarea id="deskripsi" className="form-control" rows="3" placeholder="Selamat Semoga Sakinah Mawadah Warrahmah" value={this.state.deskripsi} onChange={this.handleDeskripsi} required />
                            </div>
                        </div>

                        <div className="form-group row">
                            <div className="col-sm-10">
                                <button type="submit" className="btn btn-success" style={{ width: "7em" }} onClick={this.handleSave}>
                                    <text style={{ fontWeight: "bold" }}>Add</text>
                                </button>
                            </div>
                        </div>
                    </form>



                </div>
            </section>

        )
    }
}