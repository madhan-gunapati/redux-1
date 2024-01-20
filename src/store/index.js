import {createStore} from 'redux'

import reducer from './reducer/index.js'

const Store  = createStore(reducer)

export default Store