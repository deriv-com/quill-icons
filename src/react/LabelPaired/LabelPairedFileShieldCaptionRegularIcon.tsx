import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedFileShieldCaptionRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 14 18'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M7.75 14.75h.094c.187.203.39.398.61.586a1.46 1.46 0 0 1-.704.164h-6a1.515 1.515 0 0 1-1.055-.445A1.515 1.515 0 0 1 .25 14V5c.016-.422.164-.773.445-1.055.282-.28.633-.43 1.055-.445h3.656c.313 0 .578.11.797.328l2.719 2.719c.219.219.328.484.328.797v1.008l-.75.304V8H5.875a1.223 1.223 0 0 1-.797-.328 1.223 1.223 0 0 1-.328-.797V4.25h-3a.73.73 0 0 0-.54.21A.73.73 0 0 0 1 5v9c0 .219.07.398.21.54.142.14.321.21.54.21zm.75-7.5a.625.625 0 0 0-.117-.164L5.664 4.367a.348.348 0 0 0-.164-.094v2.602c.016.234.14.36.375.375zm-.75 3.305c0 .656.164 1.36.492 2.11.328.75.914 1.374 1.758 1.874V9.664zm5.25 0-2.25-.89v4.874c.844-.5 1.43-1.125 1.758-1.875.328-.75.492-1.453.492-2.11m-2.414-1.758 2.812 1.125c.22.094.336.265.352.515.016.516-.07 1.094-.258 1.735-.172.64-.484 1.258-.937 1.851-.47.594-1.125 1.07-1.97 1.43a.498.498 0 0 1-.42 0c-.845-.36-1.5-.836-1.97-1.43-.453-.593-.765-1.21-.937-1.851-.188-.64-.274-1.219-.258-1.735.016-.25.133-.421.352-.515l2.812-1.125a.498.498 0 0 1 .422 0'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileShieldCaptionRegularIcon);
export default ForwardRef;
