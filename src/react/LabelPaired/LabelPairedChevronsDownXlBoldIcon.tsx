import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedChevronsDownXlBoldIcon = (
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
        d='m11.203 27.797-9-9c-.437-.531-.437-1.063 0-1.594.531-.437 1.063-.437 1.594 0L12 25.406l8.203-8.203c.531-.437 1.063-.437 1.594 0 .437.531.437 1.063 0 1.594l-9 9c-.531.437-1.063.437-1.594 0m-9-18c-.437-.531-.437-1.063 0-1.594.531-.437 1.063-.437 1.594 0L12 16.406l8.203-8.203c.531-.437 1.063-.437 1.594 0 .437.531.437 1.063 0 1.594l-9 9c-.531.437-1.063.437-1.594 0z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsDownXlBoldIcon);
export default ForwardRef;
