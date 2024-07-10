import { Link } from "react-router-dom"

function Footer(){
  return(
    <footer className=" text-center bg-neutral-600 bg-opacity-35 text-neutral-400 py-2">
      <div className="flex justify-center items-center gap-4">
        <Link to={'/about'}>About</Link>
        <a href="mailto:your-akshatjain702333@gmail.com">Contact</a>
      </div>
      <p>© 2024 CineVerse - Owned by Akshat Jain</p>
    </footer>
  )
}


export default Footer