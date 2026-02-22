import "./index.css"

const Task = (props) =>{
      return(
        <div className="box" style={{backgroundColor:props.color}}>
            
            <h1>{props.name}</h1>
        </div>

    )


}

export default Task