import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedChevronsLeftXlBoldIcon = (
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
        d='m2.203 17.203 9-9c.531-.437 1.063-.437 1.594 0 .437.531.437 1.063 0 1.594L4.594 18l8.203 8.203c.437.531.437 1.063 0 1.594-.531.437-1.063.437-1.594 0l-9-9c-.437-.531-.437-1.063 0-1.594m18-9c.531-.437 1.063-.437 1.594 0 .437.531.437 1.063 0 1.594L13.594 18l8.203 8.203c.437.531.437 1.063 0 1.594-.531.437-1.063.437-1.594 0l-9-9c-.437-.531-.437-1.063 0-1.594z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsLeftXlBoldIcon);
export default ForwardRef;
