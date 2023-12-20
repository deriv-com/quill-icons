import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedBackwardFillIcon = (
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
        d='M14.375 17.781 9 13.313v-2.625l5.375-4.47c.313-.25.667-.29 1.063-.124.354.187.541.49.562.906v10c-.02.417-.208.719-.562.906-.396.167-.75.125-1.063-.125M8 15v2c-.02.417-.208.719-.562.906-.396.167-.75.125-1.063-.125l-6-5A.976.976 0 0 1 0 12c0-.312.125-.573.375-.781l6-5c.313-.25.667-.292 1.063-.125.354.187.541.49.562.906v5z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardFillIcon);
export default ForwardRef;
