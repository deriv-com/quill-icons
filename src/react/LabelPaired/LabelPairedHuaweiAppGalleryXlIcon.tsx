import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedHuaweiAppGalleryXlIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 30 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m13.781 18.844-.422 1.078-.046.094h.984l-.047-.094zM21.375 6C24.469 6 27 8.531 27 11.625v12.797C27 27.516 24.469 30 21.375 30H8.578A5.562 5.562 0 0 1 3 24.422V11.625C3 8.531 5.484 6 8.578 6zm-4.078 12-.703 2.25L15.89 18h-.657l1.079 3.281h.562l.703-2.156.703 2.156h.516L19.922 18h-.656l-.703 2.25-.704-2.25zm-3.75 0-1.406 3.281h.656l.281-.61v-.046h1.453l.281.656h.657l-1.36-3.234V18zm9.984 0v3.281h.657V18zm-18 0v3.281h.657V19.97h1.406v1.312h.656V18h-.656v1.36H6.187V18zm5.672 0v1.875c0 .563-.281.844-.703.844-.469 0-.75-.282-.75-.844v-1.828h-.61v1.828c0 .938.47 1.453 1.313 1.453.89 0 1.36-.515 1.36-1.453V18zm9.235 0v3.281h2.343v-.61h-1.734v-.796h1.172v-.61h-1.172v-.656h1.687V18zm-9.844-8.156c0 2.297 1.922 4.125 4.265 4.125 2.344 0 4.266-1.828 4.266-4.125h-.61c0 1.969-1.64 3.515-3.656 3.515-2.015 0-3.656-1.546-3.656-3.515z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHuaweiAppGalleryXlIcon);
export default ForwardRef;
