import { request } from '../helpers/accessAPI';

//post tamu
export const dataPostTamuSuccess = (PostTamuSuccess) => ({
    type:'POST_TAMU_SUCCESS',
    PostTamuSuccess
})

export const dataPostTamuErorr = (PostTamuError) => ({
    type:'POST_TAMU_ERORR',
    PostTamuError
})

export const SaveDataTamu = (nama, jmlKeluarga, alamat, konfirmasi, deskripsi) => {

    return dispatch => {
        return request.post(`/api/datatamu`, {nama, jmlKeluarga, alamat, konfirmasi, deskripsi})
        .then(result => {
            dispatch(dataPostTamuSuccess(result))
        })
        .catch(err => {

            dispatch(dataPostTamuErorr(err))
            
        })
    }
}



