import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowRightCaptionBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M10.586 9.898 6.46 13.836c-.281.219-.547.219-.797 0-.219-.281-.219-.547 0-.797l3.117-2.976H.812C.47 10.03.282 9.842.25 9.5c.031-.344.219-.531.563-.563H8.78L5.687 5.962c-.234-.25-.242-.516-.023-.797.25-.219.516-.219.797 0l4.125 3.938c.11.109.164.242.164.398 0 .156-.055.29-.164.398Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightCaptionBoldIcon);
export default ForwardRef;
