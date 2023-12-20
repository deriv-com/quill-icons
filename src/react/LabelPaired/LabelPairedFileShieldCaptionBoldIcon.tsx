import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedFileShieldCaptionBoldIcon = (
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
        d='M1.75 14.375h5.79c.25.344.554.656.913.938a1.314 1.314 0 0 1-.703.187h-6a1.515 1.515 0 0 1-1.055-.445A1.515 1.515 0 0 1 .25 14V5c.016-.422.164-.773.445-1.055.282-.28.633-.43 1.055-.445h3.89c.407 0 .758.148 1.055.445l2.11 2.11c.297.297.445.656.445 1.078v1.219l-1.125.445V7.25H6.25a.73.73 0 0 1-.54-.21.73.73 0 0 1-.21-.54V4.625H1.75c-.234.016-.36.14-.375.375v9c.016.234.14.36.375.375m8.414-5.578a.498.498 0 0 1 .422 0l2.812 1.125c.22.094.336.265.352.515.016.516-.07 1.094-.258 1.735-.172.64-.484 1.258-.937 1.851-.47.594-1.125 1.07-1.97 1.43a.498.498 0 0 1-.42 0c-.845-.36-1.5-.836-1.97-1.43-.453-.593-.765-1.21-.937-1.851-.188-.64-.274-1.219-.258-1.735.016-.25.133-.421.352-.515zm2.438 2.015-2.227-.89v4.406c.781-.422 1.344-.96 1.688-1.617.328-.64.507-1.274.539-1.899'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileShieldCaptionBoldIcon);
export default ForwardRef;
