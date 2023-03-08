import React, { useState } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { BsBookFill, BsSearch } from "react-icons/bs";
import { GrNext, GrPrevious } from "react-icons/gr";
import Layout from "../components/Layout";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { BsFillJournalBookmarkFill } from "react-icons/bs";

import { useLocation } from "react-router-dom";
import { Cookies, useCookies } from "react-cookie";

const UserList = () => {
  const [tabelOpen, setTabelOpen] = useState(false);
  const location = useLocation();
  const [cookies, setCookie] = useCookies<any>(["id"]);

  const handleTable = () => {
    setTabelOpen(!tabelOpen);
  };

  return (
    <div>
      {screen.width > 767 ? (
        <Layout>
          <div className="flex items-center justify-end mr-5 mt-20 gap-5">
            <input type="text" placeholder="Type here" className="input w-full max-w-xs" />
            <a>
              <BsSearch size={28} />
            </a>
            {cookies.id == 1 ? (
              <label htmlFor="my-modal-4" className="btn bg-[#19345E]">
                Add New
              </label>
            ) : (
              ""
            )}
          </div>
          <div className="overflow-x-auto mx-5 my-10">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                  <th>No</th>
                  <th>Fullname</th>
                  <th>Email</th>
                  <th>Team</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>1</th>
                  <td>Matt Dickerson</td>
                  <td>mat@mail.com</td>
                  <td>Academic</td>
                  <td>Admin</td>
                  <td>Active</td>
                  {cookies.id == 1 ? (
                    <td className="flex gap-3">
                      <a href="">
                        <AiFillEdit size={25} />
                      </a>
                      <a href="">
                        <AiFillDelete size={25} />
                      </a>
                    </td>
                  ) : (
                    ""
                  )}
                </tr>
                {/* row 2 */}
                <tr>
                  <th>1</th>
                  <td>Matt Dickerson</td>
                  <td>mat@mail.com</td>
                  <td>Academic</td>
                  <td>Admin</td>
                  <td>Active</td>
                  {cookies.id == 1 ? (
                    <td className="flex gap-3">
                      <a href="">
                        <AiFillEdit size={25} />
                      </a>
                      <a href="">
                        <AiFillDelete size={25} />
                      </a>
                    </td>
                  ) : (
                    ""
                  )}
                </tr>
                {/* row 3 */}
                <tr>
                  <th>1</th>
                  <td>Matt Dickerson</td>
                  <td>mat@mail.com</td>
                  <td>Academic</td>
                  <td>Admin</td>
                  <td>Active</td>
                  {cookies.id == 1 ? (
                    <td className="flex gap-3">
                      <a href="">
                        <AiFillEdit size={25} />
                      </a>
                      <a href="">
                        <AiFillDelete size={25} />
                      </a>
                    </td>
                  ) : (
                    ""
                  )}
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex gap-10 justify-end mr-5">
            <button className="btn bg-[#19345E] flex gap-2">
              <GrPrevious /> Prev
            </button>
            <button className="btn bg-[#19345E] flex gap-2">
              Next <GrNext />
            </button>
          </div>
          <input type="checkbox" id="my-modal-4" className="modal-toggle" />
          <label htmlFor="my-modal-4" className="modal cursor-pointer">
            <label className="modal-box relative w-screen" htmlFor="">
              <h3 className="text-lg font-bold text-center mb-5">Add User</h3>
              <table className="w-full">
                <tr>
                  <td>
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                  </td>
                  <td>
                    <input type="text" placeholder="Type here" className="mb-3 input input-bordered w-full max-w-xs" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                  </td>
                  <td>
                    <input type="email" placeholder="Type here" className="mb-3 input input-bordered w-full max-w-xs" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                  </td>
                  <td>
                    <input type="password" placeholder="Type here" className="mb-3 input input-bordered w-full max-w-xs" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label className="label">
                      <span className="label-text">Team</span>
                    </label>
                  </td>
                  <td>
                    <select className="mb-3 select select-bordered w-full max-w-xs">
                      <option disabled selected>
                        Who shot first?
                      </option>
                      <option>Han Solo</option>
                      <option>Greedo</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label className="label">
                      <span className="label-text">Role</span>
                    </label>
                  </td>
                  <td>
                    <select className="mb-3 select select-bordered w-full max-w-xs">
                      <option disabled selected>
                        Who shot first?
                      </option>
                      <option>Han Solo</option>
                      <option>Greedo</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label className="label">
                      <span className="label-text">Status</span>
                    </label>
                  </td>
                  <td>
                    <select className="mb-3 select select-bordered w-full max-w-xs">
                      <option selected>Active</option>
                      <option>Non-Active</option>
                    </select>
                  </td>
                </tr>
              </table>
              <div className="grid justify-items-center w-full">
                <div className="flex w-full gap-5 justify-end">
                  <button className="btn bg-white border-[#19345E] text-[#19345E] hover:bg-[#19345E] hover:text-white w-20 flex gap-2">Cancel</button>
                  <button className="btn bg-[#19345E] w-20 flex gap-2">Save</button>
                </div>
              </div>
            </label>
          </label>
        </Layout>
      ) : (
        <Layout>
          <div className="flex items-center mr-5 px-3 mt-12 gap-5">
            {cookies.id == 1 ? <button className="w-24 h-8 text-white text-sm rounded-md bg-orange">Add New</button> : ""}

            <div className="flex flex-row justify-center items-center gap-2 border-black border-2 px-3 py-2 rounded-lg ">
              <input type="text" placeholder="Type here" className="bg-transparent outline-none w-32 max-w-xs" />
              <BsSearch size={20} />
            </div>
          </div>
          <div className="mt-8">
            <table className={`${tabelOpen ? "h-fit" : "h-12"} w-full duration-300 relative overflow-hidden border-t border-black py-2 flex flex-col gap-3 `}>
              <IoIosArrowDropdownCircle onClick={handleTable} className="absolute ml-4 text-2xl text-orange" />
              <tr className="w-full pl-16">
                <td className="w-80 text-start  ">Fullname</td>
                <td className="w-1/2">arbi kustia</td>
              </tr>
              <tr className="w-full pl-16">
                <td className="w-80 text-start  ">Email</td>
                <td className="w-1/2">arbi kustia</td>
              </tr>
              <tr className="w-full pl-16">
                <td className="w-80 text-start  ">Team</td>
                <td className="w-1/2">arbi kustia</td>
              </tr>
              <tr className="w-full pl-16">
                <td className="w-80 text-start  ">Role</td>
                <td className="w-1/2">arbi kustia</td>
              </tr>
              <tr className="w-full pl-16">
                <td className="w-80 text-start  ">Gender</td>
                <td className="w-1/2">arbi kustia</td>
              </tr>
              <tr className="w-full pl-16">
                <td className="w-80 text-start  ">Status</td>
                <td className="w-1/2 text-lg text-blue">Active</td>
              </tr>
              {cookies.id == 1 ? (
                <div className="flex justify-end px-5 text-2xl gap-4">
                  <FiEdit className="text-green-800" /> <MdDeleteForever className="text-red-500" />
                </div>
              ) : (
                ""
              )}
            </table>
            <table className={`${tabelOpen ? "h-fit" : "h-12"} w-full duration-300 relative overflow-hidden border-t border-black py-2 flex flex-col gap-3 `}>
              <IoIosArrowDropdownCircle onClick={handleTable} className="absolute ml-4 text-2xl text-orange" />
              <tr className="w-full pl-16">
                <td className="w-80 text-start  ">Fullname</td>
                <td className="w-1/2">arbi kustia</td>
              </tr>
              <tr className="w-full pl-16">
                <td className="w-80 text-start  ">Email</td>
                <td className="w-1/2">arbi kustia</td>
              </tr>
              <tr className="w-full pl-16">
                <td className="w-80 text-start  ">Team</td>
                <td className="w-1/2">arbi kustia</td>
              </tr>
              <tr className="w-full pl-16">
                <td className="w-80 text-start  ">Role</td>
                <td className="w-1/2">arbi kustia</td>
              </tr>
              <tr className="w-full pl-16">
                <td className="w-80 text-start  ">Gender</td>
                <td className="w-1/2">arbi kustia</td>
              </tr>
              <tr className="w-full pl-16">
                <td className="w-80 text-start  ">Status</td>
                <td className="w-1/2 text-lg text-blue">Active</td>
              </tr>
              {cookies.id == 1 ? (
                <div className="flex justify-end px-5 text-2xl gap-4">
                  <FiEdit className="text-green-800" /> <MdDeleteForever className="text-red-500" />
                </div>
              ) : (
                ""
              )}
            </table>
          </div>
        </Layout>
      )}
    </div>
  );
};

export default UserList;
