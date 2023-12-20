import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedEyeLgBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 23 30'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M11.5 8.625c-1.276.026-2.435.286-3.477.781a9.65 9.65 0 0 0-2.773 1.875 13.395 13.395 0 0 0-1.914 2.188A17.816 17.816 0 0 0 2.164 15.5c.287.599.677 1.276 1.172 2.031.52.756 1.159 1.485 1.914 2.188a9.65 9.65 0 0 0 2.773 1.875c1.042.494 2.201.755 3.477.781 1.276-.026 2.435-.287 3.477-.781a9.651 9.651 0 0 0 2.773-1.875 13.399 13.399 0 0 0 1.914-2.188c.495-.755.885-1.432 1.172-2.031a17.804 17.804 0 0 0-1.172-2.031 13.399 13.399 0 0 0-1.914-2.188 9.65 9.65 0 0 0-2.773-1.875c-1.042-.495-2.201-.755-3.477-.781m-7.54 1.29a12.78 12.78 0 0 1 3.282-2.227c1.25-.6 2.67-.912 4.258-.938 1.588.026 3.008.339 4.258.938a12.78 12.78 0 0 1 3.281 2.226c.912.86 1.667 1.745 2.266 2.656.599.912 1.054 1.732 1.367 2.461.13.313.13.625 0 .938-.313.729-.768 1.55-1.367 2.46-.6.912-1.354 1.798-2.266 2.657a12.779 12.779 0 0 1-3.281 2.227c-1.25.599-2.67.911-4.258.937-1.589-.026-3.008-.338-4.258-.937a12.778 12.778 0 0 1-3.281-2.227c-.912-.86-1.667-1.745-2.266-2.656-.599-.912-1.041-1.732-1.328-2.461a1.174 1.174 0 0 1 0-.938c.287-.729.73-1.55 1.328-2.46.6-.912 1.354-1.798 2.266-2.657m7.54 8.71c.885-.026 1.628-.326 2.227-.898.572-.6.872-1.342.898-2.227-.026-.885-.325-1.628-.898-2.227-.6-.572-1.342-.872-2.227-.898h-.078c.052.208.078.417.078.625-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742-.208 0-.417-.026-.625-.078v.078c.026.885.326 1.628.898 2.227.6.572 1.342.872 2.227.898m0-8.125c.912 0 1.745.221 2.5.664A5.167 5.167 0 0 1 15.836 13c.443.781.664 1.615.664 2.5s-.221 1.719-.664 2.5A5.167 5.167 0 0 1 14 19.836a4.853 4.853 0 0 1-2.5.664 4.853 4.853 0 0 1-2.5-.664A5.167 5.167 0 0 1 7.164 18a4.991 4.991 0 0 1-.664-2.5c0-.885.221-1.719.664-2.5A5.167 5.167 0 0 1 9 11.164a4.853 4.853 0 0 1 2.5-.664'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEyeLgBoldIcon);
export default ForwardRef;
