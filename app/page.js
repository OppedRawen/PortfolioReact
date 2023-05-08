import Image from 'next/image'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube} from "react-icons/ai"
import deved from '../public/dev-ed-wave.png';
import design from '../public/design.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
export default function Home() {
  return (
    
    <main className="bg-white px-10">
      

    {/* section */}
    <section className='min-h-screen'>
      <nav className='py-10 mb-12 flex justify-between'>
        <h1 className='text-xl font-burtons'>developedbyed</h1>
        <ul className=' flex items-center'>
          <li><BsFillMoonStarsFill className=' cursor-pointer text-2xl' /></li>
          <li><a className=' bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 text-white px-4 py-2 rounded-md ml-8' href='#'>Resume</a></li>
        </ul>
      </nav>

      <div className=' text-center p-10'>
        <h2 className=' text-5xl py-2 text-teal-600 font-medium'>David Yu</h2>
        <h3 className=' text-2xl py-2'>Full stack Developer</h3>
        <p className='text-md py-5 leading-8 text-gray-800'>hello im a full stack developer</p>
      </div>

      <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
      <AiFillLinkedin />
      <AiFillTwitterCircle />
      <AiFillYoutube />
      </div>

      
        <div className=' relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden' >
          <Image src={deved} layout="fill" objectFit='cover' />
        </div>
    

    </section>

    {/* another section */}

    <section>
      <div>
        <h3 className=' text-3xl py-1'> Services I offer</h3>
        <p className='text-md py-2 leading-8 text-gray-800'>
          I offer design and transcation services for companies and individual, feel free to contact me as a free lance.
        </p>
      </div>

      {/* card system */}
      <div className='text-center shadow-lg p-10 rounded-xl my-10'>
        <div>
          <Image src={design} width={100} height={100}/>
          <h3 className=' text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
          <p className='py-2'>
            Design for the products
          </p>
          <h4>
            design tools I use
          </h4>
        </div>
      </div>
      <div className='text-center shadow-lg p-10 rounded-xl my-10'>
        <div>
          <Image src={code} width={100} height={100}/>
          <h3 className=' text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
          <p className='py-2'>
            Design for the products
          </p>
          <h4>
            design tools I use
          </h4>
        </div>
      </div>
      <div className='text-center shadow-lg p-10 rounded-xl my-10'>
        <div>
          <Image src={consulting} width={100} height={100}/>
          <h3 className=' text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
          <p className='py-2'>
            Design for the products
          </p>
          <h4>
            design tools I use
          </h4>
        </div>
      </div>
    </section>

    {/* section */}
    <section>
      <div>
        <h3 className='text-3xl py-1'>Portfolio</h3>
        <p>blah blah blah blah blah blah</p>
      </div>
      <div>
        <div>
          <Image src={web1}/>
        </div>
      </div>
    </section>

     
    </main>
  )
}
