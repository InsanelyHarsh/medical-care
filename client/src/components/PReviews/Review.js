import React from 'react'

export const Review = () => {
  return (
   
    <section class="text-gray-600 body-font my-6">
         <h1  className=" mx-4 sm:w-2/5 text-gray-900 font-extrabold text-5xl mb-2 sm:mb-0" >
Patients Reviews
</h1>
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap -mx-4 -mb-10 text-center">


        <div class="sm:w-1/2  mb-10 px-3">
          <div class="rounded-3xl h-64 overflow-hidden">
            <img alt="content" class="object-cover object-center w-full" src="https://s3.amazonaws.com/utep-uploads/wp-content/uploads/online-regis-college/2019/10/25053139/Nurse-talking-with-patient-768x512.jpg"/>
          </div>


          <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Cancer Patient</h2>
          <p class="leading-relaxed text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga dolores iusto totam delectus aliquid fugiat facere earum hic sapiente libero! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex natus recusandae modi quisquam autem odit officia quis velit molestias ullam.</p>
          <button class="flex mx-auto mt-6 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-cyan-600 rounded">Know more</button>
        </div>


        <div class="sm:w-1/2 mb-10 px-3">
          <div class="rounded-3xl h-64 overflow-hidden">
            <img alt="content" class="object-cover object-center h-full w-full" src="https://s3.amazonaws.com/utep-uploads/wp-content/uploads/online-regis-college/2019/10/25053139/Nurse-talking-with-patient-768x512.jpg"/>
          </div>
          <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Cancer Patient</h2>
          <p class="leading-relaxed text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates eligendi quis porro iste ratione fugiat molestias magnam! Debitis omnis possimus hic velit eveniet fugiat ea voluptates distinctio quibusdam, doloribus, repudiandae culpa porro facere nobis repellendus modi obcaecati quasi eos id.</p>
          <button class="flex mx-auto mt-6 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-cyan-600 rounded">Know more</button>
        </div>


      </div>
    </div>
  </section>
  )
}
