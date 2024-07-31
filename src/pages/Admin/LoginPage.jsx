import imgLogin from '../../assets/images/login.png';

const LoginPage = () => {
  return (
    <>
      <div className='container mx-auto flex flex-col justify-center items-center min-h-[90vh] p-5'>
          <div>
            <img src="/logo.jpg" width="280" className='mx-auto'/>
          </div>
          <div className='flex flex-wrap md:flex-nowrap justify-center items-center w-full max-w-xl max-h-xl shadow-md rounded-lg bg-[#eee] p-0 m-0'>
            <div className='w-full'>
              <img src={imgLogin} className='w-[100%] object-contain mx-auto' />
            </div>
            <div className='w-full p-5'>
              <h1 className='text-[#233C96] font-["lexend"] font-bold text-[25px] text-center my-5'>Login</h1>
              <form>
                <div className="mb-5">
                  <label for="email" className="block mb-2 text-sm font-medium text-[#233C96]">Your email</label>
                  <input type="email" id="email" className="text-sm rounded-lg focus:border-blue-500 block w-full max-w-lg p-2.5 bg-gray-300 border-gray-600 placeholder-gray-400 text-[#233C96]" placeholder="name@gmail.com" required />
                </div>
                <div className="mb-5">
                  <label for="password" className="block mb-2 text-sm font-medium text-[#233C96]">Your password</label>
                  <input type="password" id="password" className="text-sm rounded-lg block w-full max-w-lg p-2.5 bg-gray-300 border-gray-3600 placeholder-gray-400 text-[#233C96] focus:border-blue-500" placeholder="Password" required />
                </div>
                <button type="button" to="/dashboard" className="w-full float-end text-white focus:ring-4 focus:outline-none font-medium rounded-md text-sm sm:w-auto px-5 py-2.5 text-center bg-[#3b71ca] hover:bg-[#4f83d7]">Sign In</button>
              </form>
            </div>
          </div>
      </div>
    </>
  )
}

export default LoginPage