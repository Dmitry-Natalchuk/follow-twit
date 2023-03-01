import s from "./Container.module.css"
import { UserCard } from "components/UserCard/UserCard"
import users from "./user.json"


export const Container = () => {
    return(
        <ul>
            <div className={s.container}>
                <img 
                    src={require("images/twitImages.png")}
                    alt="img"
                />
                <UserCard users={users}/>
            </div>
        </ul>
    )
}