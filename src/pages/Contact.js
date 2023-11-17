import React from 'react'
import Person from '../components/Person'

const tiedot = [
  'Lauri Riihimäki',
  'Puhelin numero: +358 44 9454827',
  'Sähköposti: Lauri.Riihimaki@edu.keuda.fi'
];

function Contact() {
  return (
    <div className='Page'>
      <h1>Yheystiedot
      </h1>
      <Person photo='lauri.jpg' name={tiedot[0]} phone={tiedot[1]} email={tiedot[2]}/>
    </div>
    );
}

export default Contact;