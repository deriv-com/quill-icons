import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedChevronsRightCaptionRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 12 18'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M1.758 14.258c-.172.156-.344.156-.516 0-.156-.172-.156-.344 0-.516L5.461 9.5 1.242 5.258c-.156-.172-.156-.344 0-.516.172-.156.344-.156.516 0l4.5 4.5c.156.172.156.344 0 .516zm4.5 0c-.172.156-.344.156-.516 0-.156-.172-.156-.344 0-.516L9.961 9.5 5.742 5.258c-.156-.172-.156-.344 0-.516.172-.156.344-.156.516 0l4.5 4.5c.156.172.156.344 0 .516z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsRightCaptionRegularIcon);
export default ForwardRef;
