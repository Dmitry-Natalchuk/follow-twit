import s from "./Container.module.css"

export const Container = () => {
    return(
        <ul>
            <div className={s.container}>
                <img 
                    src={require("images/twitImages.png")}
                    alt="img"
                />
            </div>
        </ul>
    )
}