'use client'

import { useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { CheckCircleIcon,CircleArrowDown,HammerIcon,RocketIcon,SaveIcon} from "lucide-react"
const FileUploader = () => {
    const onDrop = useCallback((acceptedFiles: File[]) => {
        // Do something with the files
        console.log(acceptedFiles);
      }, [])

      
      
      const {getRootProps, getInputProps, isDragActive, isFocused} = useDropzone({onDrop})
  return (
    <div className="flex flex-col gap-4 items-center max-w-7xl mx-auto">
    <div 
    {...getRootProps()}
    className={`p-10 border-2 border-dashed mt-10 w-[90%] border-orange-600 text-orange-600 rounded-lg h-96 flex items-center justify-center
    ${isFocused || isDragActive ? "bg-orange-300" : "bg-orange-100"}`}>
    <input {...getInputProps()} />
    <div className="flex flex-col items-center justify-center">
            {isDragActive ?(
            <>
              <RocketIcon className="h-20 w-20 animate-bounce" />
              <p>Drop the files here ...</p>
            </>
            ):(
            <>
            <CircleArrowDown className="h-20 w-20 animate-bounce"/>
            <p>Drag &quot;n&quot; drop some files here, or click to select files</p>
            </>
            )}
        </div>
       </div>
    </div>
  )
}

export default FileUploader
