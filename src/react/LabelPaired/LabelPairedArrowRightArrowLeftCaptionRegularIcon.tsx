import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowRightArrowLeftCaptionRegularIcon = (
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
        d='m10.633 6.758-2.25 2.25c-.172.156-.344.156-.516 0-.156-.172-.156-.344 0-.516l1.594-1.617H.625C.391 6.859.265 6.735.25 6.5c.016-.234.14-.36.375-.375h8.836L7.867 4.508c-.156-.172-.156-.344 0-.516.172-.156.344-.156.516 0l2.25 2.25c.156.172.156.344 0 .516m-8.016 8.25-2.25-2.25c-.156-.172-.156-.344 0-.516l2.25-2.25c.172-.156.344-.156.516 0 .156.172.156.344 0 .516l-1.594 1.617h8.836c.234.016.36.14.375.375-.016.234-.14.36-.375.375H1.539l1.594 1.617c.156.172.156.344 0 .516-.172.156-.344.156-.516 0'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightArrowLeftCaptionRegularIcon);
export default ForwardRef;
