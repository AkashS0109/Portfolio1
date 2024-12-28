import React from 'react';

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "d713aa80-85bd-4904-98e3-661b6ba92331");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  const sub = (event) => {
    event.preventDefault();
    const form = event.target.form;
    alert("Message Sent");
    form.reset(); // Reset the form inputs
  };

  return (
    <div className="p-10 pt-5 text-center" id='contact'>
      <div>
        <h1 className="text-white p-5 xs:text-2xl lg:text-3xl font-bold 2xl:text-4xl animate-pulse">
          Contact Me
        </h1>
      </div>
      <form onSubmit={onSubmit}>
        <div className="flex flex-col items-center">
          <input
            name="mail"
            className="w-2/5 xs:w-2/3 xl:w-1/3 2xl:h-20 h-10 bg-inherit hover:[background-color:#0a112b] border-2 my-4 rounded-xl p-3 text-white text-xl"
            type="email"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            rows="4"
            className="w-2/3 xl:w-1/3 2xl:h-40 bg-black border-2 rounded-lg p-3 text-white text-xl"
            required
            placeholder="Message"
          />
          <button
            className="animate-pulse text-white p-2 px-5 m-5 border-2 text-xl rounded-xl hover:[background-color:#0a112b]  bg-violet-500 border-none
            "
            type="submit"
            onClick={sub}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
