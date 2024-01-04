import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedChevronUpCaptionBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M5.602 6.102c.265-.22.53-.22.796 0l4.5 4.5c.22.265.22.53 0 .796-.265.22-.53.22-.796 0L6 7.297l-4.102 4.101c-.265.22-.53.22-.796 0-.22-.265-.22-.53 0-.796l4.5-4.5Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronUpCaptionBoldIcon);
export default ForwardRef;
