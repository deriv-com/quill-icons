import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsUpSmRegularIcon = (
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
      <path d='m7.3 5.2 5.25 5.25a.463.463 0 0 1 0 .628.463.463 0 0 1-.628 0L7 6.128l-4.95 4.95a.463.463 0 0 1-.628 0 .463.463 0 0 1 0-.629l5.25-5.25a.463.463 0 0 1 .629 0m5.25 10.5a.463.463 0 0 1 0 .628.463.463 0 0 1-.628 0L7 11.378l-4.95 4.95a.463.463 0 0 1-.628 0 .463.463 0 0 1 0-.629l5.25-5.25a.463.463 0 0 1 .629 0z' />
    </g>
    <defs>
      <clipPath id='4481e0e6ed428721823fbc11d78ea090__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsUpSmRegularIcon);
export default ForwardRef;
