
export const UserCard = ({users,onClicFollow}) => {
    {users.map(({id,user,tweets,followers,avatar}) => {
        return(
            <li key={id}>
                <div>
                    <img 
                    src={avatar}
                    alt={user}
                    />
                </div>
                <div>
                    <p>
                        {tweets}tweets
                    </p>
                    <p>
                        {followers}followers
                    </p>
                    <button
                    type="submit"
                    onClick={() => onClicFollow(id)}>
                    Follow
                    </button> 
                </div>
            </li>
        )})}
        }
