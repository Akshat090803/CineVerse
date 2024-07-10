function About() {
  return (
    <section className="">
      <div className="container mx-auto py-16 px-3 flex justify-center items-center h-screen ">
        <div className="flex flex-col justify-center items-center max-w-[700px] p-5 bg-neutral-800 rounded-md">
          <h2 className="text-2xl lg:3xl font-bold text-white">
            About Project-CineVerse
          </h2>
          <span className="text-white font-bold pt-3 lg:text-2xl">Project Description: </span>
          <p className="pt-1 text-center ">
            
            CineVerse is a React.js project developed by Akshat Jain. It serves
            as a platform to explore and discover movies using various
            technologies and tools.
          </p>
         
         <p className="text-white font-bold pt-3 lg:text-xl">Tools Used:</p>
          <ul className="text-center">
            <li>IDE: VS Code</li>
            <li>Build Tool: Vite</li>
            <li>Frontend Framework: React.js</li>
            <li>State Management: Redux</li>
            <li>CSS Frameworks: Tailwind CSS, Bootstrap</li>
            <li>HTTP Client: Axios</li>
          </ul>
         
        </div>
      </div>
    </section>
  );
}
export default About;
