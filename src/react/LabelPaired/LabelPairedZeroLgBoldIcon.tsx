import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedZeroLgBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={30}
    viewBox='0 0 13 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M.25 13c.052-1.77.664-3.242 1.836-4.414C3.258 7.414 4.729 6.802 6.5 6.75c1.77.052 3.242.664 4.414 1.836 1.172 1.172 1.784 2.643 1.836 4.414v5c-.052 1.77-.664 3.242-1.836 4.414-1.172 1.172-2.643 1.784-4.414 1.836-1.77-.052-3.242-.664-4.414-1.836C.914 21.242.302 19.771.25 18v-5ZM6.5 8.625c-1.25.026-2.279.456-3.086 1.29-.833.806-1.263 1.835-1.289 3.085v5c.026 1.25.456 2.279 1.29 3.086.806.833 1.835 1.263 3.085 1.289 1.25-.026 2.279-.456 3.086-1.29.833-.806 1.263-1.835 1.289-3.085v-5c-.026-1.25-.456-2.279-1.29-3.086C8.78 9.081 7.75 8.651 6.5 8.625Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedZeroLgBoldIcon);
export default ForwardRef;
