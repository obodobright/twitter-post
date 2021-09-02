import React, { useState } from 'react';
import data from './data'
import Tweet from './tweet';

function TweetList(){
    const [user, setUser] = useState(data)
    
    function handleLike(id){
        const upLike = user.map((user)=> {
        if(user.id === id){
            user.like = user.like + 1
        }
        return user
        })
        setUser(upLike)
        console.log(id)
    }

    function handleRetweet(id){
             const upRetweet = user.map((user)=> {
            if(user.id === id){
                user.retweet = user.retweet + 1
            }
            return user
            })
            setUser(upRetweet)
           
        
    }
    return(
        <React.Fragment>
            {user.map((user)=>(
                <Tweet key={user.id} user={user} upLike={handleLike} upRetweet={handleRetweet} />
            ))}
        </React.Fragment>
    )
}
export default TweetList