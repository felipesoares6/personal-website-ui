function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <section className="flex w-full max-w-4xl rounded-lg bg-white p-6 shadow-lg">
        <div className="mr-6 size-80 flex-none">
          <img
            src="/images/felipe-soares-picture.jpeg"
            alt="Felipe Soares"
            className="rounded-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-semibold text-gray-800">
            Felipe Soares
          </h1>
          <p className="mt-2 max-w-md text-gray-600">
            I&apos;m a software engineer focused on JavaScript and specialized
            in developing performant web applications with over 8 years of
            experience. Independent of technology, I&apos;m a product-focused
            developer who can adapt to any new set of frameworks or tools to
            achieve the goals needed in an agile environment.
          </p>
        </div>
      </section>
    </main>
  )
}

export default HomePage
