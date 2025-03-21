import { useState } from "react"

export function FileUploader() {
    const [file, setFile] = useState();
    const [preview, setPreview] = useState(null);

    function fileChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    return (
        <div className="imagePicker pl-15 pt-10">
            <h1 className="font-semibold text-white">Pick an image</h1>
            <input type="file" onChange={fileChange} className="text-white bg-blue-950"/>
            <img src={file} className="w-100"/>
        </div>
    );
}