function ContactFormCard() {
  return (
    <main className="w-11/12 max-w-[700px] p-6 mx-auto bg-white sm:p-9 rounded-2xl ">
      <form className="flex flex-col w-full gap-6">
        <h1 className="mb-2 text-3xl font-bold text-custom-grey-900">
          Contact Us
        </h1>
        <div className="flex justify-between gap-4">
          <div className="flex flex-col flex-1 gap-3">
            <label
              htmlFor="firstname"
              className="text-base font-medium text-custom-green-600"
            >
              First Name *
            </label>
            <input
              className="px-2 py-3 border rounded-lg outline-none border-custom-green-600 focus:ring-1 focus:ring-custom-green-600 hover:ring-custom-green-600 hover:ring-1"
              type="text"
              id="firstname"
              name="firstname"
              required
            />
          </div>
          <div className="flex flex-col flex-1 gap-3">
            <label
              htmlFor="lastname"
              className="text-base font-medium text-custom-green-600"
            >
              Last Name *
            </label>
            <input
              className="px-2 py-3 border rounded-lg outline-none border-custom-green-600 focus:ring-1 focus:ring-custom-green-600 hover:ring-custom-green-600 hover:ring-1"
              type="text"
              id="lastname"
              name="lastname"
              required
            />
          </div>
        </div>
        <div className="flex flex-col flex-1 gap-3">
          <label
            htmlFor="email"
            className="text-base font-medium text-custom-green-600"
          >
            Email *
          </label>
          <input
            className="px-2 py-3 border rounded-lg outline-none border-custom-green-600 focus:ring-1 focus:ring-custom-green-600 hover:ring-custom-green-600 hover:ring-1"
            type="email"
            id="email"
            name="email"
            required
          />
        </div>
        <div className="flex flex-col flex-1 gap-3">
          <label className="text-base font-medium text-custom-green-600">
            Query Type *
          </label>
          <div className="flex justify-between gap-4">
            <label
              htmlFor="general-enquiry"
              className="flex items-center justify-start flex-1 gap-4 px-6 py-3 border rounded-lg cursor-pointer border-custom-green-600 has-[:checked]:bg-custom-green-200"
            >
              <input
                className="w-5 h-5 accent-custom-green-600 "
                type="radio"
                id="general-enquiry"
                name="query-type"
                required
              />
              <span className="text-lg font-medium text-custom-green-600 ">
                General Enquiry
              </span>
            </label>
            <label
              htmlFor="support-request"
              className="flex items-center justify-start flex-1 gap-4 px-6 py-3 border rounded-lg cursor-pointer border-custom-green-600 has-[:checked]:bg-custom-green-200"
            >
              <input
                className="w-5 h-5 accent-custom-green-600 "
                type="radio"
                id="support-request"
                name="query-type"
                required
              />
              <span className="text-lg font-medium text-custom-green-600 ">
                Support Request
              </span>
            </label>
          </div>
        </div>
        <div className="flex flex-col flex-1 gap-3">
          <label
            htmlFor="message"
            className="text-base font-medium text-custom-green-600"
          >
            Message *
          </label>
          <textarea
            className="px-2 py-3 border rounded-lg outline-none border-custom-green-600 focus:ring-1 focus:ring-custom-green-600 hover:ring-custom-green-600 hover:ring-1"
            rows={3}
            id="message"
            name="message"
            required
          />
        </div>
        <div className="flex items-center justify-start gap-4 my-2">
          <input
            className="w-5 h-5 accent-custom-green-600"
            type="checkbox"
            name="accept"
            id="accept"
            required
          />
          <label
            htmlFor="accept"
            className="text-base font-medium text-custom-green-600"
          >
            I consent to being contacted by the team *
          </label>
        </div>
        <button
          className="py-4 text-lg font-medium text-white rounded-lg bg-custom-green-600"
          type="submit"
        >
          Submit
        </button>
      </form>
    </main>
  );
}

export default ContactFormCard;
