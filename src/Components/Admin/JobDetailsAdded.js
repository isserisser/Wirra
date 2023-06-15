function Individualdetails({description,id, deleteEducation,deleteRequirement,deleteDescription,typeIs}) {
return (
<div style={{
    background:"grey",
    width:"100%",
    color:'whitesmoke',
    display:"flex",
    marginBottom:"2vh"
}}>
  <span style={{
   
  }}>{description}</span><span>
    <button>Edit</button>
    <button onClick={()=>{
    console.log(typeIs)
    typeIs=='education'?deleteEducation(id): typeIs=='requirements'?deleteRequirement(id):deleteDescription(id)
    }}>Delete</button>
  </span>
  
</div>)
}
export function ShowFurtherDetails({active, deleteEducation,deleteRequirement,deleteDescription,typeIs}){


    
    return(
        <section className="showFurtherDetails">
    {active.length==0?<span>Nothing to see here</span>:active.map((description)=>{
        return <Individualdetails key={description.id} typeIs={typeIs} description={description.value} id={description.id}  deleteDescription={deleteDescription} deleteEducation={deleteEducation} deleteRequirement={deleteRequirement}/>
    })}
    </section>
    )
}

export default function JobDetailsAdded({education,jobRequirements,jobDescription,setEntryMode,setActive, setTypeIs}){
console.log(education)
return(
    <>
    <section className="jobdetailscontainer">
    <p>Click below to see what you have added</p>
    
    <div className="jobdetailsadded" onClick={()=>{
        setEntryMode((entryMode)=>!entryMode)
        setActive(education)
        setTypeIs('education')
    }}><b>Education</b>
    <div className='jobdetailsItems'><span>{education.length==0?"No details added":education[education.length-1].value.length<=25?education[education.length-1].value:education[education.length-1].value.slice(0,26)+"..."}</span><span className="total">{education.length}</span></div>
    </div>
   

    <div className="jobdetailsadded" onClick={()=>{
        setEntryMode((entryMode)=>!entryMode)
        setActive(jobRequirements)
        setTypeIs('requirements')
       
    }}><b>Job requirements</b>
    <div className='jobdetailsItems'><span>{jobRequirements.length==0?"No details added":jobRequirements[jobRequirements.length-1].value.length<=25?jobRequirements[jobRequirements.length-1].value:jobRequirements[jobRequirements.length-1].value.slice(0,26)+"..."}</span><span className="total">{jobRequirements.length}</span></div>
    </div>
   

    <div className="jobdetailsadded" onClick={()=>{
        setEntryMode((entryMode)=>!entryMode)
        setActive(jobDescription)
        setTypeIs('description')
    }}><b>Job description</b>
    <div className='jobdetailsItems'><span>{jobDescription.length==0?"No details added":jobDescription[jobDescription.length-1].value.length<=25?jobDescription[jobDescription.length-1].value:jobDescription[jobDescription.length-1].value.slice(0,26)+"..."}</span><span className="total">{jobDescription.length}</span></div>
   </div>
   
    </section>
    </>
)
}