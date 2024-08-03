import '../../../App.css'
function Comp2() {
    return ( 
        <div className='p-5 comp2'>
            <div className="containers p-4">
  <div className="heading pb-3"><h3>Get a Free consultation with <br/>
 <span className='text-primary'> our placement experts!</span> </h3></div>
  <form className="form" action="">
    <div className="input-field">
      <input
        required=""
        autocomplete="off"
        type="text"
        name="text"
        id="username"
        placeholder='Jhone Doe'
      />
      <label for="username">Full Name</label>
    </div>
    <div className="input-field">
      <input
        required=""
        autocomplete="off"
        type="email"
        name="email"
        id="email"
        placeholder=' jhonedoe@example.com'
      />
      <label for="email">Email</label>
    </div>
    <div className="input-field">
      <input
        required=""
        autocomplete="off"
        type="password"
        name="text"
        id="password"
        placeholder='+91 98537 08765'
      />
      <label for="username">Phone</label>
    </div>

    <div className="btn-container">
      <button  className="btn comp2_button PT_Sans fw-bold fs-6">Request Call Back</button>
    </div>
    <p style={{fontSize:'.79rem'}}>
   
   By Requesting, I aggree to <a href='#'>The Placemate Terms</a> and <a href='#'>Privacy Policy</a></p>
  </form>
</div>

        </div>
     );
}

export default Comp2;