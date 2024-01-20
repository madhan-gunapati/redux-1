const state={
    name:22
}
console.log('came here after using state')
const reducer = (state, action)=>{
    if(action.type === 'yes'){
    return {...state , name:33}
    }
    else{
    console.log('wrong entry dude...')
    return {...state}
    }
}

export default reducer