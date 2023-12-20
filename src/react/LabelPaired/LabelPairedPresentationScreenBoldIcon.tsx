import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedPresentationScreenBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 18 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M.75 4h16.5c.458.042.708.292.75.75-.042.458-.292.708-.75.75H.75C.292 5.458.042 5.208 0 4.75c.042-.458.292-.708.75-.75M1 6.5h1.5v6.75c.02.146.104.23.25.25h12.5c.146-.02.23-.104.25-.25V6.5H17v6.75c-.02.5-.187.917-.5 1.25-.333.313-.75.48-1.25.5h-5.5v1.438l2.281 2.28c.292.355.292.71 0 1.063-.354.292-.708.292-1.062 0L9 17.813 7.031 19.78c-.354.292-.708.292-1.062 0-.292-.354-.292-.708 0-1.062l2.281-2.282V15h-5.5c-.5-.02-.917-.187-1.25-.5-.312-.333-.48-.75-.5-1.25z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPresentationScreenBoldIcon);
export default ForwardRef;
