import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedSearchLgRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 20 30'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M15 13.625c0-1.25-.312-2.396-.937-3.437a6.772 6.772 0 0 0-2.5-2.5c-1.094-.625-2.24-.938-3.438-.938s-2.344.313-3.437.938a6.772 6.772 0 0 0-2.5 2.5 6.556 6.556 0 0 0-.938 3.437c0 1.25.313 2.396.938 3.438a6.772 6.772 0 0 0 2.5 2.5c1.093.625 2.24.937 3.437.937 1.198 0 2.344-.312 3.438-.937a6.772 6.772 0 0 0 2.5-2.5A6.556 6.556 0 0 0 15 13.625m-1.602 6.172c-1.458 1.25-3.216 1.9-5.273 1.953-2.292-.052-4.206-.846-5.742-2.383C.846 17.831.053 15.917 0 13.625c.052-2.292.846-4.206 2.383-5.742 1.536-1.537 3.45-2.33 5.742-2.383 2.292.052 4.206.846 5.742 2.383 1.537 1.536 2.33 3.45 2.383 5.742-.052 2.057-.703 3.815-1.953 5.273l5.508 5.547c.26.287.26.573 0 .86-.287.26-.573.26-.86 0z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSearchLgRegularIcon);
export default ForwardRef;
