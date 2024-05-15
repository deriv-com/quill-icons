import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSquareCheckCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.75 5a.755.755 0 0 0-.75.75v7.5c0 .422.328.75.75.75h7.5c.398 0 .75-.328.75-.75v-7.5A.77.77 0 0 0 9.25 5zm-1.5.75c0-.82.656-1.5 1.5-1.5h7.5c.82 0 1.5.68 1.5 1.5v7.5c0 .844-.68 1.5-1.5 1.5h-7.5a1.48 1.48 0 0 1-1.5-1.5zm7.758 2.531-3 3a.397.397 0 0 1-.54 0l-1.5-1.5a.397.397 0 0 1 0-.539c.141-.14.4-.14.54 0l1.242 1.242 2.719-2.742c.14-.14.398-.14.539 0 .14.14.14.399 0 .54' />
    </g>
    <defs>
      <clipPath id='e97695128bffee3b9093b3e1d9f8528a__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSquareCheckCaptionRegularIcon);
export default ForwardRef;
