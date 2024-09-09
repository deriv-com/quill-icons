import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsRightSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.05 16.328a.463.463 0 0 1-.628 0 .463.463 0 0 1 0-.629l4.95-4.949-4.95-4.922a.463.463 0 0 1 0-.629.463.463 0 0 1 .629 0l5.25 5.25a.463.463 0 0 1 0 .63zm5.25 0a.463.463 0 0 1-.628 0 .463.463 0 0 1 0-.629l4.95-4.949-4.95-4.922a.463.463 0 0 1 0-.629.463.463 0 0 1 .629 0l5.25 5.25a.463.463 0 0 1 0 .63z' />
    </g>
    <defs>
      <clipPath id='406690903c0d9ee8b9777bc2770d52ad__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsRightSmRegularIcon);
export default ForwardRef;
