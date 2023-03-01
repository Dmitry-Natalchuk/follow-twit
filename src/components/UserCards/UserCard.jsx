import s from "./UserCard.module.css"

export const UserCard = ({users,onClicFolower}) => (
    <ul className={s.items}>
      {users.map(({id,user,tweets,followers,avatar}) => {
        return (
          <li key={id} className={s.list}>
             <div className={s.containerImg}>
                <img 
                    src={require("images/twitImages.png")}
                    alt="img"
                />
                <div className={s.avatarLine}></div>
                    <img
                      className={s.avatar}
                      src={avatar} 
                      alt={user} />
                <p className={s.tweets}>{tweets} tweets</p>
                <p className={s.followers}>{followers} followers</p>
                <button
                  className={s.btn}
                  type="submit"
                  onClick={() => onClicFolower(id)}>
                  Follow
                </button>
            </div> 
        </li>
        )
      })}
      </ul>
  );