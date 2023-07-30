import { useEffect, useRef } from 'react';
 
const UploadWidget = () => {
    const cloudinaryRef = useRef();
    const widgetRef = useRef();
      useEffect(() => {
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: 'dk6awa4ko',
            uploadPreset: 'petBlog',
        }, function (error, result) {
            console.log(result);
        }
        );
      }, [])
      return (
       <div>

         <button onClick={()=> widgetRef.current.open()}>Upload</button>

       </div>

      )
}

export default UploadWidget;