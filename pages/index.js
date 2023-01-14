import Image from 'next/image'

export default function Home() {
  return (
    <div className=" bg-black flex justify-center items-center h-screen ">
        <div className=' w-full text-center'>
              <Image src='/img/logoNombre.jpg' width={ 535 } height={55}  className=" mx-auto animate__animated animate__pulse" alt='Logo Paloma' /> 
              <p className='p-10 text-white md:text-2xl sm:text-base animate__animated animate__flash'> P R O X I M A M E N T E </p>
        </div>
    </div>
   
  )
}
