import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedSortUpXlRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 15 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <path
      fillOpacity={0.72}
      d='m7.219 9.094-5.625 5.344a.318.318 0 0 0-.094.234c.031.187.14.297.328.328h11.344a.366.366 0 0 0 .328-.328.318.318 0 0 0-.094-.235L7.781 9.095A.504.504 0 0 0 7.5 9a.504.504 0 0 0-.281.094M6.187 8.016A1.881 1.881 0 0 1 7.5 7.5c.5 0 .938.172 1.313.516l5.624 5.297c.376.374.563.828.563 1.359s-.172.969-.516 1.312c-.343.344-.78.516-1.312.516H1.828c-.531 0-.969-.172-1.312-.516-.344-.343-.516-.78-.516-1.312 0-.531.188-.985.563-1.36z'
    />
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortUpXlRegularIcon);
export default ForwardRef;
