import {useState} from "react"

function App() {
const [color,setColor]=useState("olive")

  return (
    <>
    <div className="mainDIve"
    style={{backgroundColor:color}}>
      BG COlOR
    </div>
    <div className="subDIv">
        <div className="flex flex-wrap justify-center gap-3  bg-white px-3 py-3 rounded-3xl" >
         
          <button
          className="outline-none px-4 "
          style={{backgroundColor:"red"}}
          onClick={()=>setColor("red")}
          >Red</button>
          
          < button
          className="outline-none px-4 "
          style={{backgroundColor:"yellow"}}
          onClick={()=>setColor("yellow")}
          >yellow</button>

           < button
          className="outline-none px-4 "
          style={{backgroundColor:"blue"}}
          onClick={()=>setColor("blue")}
          >blue</button>

            < button
          className="outline-none px-4 "
          style={{backgroundColor:"purple"}}
          onClick={()=>setColor("purple")}
          >purple</button>

        </div>

    </div>
      
    </>
  )
}

export default App
