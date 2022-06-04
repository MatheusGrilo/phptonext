import Layout from "../components/Views/Layout/Layout";
import { ExternalLinkIcon } from "@heroicons/react/outline";
import { useUser } from "@auth0/nextjs-auth0";

export default function Downloads() {
  const { user, isLoading } = useUser();
  return (
    <Layout title="Downloads">
      <section className="container mx-auto p-6 font-mono">
        <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
          <div className="w-full overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 dark:bg-gray-700 dark:text-gray-100 uppercase border-b border-gray-600">
                  <th className="px-4 py-3">Arquivo</th>
                  <th className="px-4 py-3">Download</th>
                  <th className="px-4 py-3">Tipo</th>
                  <th className="px-4 py-3">Upload</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800">
                {user && (
                  <>
                    <tr className="text-gray-700 dark:text-gray-100">
                      <td className="px-4 py-3 border">
                        <div className="flex items-center text-sm">
                          <div>
                            <p className="font-semibold text-black dark:text-gray-50">
                              MediaFire
                            </p>
                            <p className="text-xs text-gray-600 dark:text-gray-300">
                              Pasta com todos os arquivos
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-ms font-semibold border">
                        <a
                          href="https://www.mediafire.com/folder/kauzy8fazwuzs/InfoHouse"
                          target="_blank"
                          className="inline-flex text-green-700 dark:text-green-400 hover:underline"
                          rel="noreferrer"
                        >
                          <ExternalLinkIcon className="w-6 h-6 mr-1" />
                          <span>MediaFire</span>
                        </a>
                      </td>
                      <td className="px-4 py-3 text-xs border">
                        <span className="px-2 mx-1 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                          {" "}
                          InfoHouse{" "}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm border text-black dark:text-gray-100"></td>
                    </tr>
                  </>
                )}
                <tr className="text-gray-700 dark:text-gray-100">
                  <td className="px-4 py-3 border">
                    <div className="flex items-center text-sm">
                      <div>
                        <p className="font-semibold text-black dark:text-gray-50">
                          Java 8u251 Windows i586 (x86)
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-300">
                          Versão antiga para conectividade social
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-ms font-semibold border">
                    <a
                      href="https://www.mediafire.com/file/lukerdbyufd6088/jre-8u251-windows-i586.exe/file"
                      target="_blank"
                      className="inline-flex text-green-700 dark:text-green-400 hover:underline"
                      rel="noreferrer"
                    >
                      <ExternalLinkIcon className="w-6 h-6 mr-1" />
                      <span>MediaFire</span>
                    </a>
                  </td>
                  <td className="px-4 py-3 text-xs border">
                    <span className="px-2 mx-1 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                      {" "}
                      Public{" "}
                    </span>
                    <span className="px-2 mx-1 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                      {" "}
                      .exe{" "}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm border text-black dark:text-gray-100">
                    2022/02/28
                  </td>
                </tr>
                <tr className="text-gray-700">
                  <td className="px-4 py-3 border">
                    <div className="flex items-center text-sm">
                      <div>
                        <p className="font-semibold text-black dark:text-gray-50">
                          Resets impressora EPSON (senha: infohouse)
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-300">
                          L396, L375, L355, L110, L210, L350, L300, L130, L220,
                          L310, L360, L365, L3150, L380, L383, L385, L485
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-md font-semibold border">
                    <a
                      href={`${
                        !user
                          ? "#"
                          : "https://www.mediafire.com/file/07ptw7xpp6325b3/Resets_EPSON_infohouse_%25C3%25A9_a_senha.rar/file"
                      } `}
                      className={`${
                        !user
                          ? "text-red-700 dark:text-red-400 cursor-not-allowed"
                          : "text-green-700 dark:text-green-400 hover:underline"
                      } inline-flex `}
                      rel="noreferrer"
                      target={`${!user ? "_self" : "_blank"}`}
                    >
                      <ExternalLinkIcon className="w-6 h-6 mr-1" />
                      <span>MediaFire</span>
                    </a>
                  </td>
                  <td className="px-4 py-3 text-xs border">
                    <span
                      className={`${
                        !user
                          ? "text-orange-700 bg-gray-100"
                          : "text-green-700 bg-green-100"
                      } px-2 mx-1 py-1 font-semibold leading-tight rounded-sm `}
                    >
                      {" "}
                      InfoHouse{" "}
                    </span>
                    <span
                      className={`${
                        !user
                          ? "text-orange-700 bg-gray-100"
                          : "text-green-700 bg-green-100"
                      } px-2 mx-1 py-1 font-semibold leading-tight rounded-sm `}
                    >
                      {" "}
                      .rar{" "}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm border text-black dark:text-gray-100">
                    2022/02/28
                  </td>
                </tr>
                <tr className="text-gray-700">
                  <td className="px-4 py-3 border">
                    <div className="flex items-center text-sm">
                      <div>
                        <p className="font-semibold text-black dark:text-gray-50">
                          KMS Suite
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-300">
                          Ativadores do Windows e do Pacote Office (com
                          reativação)
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-md font-semibold border">
                    <a
                      href={`${
                        !user
                          ? "#"
                          : "https://www.mediafire.com/file/5m6c6ijxho6nx3s/KMS_Suite_v8.6_EN.zip/file"
                      } `}
                      className={`${
                        !user
                          ? "text-red-700 dark:text-red-400 cursor-not-allowed"
                          : "text-green-700 dark:text-green-400 hover:underline"
                      } inline-flex `}
                      rel="noreferrer"
                      target={`${!user ? "_self" : "_blank"}`}
                    >
                      <ExternalLinkIcon className="w-6 h-6 mr-1" />
                      <span>MediaFire</span>
                    </a>
                  </td>
                  <td className="px-4 py-3 text-xs border">
                    <span
                      className={`${
                        !user
                          ? "text-orange-700 bg-gray-100"
                          : "text-green-700 bg-green-100"
                      } px-2 mx-1 py-1 font-semibold leading-tight rounded-sm `}
                    >
                      {" "}
                      InfoHouse{" "}
                    </span>
                    <span
                      className={`${
                        !user
                          ? "text-orange-700 bg-gray-100"
                          : "text-green-700 bg-green-100"
                      } px-2 mx-1 py-1 font-semibold leading-tight rounded-sm `}
                    >
                      {" "}
                      .zip{" "}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm border text-black dark:text-gray-100">
                    2022/03/03
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </Layout>
  );
}
