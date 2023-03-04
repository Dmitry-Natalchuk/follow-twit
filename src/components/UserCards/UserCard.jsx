import s from "./UserCard.module.css"

export const UserCard = ({users,onClicFollowers}) => (
    <ul className={s.items}>
      {users.map(({id,user,tweets,followers,avatar,follow}) => {

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
                <p className={s.followers}>{followers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} followers</p>
                <button
                  className={follow ? `${s.activeBtn}` : `${s.btn}`}
                  type="submit"
                  onClick={() => onClicFollowers(id)}>
                   {!follow ? "Follow" : "Following"}
                </button>
            </div> 
        </li>
        )
      })}
      </ul>
  );