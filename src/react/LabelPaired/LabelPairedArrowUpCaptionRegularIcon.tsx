import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpCaptionRegularIcon = (
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
      <path d='m4.758 4.367 4.125 4.125c.14.14.14.399 0 .54a.397.397 0 0 1-.54 0L4.876 5.538v8.836c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375V5.539L.633 9.031a.397.397 0 0 1-.54 0 .397.397 0 0 1 0-.539L4.22 4.367c.14-.14.398-.14.539 0' />
    </g>
    <defs>
      <clipPath id='a9f8515bd95f2ae8d1e31da67f0050f6__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpCaptionRegularIcon);
export default ForwardRef;
