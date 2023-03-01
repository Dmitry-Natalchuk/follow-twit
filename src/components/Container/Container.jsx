import { UserCard } from "components/UserCards/UserCard"
import user from "./user.json"

export const Container = () => {
    return(
        <>
        <UserCard users={user} />
        </>
    )
}