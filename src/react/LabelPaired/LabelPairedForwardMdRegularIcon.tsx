import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedForwardMdRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M14.813 12 8 7.062v9.875L14.813 12ZM7.936 6c.209 0 .396.063.563.188l7.188 5.218A.688.688 0 0 1 16 12c0 .25-.104.448-.313.594L8.5 17.813a.914.914 0 0 1-.563.187.836.836 0 0 1-.656-.281.836.836 0 0 1-.281-.657v-3.218l-5.5 3.969A.914.914 0 0 1 .937 18a.836.836 0 0 1-.656-.281.836.836 0 0 1-.281-.657V6.938c0-.27.094-.49.281-.656A.836.836 0 0 1 .937 6c.209 0 .396.063.563.188L7 10.155V6.937c0-.27.094-.49.281-.656A.836.836 0 0 1 7.938 6ZM7 12.594v-1.188L1 7.062v9.875l6-4.343Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardMdRegularIcon);
export default ForwardRef;
