import React, { Component } from 'react';
import Swal from 'sweetalert2';



export default class Rsvp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nama: '',
            email: '',
            jmlKeluarga: '1',
            alamat: '',
            deskripsi: '',
        };
        this.handleNama = this.handleNama.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlejmlKeluarga = this.handlejmlKeluarga.bind(this);
        this.handleAlamat = this.handleAlamat.bind(this);
        this.handleDeskripsi = this.handleDeskripsi.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    handleNama(e) {
        this.setState({ nama: e.target.value })
    }

    handleEmail(e) {
        this.setState({ email: e.target.value })
    }

    handlejmlKeluarga(e) {
        this.setState({ jmlKeluarga: e.target.value })
    }

    handleAlamat(e) {
        this.setState({ alamat: e.target.value })
    }

    handleDeskripsi(e) {
        this.setState({ deskripsi: e.target.value })
    }

    handleSave(e) {

        e.preventDefault()
        let nama = this.state.nama;
        let email = this.state.email;
        let jmlKeluarga = this.state.jmlKeluarga;
        let alamat = this.state.alamat;
        let deskripsi = this.state.deskripsi;
        console.log(nama, email, jmlKeluarga, alamat, deskripsi);

        if (nama && email && jmlKeluarga && alamat && deskripsi) {

            Swal.fire(
                'Thank you!! we are waiting for your arrival',
                '',
                'success'
            )

            this.props.SaveDataTamu(
                this.state.nama,
                this.state.email,
                this.state.jmlKeluarga,
                this.state.alamat,
                this.state.deskripsi
            )
        } else {
            Swal.fire(
                'sorry!!, the field cannot be empty',
                '',
                'error'
            )
        }




        this.setState({ nama: '', email: '', jmlKeluarga: '1', alamat: '', deskripsi: '' })


    }


    render() {


        return (

            <section className="rsvp-section section-padding parallax" data-bg-image={"../../../stylesheets/images/rsvp-bg.jpg"} data-speed="7" id="rsvp">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="section-title-white">
                                <div className="vertical-line"><span><i className="fi flaticon-two"></i></span></div>
                                <h2>Join our party</h2>
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
                            <label htmlFor="email" className="col-sm-2 col-form-label"><strong>Email</strong></label>
                            <div className="col-sm-10">
                                <input type="email" className="form-control" id="email" placeholder="email" value={this.state.email} onChange={this.handleEmail} required />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="jmlKeluarga" className="col-sm-2 col-form-label"><strong>Jumlah Keluarga</strong></label>
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
                            <label htmlFor="deskripsi" className="col-sm-2 col-form-label"><strong>Deskripsi</strong></label>
                            <div className="col-sm-10">
                                <textarea id="deskripsi" className="form-control" rows="3" placeholder="deskripsi" value={this.state.deskripsi} onChange={this.handleDeskripsi} required />
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