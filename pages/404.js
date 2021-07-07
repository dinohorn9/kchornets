import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {

    const router = useRouter(); 

  useEffect(() => {
    setTimeout(() => {
      // takes two arguments, one is a function and the other time
        // redirect user
        router.push('/');
    }, 3000);
  }, []); // fire funtion once

  return (
    <div>
      <p>
        <h1>Found Not Found</h1>
        <h2 className="container mx-auto text-center mt-28 mb-28">
          Hold tight... redirecting back to the{" "}
          <Link href="/">
            <a>homepage</a>
          </Link>
        </h2>
      </p>
    </div>
  );
};

export default NotFound;
