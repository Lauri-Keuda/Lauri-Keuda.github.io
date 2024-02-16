import Person from '../components/Person'
import Contact from '../components/Contact';

const tiedot = [
  'Lauri Riihimäki',
  'Sähköposti: Lauri.Riihimaki@edu.keuda.fi'
];

function ContactPage() {
  return (
    <div className='page'>
      <div className='contactInfo-container'>
        <h2>Yheystiedot</h2>
        <Person photo='lauri.jpg' name={tiedot[0]} email={tiedot[1]}/>

      </div>
      <Contact />
    </div>
    );
}

export default ContactPage;
