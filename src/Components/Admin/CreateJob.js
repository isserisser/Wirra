import { useRef,useState } from "react"
import JobDetailsAdded, { ShowFurtherDetails } from "./JobDetailsAdded"
import Profile from "./Profile"

export default function CreateJob(){

    //We use ref to capture since we dont need these values to rerender
let refStateData=useRef({title:'',category:'',company:'',location:'',deadline:''})

//Active 
let [active,setActive]=useState([])
let[entryMode,setEntryMode]=useState(true)
let[typeIs,setTypeIs]=useState('')

//stores all data thats been added to the array by the add button
let [education,setEducation]=useState([])
let [jobRequirements,setRequirements]=useState([])
let [jobDescription,setDescription]=useState([])

//Capture onChange data in education,requirement and description fields. We use ref since we dont want it to rerender.
let educationDetail=useRef('')
let requirementDetail=useRef('')
let descriptionDetail=useRef('')

//Clear data after capturing it
let clearEducation=useRef()
let clearRequirement=useRef()
let clearDescription=useRef()


    function handleChange(e){
   refStateData.current[e.target.name]=e.target.value;
  
    }

    function deleteEducation(id){
    console.log("clicked")
      let filteredList=active.filter((item)=>item.id!==id)
      setActive(filteredList)
     setEducation(filteredList)   
    }

    function deleteRequirement(id){
        let filteredList=active.filter((item)=>item.id!==id)
        setActive(filteredList)
       setRequirements(filteredList)   
      }

    function deleteDescription(id){
        let filteredList=active.filter((item)=>item.id!==id)
        setActive(filteredList)
       setDescription(filteredList)   
      }

    return(
<><div style={{backgroundColor:"white", border:'1px solid #9ca3af', height:"100%",position:"sticky",top:"0", textDecoration:'none',fontSize:"24px",display:"flex",marginBottom:"3vh",padding:'3vh'}}>Wira Online</div>
        <div className="jobcreationpage">
       
      
      <section className="jbdeets">
       <Profile/>
      <JobDetailsAdded education={education} jobDescription={jobDescription} jobRequirements={jobRequirements} setEntryMode={setEntryMode} setActive={setActive} setTypeIs={setTypeIs}/>
      </section>

      {entryMode&&<section className="createjobform" >
            <div>
      Job title
            <input name='title' type='text' onChange={handleChange} />
            </div>

            <div>
            Category
            <input name='category' type='text' onChange={handleChange}>
        
            </input>
            </div>

            <div>
           Company
            <input name='company' type='text' onChange={handleChange}/>
            </div>

            <div>
            Location
            <input name='location' type='text' onChange={handleChange} placeholder="City,Country"/>
            </div>

            <div>
            Deadline
            <input name='deadline' type='text' onChange={handleChange}/>
            </div>
            <div>
                
           Education
           <div style={{display:'flex',flexDirection:'row',justifyContent:"center",alignItems:"center",fontSize:'18px',fontWeight:'600'}}>
            <input ref={clearEducation} name='education' type='text' onChange={(e)=>{
                educationDetail.current=e.target.value
            }}/>
           <button className="jobaddbtn" onClick={()=>{
          
          if(educationDetail.current!==""){
            clearEducation.current.value='';
            setEducation((education)=>[...education,{id:crypto.randomUUID(),value:educationDetail.current}])
            educationDetail.current=""
          }

           }}>Add</button> 
            </div>
            </div>

            <div>
          Job requirements
          <div style={{display:'flex',flexDirection:'row',justifyContent:"center",alignItems:"center",fontSize:'18px',fontWeight:'600'}}>
            <input name='requirements' ref={clearRequirement} type='text' onChange={(e)=>{
              requirementDetail.current=e.target.value
            }}/>
           <button className="jobaddbtn" onClick={()=>{
           
           if(requirementDetail.current!==""){
             setRequirements((jobRequirements)=>[...jobRequirements,{id:crypto.randomUUID(),value:requirementDetail.current}])
             clearRequirement.current.value=''
             requirementDetail.current=""
           }
            }}>Add</button> 
            </div>
            </div>

            <div>
           Job description
           <div style={{display:'flex',flexDirection:'row', justifyContent:"center",alignItems:"center",fontSize:'18px',fontWeight:'600'}}>
            <input name='description' ref={clearDescription} type='text' onChange={(e)=>{
                descriptionDetail.current=e.target.value
            }}/>

           <button className="jobaddbtn" onClick={()=>{
             
             if(descriptionDetail.current!==""){
             setDescription((jobDescription)=>[...jobDescription,{id:crypto.randomUUID(),value:descriptionDetail.current}])
             clearDescription.current.value=""
             descriptionDetail.current=""
             }
            }}>Add</button> 
            </div>
            </div>
          
            </section>
}
{!entryMode&&<ShowFurtherDetails active={active} deleteEducation={deleteEducation} typeIs={typeIs} deleteDescription={deleteDescription} deleteRequirement={deleteRequirement}/>}

        </div>
        
        </>
    )
}