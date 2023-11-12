

const Home = () => (
  <section className='w-full flex-center flex-col margin'>
    <h1 className='head_text text-center'>
      Discover Real Estate
      <br className='max-md:hidden' />
      <span className='blue_gradient text-center'> Smart Contracts</span>
    </h1>
    <p className='desc text-center margin'>
    SmartCrow is an easy-to-use smart contract tool for real estate agents to create a digital escrow for real estate transactions utilizing Algorand blockchain technology.  Create escrow smart contracts for real estate anywhere, anytime, with SmartCrow!
    </p>

    <div className='sm:flex hidden btn-below margin'>
          <>
          <a href="https://www.smartcrow.info/">
                <button
                  type='button'
                  className='black_btn about'
                >
                  About
                </button>
              </a>
          </>
          <div className="mx-2"></div>
          <>
          <a href="https://clinquant-biscotti-94b2e3.netlify.app/">
                <button
                  type='button'
                  className='black_btn contract'
                >
                  Create Contract
                </button>
                </a>
          </>
      </div>

  </section>
);

export default Home;
