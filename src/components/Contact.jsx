const Contact = () => {
  const formSubmit = () => {
    const name = document.getElementById("contact-name")
    const email = document.getElementById("contact-email")
    const message = document.getElementById("contact-message")

    const info = {
      "name": name.value,
      "email": email.value,
      "massage": message.value
    }

    console.log(info)

    alert("This feature is still under development...")


    name.value = ""
    email.value = ""
    message.value = ""
  }

  return (
    <div className='contact-container'>
      <h2 className='chapter-header'>Contact</h2>
      <form className='contact-form'>
        <label>Name</label>
        <input id='contact-name' name='name' type="text" placeholder='Your name goes here' required/>
        <label>Email</label>
        <input id='contact-email' name='email' type='text' placeholder='Email goes here' required></input>
        <label>Message</label>
        <textarea id="contact-message" name="message" rows="6" placeholder="Write your message here" required></textarea>
        <input id='contact-button' className='button' type='button' value="Submit" onClick={formSubmit}/>
      </form>
    </div>
  )
}

export default Contact