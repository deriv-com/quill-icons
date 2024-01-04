import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowDownAZMdRegularIcon = (
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
        d='m8.344 15.844-3 3c-.23.208-.459.208-.688 0l-3-3c-.208-.23-.208-.459 0-.688.23-.208.459-.208.688 0L4.5 17.281V5.5c.02-.313.188-.48.5-.5.313.02.48.188.5.5v11.781l2.156-2.125c.23-.208.459-.208.688 0 .208.23.208.459 0 .688ZM13.438 5.28l2 3.969v.031l.5 1c.124.271.052.49-.22.656-.29.126-.51.053-.655-.218L14.687 10h-3.374l-.376.719c-.166.27-.385.344-.656.219-.27-.146-.344-.365-.219-.657l.47-1h.03l2-4A.442.442 0 0 1 13 5c.208 0 .354.094.438.281ZM13 6.625 11.812 9h2.376L13 6.625ZM11 13h4c.208 0 .354.094.438.281a.536.536 0 0 1-.032.531L12.031 18H15c.313.02.48.188.5.5-.02.313-.188.48-.5.5h-4a.443.443 0 0 1-.438-.281.495.495 0 0 1 .063-.532L13.969 14H11c-.313-.02-.48-.188-.5-.5.02-.313.188-.48.5-.5Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownAZMdRegularIcon);
export default ForwardRef;
