import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowRightCaptionRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 11 18'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m10.633 9.758-4.125 4.125c-.172.156-.344.156-.516 0-.156-.172-.156-.344 0-.516l3.469-3.492H.625C.391 9.859.265 9.735.25 9.5c.016-.234.14-.36.375-.375h8.836L5.992 5.633c-.156-.172-.156-.344 0-.516.172-.156.344-.156.516 0l4.125 4.125c.156.172.156.344 0 .516'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightCaptionRegularIcon);
export default ForwardRef;
