import { useState,useEffect } from "react";

import { UserCard } from "components/UserCards/UserCard"
import users from "./user.json"

export const Container = () => {
    const [userFollowers, setUserFollowers] = useState(() => {
        const LS = localStorage.getItem("USER_KEY");
        if (LS) {
            return JSON.parse(LS);
        } 
        return users;
    });
    
    const clickBtnFollow = (id) => {
        setUserFollowers(userFollowers.map(user => {
            if (id === user.id) {
                if (!user.follow) {
                    return {
                    ...user,
                    follow: !user.follow,
                    followers: user.followers +1
                    }
            }
            if(user.follow) {
                return{
                    ...user,
                    follow: !user.follow,
                    followers: user.followers -1
                }
            }}
            return user;
        }))
    }

    useEffect(() => {
        localStorage.setItem("USER_KEY", JSON.stringify(userFollowers));
    }, [userFollowers]);
    
    return(
        <UserCard users={userFollowers} 
                  onClicFollowers={clickBtnFollow} />
    )
}