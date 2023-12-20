import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedBookmarkXlBoldIcon = (
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
        d='M0 8.25c.031-.625.25-1.156.656-1.594A2.446 2.446 0 0 1 2.25 6v20.672l6.094-4.313c.437-.28.875-.28 1.312 0l6.094 4.313V8.25H2.25V6h13.5c.625.031 1.156.25 1.594.656.406.438.625.969.656 1.594v20.625c0 .438-.203.766-.61.984-.406.188-.796.172-1.171-.047L9 24.657l-7.219 5.157c-.375.218-.765.234-1.172.046A1.173 1.173 0 0 1 0 28.875z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBookmarkXlBoldIcon);
export default ForwardRef;
