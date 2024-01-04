import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedSortCaptionBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={18}
    viewBox='0 0 8 18'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M1.914 7.625h4.172L4 5.539 1.914 7.625ZM4.54 4.461l3 3c.219.25.274.523.164.82A.768.768 0 0 1 7 8.75H1a.768.768 0 0 1-.703-.469c-.11-.297-.055-.57.164-.82l3-3A.782.782 0 0 1 4 4.25c.203 0 .383.07.54.21Zm-2.625 6.914L4 13.461l2.086-2.086H1.914Zm2.625 3.164A.782.782 0 0 1 4 14.75a.782.782 0 0 1-.54-.21l-3-3c-.218-.25-.273-.524-.163-.821A.768.768 0 0 1 1 10.25h6a.768.768 0 0 1 .703.469c.11.297.055.57-.164.82l-3 3Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortCaptionBoldIcon);
export default ForwardRef;
