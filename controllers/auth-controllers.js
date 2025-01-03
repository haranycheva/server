import ctrlWrapper from '../decorators/ctrlWrapper.js'
import * as auth from './auth/index.js'

export default{
    signup: ctrlWrapper(auth.signup),
    signin: ctrlWrapper(auth.signin),
    getInfo: ctrlWrapper(auth.getInfo),
    verificate: ctrlWrapper(auth.verificate)
}