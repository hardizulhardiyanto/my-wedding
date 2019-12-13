import { connect } from 'react-redux';
import Rsvp from '../Component/Rsvp';
import { SaveDataTamu } from '../Action/index';

const mapDispatchToProps = dispatch => ({
    SaveDataTamu: (nama, email, jmlKeluarga, alamat, deskripsi) => dispatch(SaveDataTamu(nama, email, jmlKeluarga, alamat, deskripsi))
})

export default connect(
    null,
    mapDispatchToProps
)(Rsvp);