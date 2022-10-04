import React from 'react'

export const Doctor2 = () => {
    let arr1 = [
        {
          img: "https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip",
        },
        {
          img: "https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip",
        },
        {
          img: "https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip",
        },
        {
          img: "https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip",
        },
       
        
      ];
  return (
    
        
<section className="text-gray-600 body-font">
    <h1  className=" mx-4 sm:w-2/5 text-gray-900 font-extrabold text-5xl mb-2 sm:mb-0" >
        Expert Doctors
    </h1>
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap -m-4">

        {
            arr1.map(
                (i)=>{
                    return(
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                        <a className="block relative h-56 rounded overflow-hidden">
                          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={i.img}/>
                        </a>
                        <div className="mt-4">
                          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Expertise</h3>
                          <h2 className="text-gray-900 title-font text-lg font-medium">Name</h2>
                         
                        </div>
                      </div>
                    )
                }
            )
        }

        


        
      </div>
    </div>
  </section>
  )
}
