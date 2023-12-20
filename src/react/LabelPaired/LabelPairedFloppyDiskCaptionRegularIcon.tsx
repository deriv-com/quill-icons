import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedFloppyDiskCaptionRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 11 18'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M1 5.75v7.5c0 .219.07.398.21.54.142.14.321.21.54.21h7.5a.73.73 0 0 0 .54-.21.73.73 0 0 0 .21-.54V7.508a.73.73 0 0 0-.21-.54L8.03 5.212a.639.639 0 0 0-.281-.164V7.25a.73.73 0 0 1-.21.54A.73.73 0 0 1 7 8H2.5a.73.73 0 0 1-.54-.21.73.73 0 0 1-.21-.54V5a.73.73 0 0 0-.54.21.73.73 0 0 0-.21.54M2.5 5v2.25H7V5zm-2.25.75c.016-.422.164-.773.445-1.055.282-.28.633-.43 1.055-.445h5.742c.422 0 .781.148 1.078.445l1.735 1.735c.297.297.445.656.445 1.078v5.742a1.515 1.515 0 0 1-.445 1.055c-.282.28-.633.43-1.055.445h-7.5a1.515 1.515 0 0 1-1.055-.445A1.515 1.515 0 0 1 .25 13.25zM6.625 11a1.168 1.168 0 0 0-.562-.984 1.195 1.195 0 0 0-1.125 0c-.36.234-.547.562-.563.984.016.422.203.75.563.984.375.188.75.188 1.125 0 .359-.234.546-.562.562-.984M5.5 9.125c.703.016 1.242.328 1.617.938.344.624.344 1.25 0 1.874-.375.61-.914.922-1.617.938-.703-.016-1.242-.328-1.617-.937-.344-.626-.344-1.25 0-1.876.375-.609.914-.921 1.617-.937'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFloppyDiskCaptionRegularIcon);
export default ForwardRef;
