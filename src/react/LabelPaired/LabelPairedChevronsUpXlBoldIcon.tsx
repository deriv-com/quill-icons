import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedChevronsUpXlBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m12.797 8.203 9 9c.437.531.437 1.063 0 1.594-.531.437-1.063.437-1.594 0L12 10.594l-8.203 8.203c-.531.437-1.063.437-1.594 0-.437-.531-.437-1.063 0-1.594l9-9c.531-.437 1.063-.437 1.594 0m9 18c.437.531.437 1.063 0 1.594-.531.437-1.063.437-1.594 0L12 19.594l-8.203 8.203c-.531.437-1.063.437-1.594 0-.437-.531-.437-1.063 0-1.594l9-9c.531-.437 1.063-.437 1.594 0z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsUpXlBoldIcon);
export default ForwardRef;
