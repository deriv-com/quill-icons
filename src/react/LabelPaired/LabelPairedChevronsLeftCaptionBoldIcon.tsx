import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedChevronsLeftCaptionBoldIcon = (
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
        d='m1.102 9.102 4.5-4.5c.265-.22.53-.22.796 0 .22.265.22.53 0 .796L2.297 9.5l4.101 4.102c.22.265.22.53 0 .796-.265.22-.53.22-.796 0l-4.5-4.5c-.22-.265-.22-.53 0-.796Zm9-4.5c.265-.22.53-.22.796 0 .22.265.22.53 0 .796L6.797 9.5l4.101 4.102c.22.265.22.53 0 .796-.265.22-.53.22-.796 0l-4.5-4.5c-.22-.265-.22-.53 0-.796l4.5-4.5Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsLeftCaptionBoldIcon);
export default ForwardRef;
