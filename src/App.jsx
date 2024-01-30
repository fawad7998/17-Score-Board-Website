import './App.css';
import { useState } from 'react';
import { MdDelete } from 'react-icons/md';
function App() {
  const [register, setRegister] = useState([]);

  // Fun

  const handle = (e) => {
    e.preventDefault();

    let contact = {
      name,
      num,
      email,
    };

    setRegister([...register, contact]);
    console.log(contact);
  };

  const [num, setNum] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const deletee = (i) => {
    setRegister(
      register?.filter((e) => {
        return e !== i;
      })
    );
  };

  return (
    <>
      <div className="bg-gray-50">
        <h1 className="text-center text-xl font-normal pt-4">
          Contact Register
        </h1>
        <div className="flex flex-col  justify-center items-center">
          <div className=" flex justify-center bg-gray-300  w-[50%] h-[30vh] overflow-y-scroll ">
            {register.length > 0 ? (
              register.map((i) => {
                return (
                  <>
                    <div className="flex space-x-6 py-8 justify-center">
                      <div className="text-center">
                        <h1 className="text-lg font-bold ">Name</h1>
                        <hr />

                        {i.name}
                      </div>
                      <div className="text-center">
                        <h1 className="text-lg font-bold ">Score</h1>
                        <hr />

                        {i.num}
                      </div>

                      <button
                        onClick={() => {
                          deletee(i);
                        }}
                        className="bg-red-400 text-white px-3 rounded-md"
                      >
                        <MdDelete />
                      </button>
                    </div>
                  </>
                );
              })
            ) : (
              <div className="text-xl font-semibold">
                <h1 className="text-center my-36">No Contact are Saved Yet</h1>
              </div>
            )}
          </div>
          <div className="bg-gray-200 w-[34%] h-[45vh] m-2 rounded-md flex flex-col items-center justify-center">
            <h1 className="text-center pt-2 text-xl font-bold">
              Enter Your Info Below
            </h1>
            <div className="bg-white mx-auto w-72 items-center justify-between flex p-2 mt-5 rounded-md focus-within:shadow-xl">
              <input
                type="text"
                className="py-2 w-full outline-none font-mono ml-1"
                placeholder="Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="bg-white mx-auto w-72 items-center justify-between flex p-2 mt-5 rounded-md focus-within:shadow-xl">
              <input
                type="tel"
                className="py-2 w-full outline-none font-mono ml-1"
                placeholder="Score"
                onChange={(e) => {
                  setNum(e.target.value);
                }}
              />
            </div>

            <button
              onClick={handle}
              className="bg-gray-700 text-white  py-2 px-3 rounded-md font-semibold mt-6 active:shadow-xl active:translate-y-0.5"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
