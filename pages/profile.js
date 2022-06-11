import Layout from "../components/Views/Layout/Layout";
import Login from "../components/Controllers/User/login";
import { useUser } from "@auth0/nextjs-auth0";

export default function Profile() {
  const { user, isLoading, isAuthenticated } = useUser();
  return (
    <Login>
      {user && (
        <Layout title="Profile">
          {" "}
          <div className="container mx-auto my-24">
            <div>
              <div className="bg-gray-200 dark:bg-gray-800 relative shadow-xl w-5/6 md:w-4/6  lg:w-3/6 xl:w-2/6 mx-auto">
                <div className="flex justify-center">
                  <img
                    src={user.picture}
                    alt=""
                    className="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-2xl border-4 border-white"
                  />
                </div>

                <div className="mt-16">
                  <h1 className="font-bold text-center text-3xl text-gray-900 dark:text-gray-200 capitalize">
                    {user.nickname}
                  </h1>
                  <p>
                    <span></span>
                  </p>

                  <div className="w-full">
                    <h3 className="font-bold text-gray-600 dark:text-gray-400 text-left px-4">
                      Info
                    </h3>
                    <div className="mt-2 w-full dark:text-white text-black">
                      <a
                        href="#"
                        className="w-full border-t-2 border-gray-100 font-medium text-gray-600 py-4 px-4 block"
                      >
                        <div className="w-full dark:text-white text-black">
                          <span>User.name: </span>
                          <span className="text-gray-400 text-sm">
                            {user.name}
                          </span>
                        </div>
                      </a>
                      <a
                        href="#"
                        className="w-full border-t-2 border-gray-100 font-medium text-gray-600 py-4 px-4 block"
                      >
                        <div className="w-full dark:text-white text-black">
                          <span>User.nickname: </span>
                          <span className="text-gray-400 text-sm">
                            {user.nickname}
                          </span>
                        </div>
                      </a>
                      <a
                        href="#"
                        className="w-full border-t-2 border-gray-100 font-medium text-gray-600 py-4 px-4 block"
                      >
                        <div className="w-full dark:text-white text-black">
                          <span>User.email: </span>
                          <span className="text-gray-400 text-sm">
                            {user.email}
                          </span>
                        </div>
                      </a>
                      <a
                        href="#"
                        className="w-full border-t-2 border-gray-100 font-medium text-gray-600 py-4 px-4 block"
                      >
                        <div className="w-full dark:text-white text-black">
                          <span>User.picture: </span>
                          <span className="text-gray-400 text-sm">
                            {user.picture}
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      )}
    </Login>
  );
}
