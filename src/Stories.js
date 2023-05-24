import React,{useEffect} from 'react'
import { useGlobalContext } from './Context'

export default function Stories() {
  const {hits,is_Loading,removePost} = useGlobalContext()
  if(is_Loading){
    return <>
    <h2>loading</h2>
    </>
  
  }
   
  return (
    <>
   <div className="stories-div">
    {
        hits.map((curPost)=>{
            const {title,author,objectID,url,num_comments} = curPost;
            return <>
            <div className="card" key={objectID}>
                <h2>{title}</h2>
                <p>
                    By <span>{author}</span> | <span> {num_comments} </span>comments
                </p>
                <div className="card-button">
                    <a href="{url}" target="_blank">
                        Read More
                    </a>
                    <a href="#" onClick={()=>removePost(objectID)}>
                        Remove
                        </a>
                </div>

            </div>
           </>
                
        })
    }
    </div>
  
    
    </>
  )
}
