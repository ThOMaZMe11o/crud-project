export default function TableList() {

    const clients = [
        {id: 1, name: "Thomaz Mello", email: "thomazmello05@gmail.com", job: "Web developer", rate: "100", isactive: true, },
        {id: 2, name: "José Juvencio", email: "josejuvencio07@gmail.com", job: "software engineer", rate: "99", isactive: true, },
        {id: 3, name: "Michael Santos", email: "michaelsantos78@gmail.com", job: "quality", rate: "98", isactive: false, },
    ];

    return (
        <>
        <div className="relative overflow-x-auto mt-12">
            <table className="w-full text-sm text-left rtl:text-right text-gray-300">
                <thead className="text-xs text-gray-200 uppercase">
                    <tr>
                        <th scope="col" className="px-6 py-3">Id</th>
                        <th scope="col" className="px-6 py-3">Name</th>
                        <th scope="col" className="px-6 py-3">Email</th>
                        <th scope="col" className="px-6 py-3">Job</th>
                        <th scope="col" className="px-6 py-3">Rate</th>
                        <th scope="col" className="px-6 py-3">Status</th>
                    </tr>
                </thead>
                <tbody>

                {clients.map((client) => (
                    <tr>
                        <th className="px-6 py-4">{client.id}</th>
                        <td className="px-6 py-4">{client.name}</td>
                        <td className="px-6 py-4">{client.email}</td>
                        <td className="px-6 py-4">{client.job}</td>
                        <td className="px-6 py-4">{client.rate}</td>
                        <td className="px-6 py-4">
                        <button className={`inline-flex items-center px-4 py-2 bg-blue-500 transition ease-in-out delay-75 hover:bg-blue-600 text-white text-sm font-medium rounded-md hover:-translate-y-1 hover:scale-110 cursor-pointer ${client.isactive ? ``: `bg-transparent hover:bg-gray-600`}`}>
                            {client.isactive ? 'Active' : 'Inactive'}
                        </button>
                        </td>
                        <td className="px-6 py-4">
                        <button className={`inline-flex items-center px-4 py-2 bg-purple-500 transition ease-in-out delay-75 hover:bg-purple-600 text-white text-sm font-medium rounded-md hover:-translate-y-1 hover:scale-110 cursor-pointer ${client.isactive ? ``: ``}`}>
                        <svg
                            class="h-5 w-5 mr-2 text-white"
                            stroke-linejoin="round"
                            stroke-linecap="round"
                            stroke-width="2"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 24 24"
                            height="24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path>
                            <path d="M7 9l5 -5l5 5"></path>
                            <path d="M12 4l0 12"></path>
                            </svg>
                                Update
                            </button>
                        </td>
                        <td className="px-6 py-4">
                            <button className={`inline-flex items-center px-4 py-2 bg-red-500 transition ease-in-out delay-75 hover:bg-red-600   text-white text-sm font-medium rounded-md hover:-translate-y-1 hover:scale-110 cursor-pointer ${client.isactive ? ``: ``}`}>
                            <svg
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                fill="none"
                                class="h-5 w-5 mr-2"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                stroke-width="2"
                                stroke-linejoin="round"
                                stroke-linecap="round"
                                ></path>
                            </svg>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}

                </tbody>
            </table>
        </div>
        </>
    )
}