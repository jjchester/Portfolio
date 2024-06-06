import ContactForm from "./form";

export default function Contact() {
  const formkey = process.env.FORMSPREE_KEY as string;

  return (
    <ContactForm formkey={formkey} />
  );
}
