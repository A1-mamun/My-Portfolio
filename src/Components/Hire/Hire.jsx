import Lottie from "lottie-react";
import emailLottie from "../../assets/LottieFile/email.json";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import toast from "react-hot-toast";

const Hire = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_emailJsServiceId,
        import.meta.env.VITE_emailJsTemplateId,
        form.current,
        {
          publicKey: import.meta.env.VITE_emailJsPublicKey,
        }
      )
      .then(
        () => {
          toast.success("Message send successfully");
        },
        (error) => {
          console.log(error);
          toast.error(error);
        }
      );
  };
  return (
    <div
      id="hire"
      className="container mx-auto h-[calc(100vh-96px)] pt-32 text-[#fff]"
    >
      <h2 className="w-full text-center text-4xl font-bold text-txt-color -mb-14">
        Hire Me
      </h2>
      <div className="hero">
        <div className="hero-content w-full flex-col lg:gap-10 lg:flex-row-reverse justify-between">
          <div className=" flex-1">
            <Lottie animationData={emailLottie}></Lottie>
          </div>
          <div className="flex-1">
            <h2 className="w-full text-center text-3xl font-bold">
              Let&apos;s Talk!
            </h2>
            <form ref={form} onSubmit={sendEmail} className="space-y-5 ">
              <div>
                <label className="">Full name</label>
                <input
                  id="name"
                  type="text"
                  name="user_name"
                  placeholder=""
                  className="w-full p-2 rounded bg-gray-800"
                  required
                />
              </div>
              <div>
                <label className="">Email</label>
                <input
                  id="email"
                  name="user_email"
                  type="email"
                  className="w-full p-2 rounded bg-gray-800"
                  required
                />
              </div>
              <div>
                <label className="">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows="3"
                  className="w-full p-2 rounded bg-gray-800"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full p-3 text-sm font-bold  uppercase rounded bg-txt-color hover:bg-hover-color text-[#000]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hire;
