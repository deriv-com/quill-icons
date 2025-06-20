import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPercentCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={18}
    viewBox='0 0 9 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.5 5.75a.755.755 0 0 0-.75.75c0 .422.328.75.75.75.398 0 .75-.328.75-.75a.77.77 0 0 0-.75-.75M1.5 8C.96 8 .469 7.719.188 7.25a1.55 1.55 0 0 1 0-1.5C.468 5.305.96 5 1.5 5c.516 0 1.008.305 1.29.75a1.55 1.55 0 0 1 0 1.5c-.282.469-.774.75-1.29.75m6 3.75a.755.755 0 0 0-.75.75c0 .422.328.75.75.75.398 0 .75-.328.75-.75a.77.77 0 0 0-.75-.75m0 2.25c-.54 0-1.031-.281-1.312-.75a1.55 1.55 0 0 1 0-1.5c.28-.445.773-.75 1.312-.75.516 0 1.008.305 1.29.75a1.55 1.55 0 0 1 0 1.5c-.282.469-.774.75-1.29.75m1.383-8.344-8.25 8.25a.397.397 0 0 1-.54 0 .397.397 0 0 1 0-.539l8.25-8.25c.141-.14.4-.14.54 0s.14.399 0 .54' />
    </g>
    <defs>
      <clipPath id='6b33513a0bc01c84510e4b127a65b053__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPercentCaptionRegularIcon);
export default ForwardRef;
