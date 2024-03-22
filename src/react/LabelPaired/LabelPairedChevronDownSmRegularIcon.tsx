import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronDownSmRegularIcon = (
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
      <path d='M7.3 14.578a.463.463 0 0 1-.628 0l-5.25-5.25a.463.463 0 0 1 0-.629.463.463 0 0 1 .629 0L7 13.65l4.922-4.95a.463.463 0 0 1 .629 0 .463.463 0 0 1 0 .63z' />
    </g>
    <defs>
      <clipPath id='2ca8762dce731bebd02f90d491f8db5a__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronDownSmRegularIcon);
export default ForwardRef;
