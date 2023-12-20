import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedForwardBoldIcon = (
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
        d='M7 6.938c0-.271.094-.49.281-.657A.836.836 0 0 1 7.938 6c.208 0 .395.063.562.188l7.188 5.218A.688.688 0 0 1 16 12c0 .25-.104.448-.312.594L8.5 17.813a.914.914 0 0 1-.562.187.836.836 0 0 1-.657-.281.836.836 0 0 1-.281-.657V13.97l-5.531 3.875A.986.986 0 0 1 .937 18a.836.836 0 0 1-.656-.281.836.836 0 0 1-.281-.657V6.938c0-.27.094-.49.281-.656A.836.836 0 0 1 .938 6a.89.89 0 0 1 .53.156L7 10.031zm0 4.937L1.5 8.031V16L7 12.125zm6.969.125L8.5 8.031v7.938z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardBoldIcon);
export default ForwardRef;
