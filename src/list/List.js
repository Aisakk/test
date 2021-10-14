
import './List.css';
import User from '../user/User';
import { useState, useEffect } from 'react';
import { Octokit } from '@octokit/core';


function List(){
    const [users, setUsers] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    async function getUser(){
        const octokit = new Octokit({auth: `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`})
        let user = await octokit.request('GET /search/users',{
            q: 'q'
        })
        setUsers(user.data.items)
    }

    function searchUser( event ){
        setSearchTerm(event.target.value);
        
    }
    useEffect(()=>{
        getUser()
     
    },[])

 
    return (
        <div>
               <div className="container-search">
                    <div className="search">
                        <input type="text" placeholder="Search User" value={searchTerm} onChange={searchUser} />
                    </div>
                </div>
            <div className="container-list">
                {
                    users.filter((val)=>{
                        if(searchTerm == ''){
                            return val
                        }
                        else if(val.login.includes(searchTerm)){
                            return val
                        }
                    }).map((value,index)=>{
                        return <User key={index} avatar_url={value.avatar_url} user={value.login} html_url={value.html_url} organizations_url={value.organizations_url} repos_url={value.repos_url}/>
                    })
                  //   users.map((value, index)=><User key={index} avatar_url={value.avatar_url} user={value.login} html_url={value.html_url} organizations_url={value.organizations_url} repos_url={value.repos_url}/>)
                    
                }

            </div>
        </div>
    );
}

export default List;