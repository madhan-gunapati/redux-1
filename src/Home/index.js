import Store from "../store"

const Home = ()=>{
    
    console.log(Store.getState())
    return <div>
        <p>From the Home......</p>
        <button type='button' onClick={()=>{
            console.log('clicked button')
            Store.dispatch({type:'yes'})}}>Click</button>
    </div>
}
export default Home