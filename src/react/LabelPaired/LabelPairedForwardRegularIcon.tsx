import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedForwardRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 16 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M14.813 12 8 7.063v9.875zM7.937 6c.209 0 .396.063.563.188l7.188 5.218A.688.688 0 0 1 16 12c0 .25-.104.448-.312.594L8.5 17.813a.914.914 0 0 1-.562.187.836.836 0 0 1-.657-.281.836.836 0 0 1-.281-.657v-3.218l-5.5 3.969A.914.914 0 0 1 .938 18a.836.836 0 0 1-.657-.281.836.836 0 0 1-.281-.657V6.938c0-.27.094-.49.281-.656A.836.836 0 0 1 .938 6c.208 0 .395.063.562.188L7 10.156V6.937c0-.27.094-.49.281-.656A.836.836 0 0 1 7.938 6M7 12.594v-1.188L1 7.062v9.875z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardRegularIcon);
export default ForwardRef;
