'use client'

import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FaImage } from "react-icons/fa6";
import { CORE_IMAGES_URL } from '@/app/constants/session';

export default function ImageUpload({ onSelectedFile, previewImageEdit = null }) {
    const [previewImage, setPreviewImage] = useState(null);
    const [namePreviewImage, setNamePreviewImage] = useState(null);


    const onDrop = useCallback((acceptedFiles) => {
        const file = acceptedFiles[0];

        const reader = new FileReader();

        if (file.type.startsWith('image/')) {
            reader.onload = () => {
                setPreviewImage(reader.result);
                setNamePreviewImage(file.name);
                console.log(file);
                onSelectedFile(file);
            };

            reader.readAsDataURL(file);
        } else {
            alert('El archivo seleccionado no es una imagen');
        }
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
    });

    return (
        <div {...getRootProps()} className='my-10'>
            <input {...getInputProps()} />
            {isDragActive ? (
                <div className='bg-gray-200 rounded-xl flex flex-col transform scale-105 transition-transform duration-300 items-center gap-6 p-5 border-4 border-blue-950 border-dashed'>
                    <FaImage size={100} className='text-blue-principal' />
                    <p className='text-blue-950 font-bold'>Arrastra una imagen o haz click para seleccionar una</p>
                </div>
            ) : (
                <div>
                    <div className='bg-gray-primary rounded-xl flex transform scale-100 transition-transform duration-300 flex-col items-center gap-6 p-5 border-4 border-gray-600 border-dashed'>
                        <FaImage size={100} className='text-gray-600' />
                        <p className='text-gray-600 font-bold'>Arrastra una imagen o haz click para seleccionar una</p>
                    </div>
                    {
                        previewImage && (
                            <div className='flex flex-row justify-start items-center gap-4'>
                                <img src={previewImage} alt='Imagen seleccionada' className='rounded-xl mt-5 w-16 h-16 object-cover' />
                                <p>{namePreviewImage}</p>
                            </div>
                        )
                    }
                    {
                        previewImageEdit != null && previewImage == null ? (
                            <div className='flex flex-row justify-start items-center gap-4'>
                                <img src={CORE_IMAGES_URL + "/uploads/" + previewImageEdit} alt='Imagen seleccionada' className='rounded-xl mt-5 w-16 h-16 object-cover' />
                                <p>{previewImageEdit.slice(8)}</p> {/* Slice para quitar el nombre de la carpeta */}
                            </div>
                        ) : (null)
                    }
                </div>

            )}
        </div>
    );
}
