import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedChartTrendDownXlBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 30 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M28.969 29.531c-.563.282-1.219.047-1.5-.515l-4.172-8.391H16.5c-.469 0-.844-.234-1.031-.61L9.984 9.048 1.97 13.03c-.563.281-1.219.047-1.5-.515-.281-.563-.047-1.22.515-1.5l9-4.5c.563-.282 1.22-.047 1.5.515l5.672 11.344h6.797c.469 0 .844.281 1.031.656l4.5 9c.282.563.047 1.219-.515 1.5'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartTrendDownXlBoldIcon);
export default ForwardRef;
