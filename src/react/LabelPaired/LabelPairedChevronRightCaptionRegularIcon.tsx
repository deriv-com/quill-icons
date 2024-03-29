import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronRightCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={18}
    viewBox='0 0 8 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.258 9.242c.14.14.14.399 0 .54l-4.5 4.5a.397.397 0 0 1-.54 0 .397.397 0 0 1 0-.54L6.462 9.5 2.219 5.281a.397.397 0 0 1 0-.539c.14-.14.398-.14.539 0z' />
    </g>
    <defs>
      <clipPath id='f742b123887e8f92fbc7617a9491f6cf__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronRightCaptionRegularIcon);
export default ForwardRef;
