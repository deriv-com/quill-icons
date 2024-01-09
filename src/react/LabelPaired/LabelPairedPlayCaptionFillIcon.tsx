import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedPlayCaptionFillIcon = (
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
    <g>
      <path d='M1.71 4.414 8.46 8.54c.345.234.524.555.54.961-.016.422-.195.742-.54.96l-6.75 4.126c-.374.219-.75.226-1.124.023A1.119 1.119 0 0 1 0 13.625v-8.25c.016-.437.21-.766.586-.984.375-.203.75-.196 1.125.023' />
    </g>
    <defs>
      <clipPath id='7bc307e3e923bbb79b3be62cbebb5271__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlayCaptionFillIcon);
export default ForwardRef;
