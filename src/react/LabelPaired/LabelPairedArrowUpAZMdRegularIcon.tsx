import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowUpAZMdRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={24}
    viewBox='0 0 18 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m5.344 5.156 3 3c.208.23.208.459 0 .688-.23.208-.459.208-.688 0L5.5 6.719V18.5c-.02.313-.188.48-.5.5-.313-.02-.48-.188-.5-.5V6.719L2.344 8.844c-.23.208-.459.208-.688 0-.208-.23-.208-.459 0-.688l3-3c.23-.208.459-.208.688 0ZM11 13h4c.208 0 .354.094.438.281a.536.536 0 0 1-.032.531L12.031 18H15c.313.02.48.188.5.5-.02.313-.188.48-.5.5h-4a.443.443 0 0 1-.438-.281.495.495 0 0 1 .063-.532L13.969 14H11c-.313-.02-.48-.188-.5-.5.02-.313.188-.48.5-.5Zm2-8c.208 0 .354.094.438.281l2 4h.03l.47 1c.124.292.052.51-.22.656-.27.126-.489.053-.655-.218L14.687 10h-3.374l-.376.719c-.145.27-.364.344-.656.219-.27-.146-.344-.365-.219-.657l.5-1 2-4A.442.442 0 0 1 13 5Zm-1.188 4h2.376L13 6.625 11.812 9Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpAZMdRegularIcon);
export default ForwardRef;
