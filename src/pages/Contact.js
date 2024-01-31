import Person from '../components/Person'

const tiedot = [
  'Lauri Riihimäki',
  'Sähköposti: Lauri.Riihimaki@edu.keuda.fi'
];

function Contact() {
  return (
    <div className='Page'>
      <h1>Yheystiedot
      </h1>
      <Person photo='lauri.jpg' name={tiedot[0]} email={tiedot[1]}/>
    </div>
    );
}

export default Contact;
