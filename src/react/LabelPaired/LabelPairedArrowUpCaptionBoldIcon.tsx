import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowUpCaptionBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={18}
    viewBox='0 0 9 18'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M4.898 4.414v.024l3.938 4.125c.219.265.219.523 0 .773-.281.219-.547.219-.797 0L5.063 6.219v7.968c-.032.344-.22.532-.563.563-.344-.031-.531-.219-.563-.563V6.22L.962 9.312c-.25.235-.516.243-.797.024-.219-.25-.219-.516 0-.797l3.938-4.125A.542.542 0 0 1 4.5 4.25c.156 0 .29.055.398.164Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpCaptionBoldIcon);
export default ForwardRef;
