import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedXmarkXlRegularIcon = (
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
        d='M15.234 25.266 9 19.078l-6.187 6.188c-.376.28-.735.28-1.079 0-.28-.344-.28-.688 0-1.032L7.922 18l-6.188-6.187c-.28-.376-.28-.735 0-1.079.344-.28.704-.28 1.079 0L9 16.922l6.234-6.188c.344-.28.688-.28 1.032 0 .28.344.28.704 0 1.079L10.078 18l6.188 6.234c.28.344.28.688 0 1.032-.344.28-.688.28-1.032 0'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedXmarkXlRegularIcon);
export default ForwardRef;
