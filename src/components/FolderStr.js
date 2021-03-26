import {useEffect, useState} from 'react'

const FolderStr = ({data}) => {
   // const cloneData = data.map(obj=> ({ ...obj, display: 'false' }));
    const [expand,setExpand] = useState(false)
   // const [cloneData,setCloneData] = useState(cloneArr);
   // console.log(cloneData);
   console.log(expand);

   useEffect(() => {

  });
  
  const toggle = (el) => {
        console.log(el);
        console.log(expand)
        setExpand((prev)=>!prev.expand)
    } 
   
   
    return (
        <ul >
        {data.map((curr, index) => (
          <li key={index} onClick={() => toggle(curr)}>
            {curr.title}
            {curr.children && expand && <FolderStr data={curr.children}/> }
          </li>
        ))}
      </ul> 
       
    )

}
export default FolderStr;