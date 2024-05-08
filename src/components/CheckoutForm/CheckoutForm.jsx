import { useState } from "react";

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')


    const handleConfirm = (event) => {
        event.preventDefault()        
        const userData = {
            name, phone, email
        }
        onConfirm(userData)
    }
    

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-White">
          Finalizar compra
        </h1>
        <h2 className=" text-center leading-9 tracking-tight text-White">
          Por favor complete los siguientes datos:
        </h2>
      </div>

      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleConfirm}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-White"
            >
              Email: 
            </label>
            <div className="mt-2">
              <input
                type="email"
                value={email}
                onChange={({target }) => setEmail(target.value)}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-Mogo sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div>
              <label
                htmlFor="text"
                className="block text-sm font-medium leading-6 text-White"
              >
                Nombre: 
              </label>
            </div>
            <div className="mt-2">
              <input
                type="text"
                value={name}
                onChange={({target }) => setName(target.value)}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-Mogo sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div>
              <label
                htmlFor="number"
                className="block text-sm font-medium leading-6 text-White"
              >
                Numero de teléfono: 
              </label>
            </div>
            <div className="mt-2">
              <input
                type="phone"
                value={phone}
                onChange={( {target} ) => setPhone(target.value)}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-Mogo sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-Mogo px-3 py-1.5 text-sm font-semibold leading-6 text-White shadow-sm hover:bg-Baige focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-Mogo"
            >
              Crear Orden Compra
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CheckoutForm;