import Link from "next/link";

const ErrorPage = () => {
  return (
    <section className="py-72">
      <div className="container mx-auto">
        <h3 className="text-center mb-6">Something went wrong!</h3>
        <Link href="/">
          <button type="button" className="btn btn-accent mx-auto">
            Back to the homepage
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
