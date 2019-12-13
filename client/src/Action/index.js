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

export const SaveDataTamu = (nama, email, jmlKeluarga, alamat, deskripsi) => {

    return dispatch => {
        return request.post(`/api/datatamu`, {nama, email, jmlKeluarga, alamat, deskripsi})
        .then(result => {
            dispatch(dataPostTamuSuccess(result))
        })
        .catch(err => {

            dispatch(dataPostTamuErorr(err))
            
        })
    }
}



