import { Link } from 'react-router-dom'

const Pagina = () => {
  const ModalSession = () => {
    ;<div
      id="modal-comprar"
      className={`absolute top-0 left-0 bg-slate-600/40 w-screen h-screen z-30 backdrop-blur-sm flex flex-col justify-center items-center ${
        isModal ? 'block' : 'hidden'
      }`}
    >
      <div className="bg-white w-1/3 h-1/3 flex flex-col items-center justify-evenly">
        <span
          className="ml-auto mr-5 cursor-pointer"
          onClick={() => setIsModal(false)}
        >
          <MdOutlineClose />
        </span>
        <h3 className="font-bold text-slate-500 italic">
          Inicia Sesión para comprar:
        </h3>
        <LoginForm onSubmit={login} />
      </div>
    </div>
  }

  return (
    <Layout>
      <ModalSession />
      <h1 className="text-5xl font-bold my-10"> 🛒 Tu Carrito:</h1>

      {carrito.length === 0 ? (
        <>
          <p className="text-2xl">No hay productos en tu carrito</p>
          <Link to="/" className="text-blue underline my-3">
            Volver al inicio
          </Link>
        </>
      ) : (
        carrito?.map((producto) => <CarritoItem producto={producto} />)
      )}

      {carrito?.length > 0 && (
        <button
          id="buy-button"
          onClick={isAuthenticated}
          className="bg-slate-800 px-5 py-3 text-white"
        >
          COMPRAR
        </button>
      )}
    </Layout>
  )
}

export default { Pagina, ModalSession }
