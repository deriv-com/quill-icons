import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedXmarkCaptionRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 9 18'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M7.617 13.133 4.5 10.039l-3.094 3.094c-.187.14-.367.14-.539 0-.14-.172-.14-.344 0-.516L3.961 9.5.867 6.406c-.14-.187-.14-.367 0-.539.172-.14.352-.14.54 0L4.5 8.961l3.117-3.094c.172-.14.344-.14.516 0 .14.172.14.352 0 .54L5.039 9.5l3.094 3.117c.14.172.14.344 0 .516-.172.14-.344.14-.516 0'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedXmarkCaptionRegularIcon);
export default ForwardRef;
