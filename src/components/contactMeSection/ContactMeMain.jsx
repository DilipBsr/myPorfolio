import ContactMeLeft from "./ContactMeLeft";
import ContactMeRight from "./ContactMeRight";

const ContactMeMain = () => {
  return (
    <div
      id="contact"
      className="max-w-[1200px] mx-auto items-center justify-center px-4 mt-10 "
    >
      <hr />
      <h2 className="lg:text-6xl sm:3xl text-5xl text-cyan mb-10 text-center font-special font-extrabold pt-10">Contact Me</h2>
      <div className="flex justify-between gap-24 bg-brown p-8 rounded-2xl flex-col">
        <ContactMeLeft />
        <ContactMeRight />
      </div>
    </div>
  );
};

export default ContactMeMain;
