import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedPercentXlBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 18 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m17.297 11.297-15 15c-.531.437-1.063.437-1.594 0-.437-.531-.437-1.063 0-1.594l15-15c.531-.437 1.063-.437 1.594 0 .437.531.437 1.063 0 1.594M5.25 12c-.031.844-.406 1.5-1.125 1.969-.75.375-1.5.375-2.25 0C1.156 13.5.781 12.844.75 12c.031-.844.406-1.5 1.125-1.969.75-.375 1.5-.375 2.25 0C4.844 10.5 5.219 11.156 5.25 12m12 12c-.031.844-.406 1.5-1.125 1.969-.75.375-1.5.375-2.25 0-.719-.469-1.094-1.125-1.125-1.969.031-.844.406-1.5 1.125-1.969.75-.375 1.5-.375 2.25 0 .719.469 1.094 1.125 1.125 1.969'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPercentXlBoldIcon);
export default ForwardRef;
