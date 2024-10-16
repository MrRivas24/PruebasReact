export function TwitterFollowCard ({userName, name, isFollowing}) {
    //tipo 1 para constante 
    const imageSrc = 'https://unavatar.io/sindresorhus@gmail.com/${userName}'
    return(
        <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img className='tw-followCard-avatar'
            //tipo 2 para leer STRINGS src={https://unavatar.io/sindresorhus@gmail.com/${userName}}
            src={imageSrc} alt="" />
            <div className='tw-followCard-info'>
                <strong>{name}</strong>
                <span className='tw-followCard-infoUserName'>@{userName}</span>
            </div>
        </header>

        <aside>
            <button className='tw-followCard-button'>
                Follow
            </button>
        </aside>
    </article>
    )
}