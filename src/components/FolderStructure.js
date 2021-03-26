import {useState} from 'react'

const FolderStructure = ({data}) => {
    const toggleDisplay = (e) => {
        const el = e.target;
        console.log(el)
        const sibling = el.nextSibling;
        /* if (el && el.className == 'toggle' && sibling) {
            sibling.classList.toggle('show');
        } */
        if (el && el.className == 'toggle') {
            el.classList.toggle('hide')
        }
        console.log(el)
    }
    return (
        <ul className="folder-str">
        {data.map((curr, index) => (
          <li key={index} onClick={toggleDisplay}>
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