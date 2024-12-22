// import {
//   IconButton,
//   Modal,
//   ModalBody,
//   ModalContent,
//   ModalOverlay,
//   useDisclosure,
// } from '@chakra-ui/react';
// import { Upload } from '@phosphor-icons/react';
// import { ReactNode, useRef, useState } from 'react';
// import { CircleStencil, Cropper, CropperRef, RectangleStencil } from 'react-advanced-cropper';
// import { BiPlus } from 'react-icons/bi';

// interface ImageCropperProps {
//   ratio?: {
//     width: number;
//     height: number;
//   };
//   triggerComponent: ReactNode;
//   onCrop: (image: File) => void;
//   circle?: boolean;
// }

// const ImageCropper = ({ ratio, triggerComponent, onCrop, circle = false }: ImageCropperProps) => {
//   const { isOpen, onClose, onOpen } = useDisclosure();
//   const ref = useRef<CropperRef>(null);
//   const [previewImage, setImagePreview] = useState<any>(null);

//   const min = ratio?.height || 1;
//   const max = ratio?.width || 1;

//   const aspectRatio = max / min;

//   const handleImageCrop = () => {
//     const canvas = ref.current?.getCanvas();
//     if (canvas) {
//       canvas.toBlob(async (blob) => {
//         const file = new File([blob as Blob], previewImage.name + '.png', {
//           type: 'image/png',
//         });

//         onCrop(file);
//         onClose();
//       }, 'image/jpeg');
//     }
//   };

//   return (
//     <>
//       <button onClick={onOpen} className='cursor-pointer'>
//         {triggerComponent}
//       </button>

//       <Modal size='xl' isOpen={isOpen} onClose={onClose} isCentered>
//         <ModalOverlay
//           sx={{
//             backdropFilter: 'blur(12px)',
//           }}
//         />
//         <ModalContent className='px-2 py-4 rounded-lg'>
//           <ModalBody>
//             <div className='flex justify-between items-center'>
//               <h5 className='pb-3 text-xl font-bold text-primary'>Select image and resize</h5>
//               <IconButton
//                 aria-label='close modal'
//                 icon={<BiPlus className='text-lg rotate-45' />}
//                 className='hover:bg-transparent z-[1] text-success border-[#37757E33] border-[1px] rounded-full'
//                 onClick={onClose}
//               />
//             </div>
//             {!previewImage ? (
//               <div className='w-full text-xl text-secondary font-semibold gap-4 capitalize h-[300px] border border-secondary rounded-lg my-5 flex justify-center items-center'>
//                 No image to preview!
//               </div>
//             ) : (
//               <div className='my-4'>
//                 <Cropper
//                   src={URL.createObjectURL(previewImage)}
//                   ref={ref}
//                   stencilProps={{
//                     handlers: true,
//                     lines: true,
//                     movable: true,
//                     resizable: true,
//                     aspectRatio: aspectRatio,
//                   }}
//                   stencilComponent={circle ? CircleStencil : RectangleStencil}
//                 />
//               </div>
//             )}
//             <div className='flex gap-4 justify-end'>
//               <>
//                 <input
//                   type='file'
//                   hidden
//                   id='cover'
//                   multiple={false}
//                   onChange={(event: any) => setImagePreview(event?.target?.files[0])}
//                 />
//                 <label
//                   htmlFor='cover'
//                   className='flex cursor-pointer items-center gap-3 border-dashed border-2 rounded-full border-secondary h-[40px] px-10 text-secondary text-base font-semibold'
//                 >
//                   <Upload size={24} />
//                   Change Photo
//                 </label>
//               </>

//               <button
//                 onClick={handleImageCrop}
//                 type='button'
//                 className='rounded-lg flex justify-center items-center w-[120px] bg-secondary px-6 pb-[11px] pt-2.5 text-center text-sm font-semibold leading-[19px] tracking-[0px] text-white disabled:bg-slate-400'
//               >
//                 Save
//               </button>
//             </div>
//           </ModalBody>
//         </ModalContent>
//       </Modal>
//     </>
//   );
// };

// export default ImageCropper;

import React from 'react';

const hello = () => {
  return <div></div>;
};

export default hello;
