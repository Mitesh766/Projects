import { useRouteError } from "react-router-dom"
// to get a detailed info about the error



const Error=()=>{
    const error=useRouteError()
    console.log(error)
    return (
    <div className="err">
        <h1>Oops!!</h1>
        <h1>Something went wrong</h1>
        <h1>{error.status} : {error.statusText}</h1>
    </div>)
}
export default Error