
const UsersHomePage = () => {
    return (
        <div className="w-[425px] min-h-screen mx-auto items-center flex">

            <div>
                <form>
                    <p className="text-[18px] font-bold mb-6">User Submission form</p>
                    <p>Name</p>
                    <label>
                        <input type="text" name="name" id="name" className="w-full rounded-[5px] mb-5 border-[1px] border-[#aaa] " />
                    </label>
                    <p>Socail media handle</p>
                    <label>
                        <input type="text" name="handle" id="handle" className="w-full rounded-[5px] mb-5 border-[1px] border-[#aaa] " />
                    </label>
                    <p>Upload Images</p>
                    <label>
                        <input type="file" multiple name="images" id="images" className="w-full rounded-[5px] mb-5 border-[1px] border-[#aaa] " />
                    </label>

                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-[4px]">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default UsersHomePage;