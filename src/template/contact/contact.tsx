import { ChangeEvent, useState } from "react";
import Footer from "../footer/footer";

export default function Contact() {
  const [name, setName] = useState("");
  const [savedName, setSavedName] = useState("");

  const [lastName, setLastName] = useState("");
  const [savedLastName, setSavedLastName] = useState("");

  const [email, setEmail] = useState("");
  const [savedEmail, setSavedEmail] = useState("");

  const [phone, setPhone] = useState("");
  const [savedPhone, setSavedPhone] = useState("");

  const [message, setMessage] = useState("");
  const [savedMessage, setSavedMessage] = useState("");

  const handleGetName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleGetLastName = (e: ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  const handleGetEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleGetPhoneNumber = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const handleGetMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleSaveClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSavedName(name);
    setSavedLastName(lastName);
    setSavedEmail(email);
    setSavedPhone(phone);
    setSavedMessage(message);
    e.preventDefault();
    setName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  const renderNames = () => {
    return (
      savedName || savedLastName || savedEmail || savedPhone || savedMessage
    );
  };

  return (
    <>
      <div className=" bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Fale comigo
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Preencha o formulario e me envie um e-mail.
          </p>
        </div>
        <form
          action="#"
          method="POST"
          className="mx-auto mt-16 max-w-xl sm:mt-20"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Nome
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={name}
                  onChange={handleGetName}
                  maxLength={255}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Sobrenome
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={lastName}
                  onChange={handleGetLastName}
                  maxLength={255}
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={email}
                  onChange={handleGetEmail}
                  maxLength={255}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="phone-number"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Numero de telefone
              </label>
              <div className="relative mt-2.5">
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <label htmlFor="country" className="sr-only">
                    Pais
                  </label>
                  <select
                    id="country"
                    name="country"
                    className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                  >
                    <option>US</option>
                    <option>CA</option>
                    <option>EU</option>
                    <option>BR</option>
                  </select>
                  <svg
                    className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  type="tel"
                  name="phone-number"
                  id="phone-number"
                  autoComplete="tel"
                  className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={phone}
                  onChange={handleGetPhoneNumber}
                  maxLength={50}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Deixe sua mensagem
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 h-24"
                  value={message}
                  onChange={handleGetMessage}
                  maxLength={800}
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={handleSaveClick}
            >
              Enviar
            </button>
          </div>
          <div>
            {renderNames() && (
              <div>
                <p className="mt-4 text-sm text-gray-600 max-w-[30rem]">
                  Nome salvo: {savedName}
                </p>
                <p className="mt-4 text-sm text-gray-600 max-w-[30rem]">
                  Sobrenome salvo: {savedLastName}
                </p>
                <p className="mt-4 text-sm text-gray-600 max-w-[30rem]">
                  E-mail salvo: {savedEmail}
                </p>
                <p className="mt-4 text-sm text-gray-600 max-w-[30rem]">
                  Numero salvo: {savedPhone}
                </p>
                <p className="mt-4 text-sm text-gray-600 max-w-[30rem]">
                  Mensagem salva: {savedMessage}
                </p>
              </div>
            )}
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
