import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsLeftSmRegularIcon = (
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
      <path d='m1.422 10.45 5.25-5.25a.463.463 0 0 1 .629 0 .463.463 0 0 1 0 .628L2.35 10.75l4.95 4.95a.463.463 0 0 1 0 .628.463.463 0 0 1-.63 0l-5.25-5.25a.463.463 0 0 1 0-.629m10.5-5.25a.463.463 0 0 1 .629 0 .463.463 0 0 1 0 .628L7.6 10.75l4.95 4.95a.463.463 0 0 1 0 .628.463.463 0 0 1-.63 0l-5.25-5.25a.463.463 0 0 1 0-.629z' />
    </g>
    <defs>
      <clipPath id='0936b0371308cb4d8ea408e1c5f5ac94__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsLeftSmRegularIcon);
export default ForwardRef;
