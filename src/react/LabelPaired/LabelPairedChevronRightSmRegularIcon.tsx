import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronRightSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={22}
    viewBox='0 0 9 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8.3 10.45a.463.463 0 0 1 0 .628l-5.25 5.25a.463.463 0 0 1-.628 0 .463.463 0 0 1 0-.629l4.95-4.949-4.95-4.922a.463.463 0 0 1 0-.629.463.463 0 0 1 .629 0z' />
    </g>
    <defs>
      <clipPath id='9d49f47224bec7ecc0c6cc29b86abb2e__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronRightSmRegularIcon);
export default ForwardRef;
