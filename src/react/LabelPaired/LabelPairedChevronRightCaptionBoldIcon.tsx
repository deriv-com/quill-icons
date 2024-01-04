import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedChevronRightCaptionBoldIcon = (
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
        d='M7.398 9.102c.22.265.22.53 0 .796l-4.5 4.5c-.265.22-.53.22-.796 0-.22-.265-.22-.53 0-.796L6.203 9.5 2.102 5.398c-.22-.265-.22-.53 0-.796.265-.22.53-.22.796 0l4.5 4.5Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronRightCaptionBoldIcon);
export default ForwardRef;
