import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedChevronLeftCaptionBoldIcon = (
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
        d='m.602 9.102 4.5-4.5c.265-.22.53-.22.796 0 .22.265.22.53 0 .796L1.797 9.5l4.101 4.102c.22.265.22.53 0 .796-.265.22-.53.22-.796 0l-4.5-4.5c-.22-.265-.22-.53 0-.796Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronLeftCaptionBoldIcon);
export default ForwardRef;
