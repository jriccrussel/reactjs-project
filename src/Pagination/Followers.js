// avatar_url, html_url, login - object properties coming from the data
const Followers = ({ avatar_url, html_url, login }) => {
    return (
      <article className='card'>
        <img src={avatar_url} alt={login} />
        <h4>${login}</h4>
        <a href={html_url} className='btn'>
          view profile
        </a>
      </article>
    )
  }
  
  export default Followers