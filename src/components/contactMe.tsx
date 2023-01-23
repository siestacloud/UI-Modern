import React from 'react';

function ContactMe() {
  return (
    <section className='contact'>
      <div className='contact__wrapper ' id='contact'>
        <p className='title' id='services'>Contact me</p>
        <p className='subtitle'>Lorem, ipsum dolor sit amet. Delectus,rem, ipsum dolor sit amet consectetur adipisicing elit. Delectus earum</p>
        <form className='contact__form' action="" method="post">
          <div className='contact__text_items'>
            <input type="text" maxLength={20} autoComplete="off" className="contact__text_item" placeholder="First name" />
            <input type="text" maxLength={20} autoComplete="off" className="contact__text_item" placeholder="Last name" />
          </div>
          <div className='contact__text_items'>
            <input type="text" maxLength={20} autoComplete="off" className="contact__text_item" placeholder="Email" />
            <input type="text" maxLength={20} autoComplete="off" className="contact__text_item" placeholder="Phone number" />
          </div>

          <textarea name="msg" maxLength={1000} rows={3} className="contact__message" placeholder="Message"></textarea>

          <button type="submit" className="contact__btn">Send</button>
        </form>
      </div>
    </section>
  );
}
export default ContactMe;

