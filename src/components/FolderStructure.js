import {useState} from 'react'

const FolderStructure = ({data}) => {
  
    return (
        <ul>
        {data.map((curr, index) => (
          <li key={index} onClick={() => console.log(index)}>
            {curr.title}
            {curr.children && (
              <FolderStructure data={curr.children} />  
            )}
          </li>
        ))}
      </ul> 
    )

}
export default FolderStructure;