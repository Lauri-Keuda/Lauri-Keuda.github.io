function Person(props) {
  return (
    <div className='person-box'>
        {/* <img className='person-img' src={require(`../images/${props.photo}`)} alt='Photo of the person'/> */}
        <div className='person-img'></div>
        <h4 className='person-name'>{props.name}</h4>
        <p className='person-email'>{props.email}</p>
        <p className='person-phone'>{props.phone}</p>
    </div>
  )
}

export default Person