import axios from "axios";
import { useState } from "react";
import { BeatLoader, BounceLoader } from "react-spinners";

const UsersHomePage = () => {
    const [images, setImages] = useState([]);
    const [imageURLs, setImageURLs] = useState([]);
    const [loading, setLoading] = useState(false);



    const handleFileChange = (e) => {
        setImages(e.target.files);
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const handle = e.target.handle.value;
        const uploadedImageURLs = [];
        setLoading(true);



        // Loop over each file and upload to ImgBB
        for (let i = 0; i < images.length; i++) {
            const formData = new FormData();
            formData.append('image', images[i]);

            try {
                const res = await axios.post('https://api.imgbb.com/1/upload', formData, {
                    params: {
                        key: '18a5e0c9cfa0a48351625ba4651fec48', // ImgBB API key
                    },
                });

                // Collect each image URL
                uploadedImageURLs.push(res.data.data.url);
            } catch (error) {
                console.error('Error uploading image:', error);
            }
            finally {
                setLoading(false); // Set loading to false when the upload is done
            }
        }

        // After uploading all images, store URLs in state
        setImageURLs(uploadedImageURLs);

        const info = {
            name,
            handle,
            imageURLs: uploadedImageURLs
        }

        console.log(info);
        e.target.reset();

        // Send the data (name, social media handle, and image URLs) to the backend
        await axios.post('http://localhost:5000/submission', info);
    }




    return (
        <div className="w-[425px] min-h-screen mx-auto items-center flex">

            <div>
                <form onSubmit={handleSubmit}>
                    <p className="text-[18px] font-bold mb-6">User Submission form</p>
                    <p className="font-semibold">Name</p>
                    <label>
                        <input type="text" name="name" id="name" required className="w-full rounded-[5px] mb-5 border-[1px] border-[#aaa] py-2 px-4" />
                    </label>
                    <p className="font-semibold">Socail media handle</p>
                    <label>
                        <input type="text" name="handle" id="handle" required className="w-full rounded-[5px] mb-5 border-[1px] border-[#aaa] py-2 px-4" />
                    </label>
                    <p className="font-semibold">Upload Images</p>
                    <label>
                        <input type="file" multiple name="images" id="images" required className="w-full rounded-[5px] mb-5 " onChange={handleFileChange} />
                    </label>

                    {/* <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-[4px]">Submit</button> */}


                    <button type="submit" disabled={loading} className="bg-blue-500 text-white px-4 flex items-center py-2 rounded-[4px]">
                        {loading ? <BeatLoader /> : 'Submit'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UsersHomePage;