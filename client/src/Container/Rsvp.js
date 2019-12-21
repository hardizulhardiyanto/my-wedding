import { connect } from 'react-redux';
import Rsvp from '../Component/Rsvp';
import { SaveDataTamu } from '../Action/index';

const mapDispatchToProps = dispatch => ({
    SaveDataTamu: (nama, jmlKeluarga, alamat, konfirmasi, deskripsi) => dispatch(SaveDataTamu(nama, jmlKeluarga, alamat, konfirmasi, deskripsi))
})

export default connect(
    null,
    mapDispatchToProps
)(Rsvp);