function ErrorDisplay({errorMessage}){

  return(
    
        <div className="container mx-auto py-16 px-3 flex justify-center items-center h-screen ">
          <div className="flex flex-col justify-center items-center p-5 bg-neutral-800 rounded-md">
            <div className="text-3xl ">🐣</div>
            <p className="text-white text-xl">{errorMessage}</p>
            <p className="text-sm">To Fix: Reload or check the url correctly</p>
          </div>
        </div>
      
  )
}
export default ErrorDisplay