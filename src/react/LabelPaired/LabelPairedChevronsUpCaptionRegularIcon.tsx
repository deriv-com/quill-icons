import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedChevronsUpCaptionRegularIcon = (
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
        d='m6.258 4.742 4.5 4.5c.156.172.156.344 0 .516-.172.156-.344.156-.516 0L6 5.539 1.758 9.758c-.172.156-.344.156-.516 0-.156-.172-.156-.344 0-.516l4.5-4.5c.172-.156.344-.156.516 0m4.5 9c.156.172.156.344 0 .516-.172.156-.344.156-.516 0L6 10.039l-4.242 4.219c-.172.156-.344.156-.516 0-.156-.172-.156-.344 0-.516l4.5-4.5c.172-.156.344-.156.516 0z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsUpCaptionRegularIcon);
export default ForwardRef;
