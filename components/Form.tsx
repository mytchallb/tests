import React from 'react'

const Form = () => {
  return (
    <form className='w-full max-w-[800px]'>
            <div className='mb-4'>
              <label className='block mb-2 font-semibold text-[#0D857B]' htmlFor='name'>Naam *</label>
              <input className='w-full border border-gray-400 rounded h-10 pl-2 tracking-wider outline-none' type="text" name="name" id="name" placeholder='Vul hier uw naam in'/>
            </div>
            <div className='mb-4'>
              <label className='block mb-2 font-semibold text-[#0D857B]' htmlFor='email'>E-mail *</label>
              <input className='w-full border border-gray-400 rounded h-10 pl-2 tracking-wider outline-none' type="email" name="email" id="email" placeholder='Vul hier uw e-mail in'/>
            </div>
            <div className='mb-4'>
              <label className='block mb-2 font-semibold text-[#0D857B]' htmlFor='telephone'>Telefoon</label>
              <input className='w-full border border-gray-400 rounded h-10 pl-2 tracking-wider outline-none' type="tel" name="telephone" id="telephone" placeholder='Vul hier uw telefoonnummer in'/>
            </div>
            <div className='mb-4'>
              <label className='block mb-2 font-semibold text-[#0D857B]' htmlFor='subject'>Onderwerp *</label>
              <input className='w-full border border-gray-400 rounded h-10 pl-2 tracking-wider outline-none' type="text" name="subject" id="subject" placeholder='Vul hier het onderwerp in'/>
            </div>
            <div className='mb-4'>
              <label className='block mb-2 font-semibold text-[#0D857B]' htmlFor='message'>Bericht *</label>
              <textarea className='w-full border border-gray-400 rounded p-2 resize-none outline-none' name="message" id="message" rows={8} placeholder='Vul hier uw bericht in over wat uw voor ogen heeft.'/>
            </div>
            <div className="block">
              <div className="my-4">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="w-6 h-6 rounded"  />
                  <span className="ml-2">Ik ga akkoord met het versturen en opslaan van mijn gegevens</span>
                </label>
                <p>SOS Woning verwerkt uw persoonsgegevens met het oog op klanten- of prospectenbeheer. Indien u dit als prospect niet wil, volstaat een e-mail. Met vragen of klachten over gegevensverwerking kan u terecht bij de Gegevensbeschermingsautoriteit: <a href="https://www.privacycommission.be/" className='text-[#0D857B] underline font-bold hover:text-teal-600'>https://www.privacycommission.be/</a></p>
              </div>
            </div>
            <button className='bg-[#0D857B] px-4 py-2 hover:bg-teal-600 text-white' type='submit'>VERZENDEN</button>
          </form>
  )
}

export default Form