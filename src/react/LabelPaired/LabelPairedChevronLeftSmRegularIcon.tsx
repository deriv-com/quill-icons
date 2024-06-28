import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronLeftSmRegularIcon = (
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
      <path d='M.672 11.078a.463.463 0 0 1 0-.629l5.25-5.25a.463.463 0 0 1 .629 0 .463.463 0 0 1 0 .63L1.6 10.75l4.95 4.95a.463.463 0 0 1 0 .628.463.463 0 0 1-.63 0z' />
    </g>
    <defs>
      <clipPath id='c2c81813df9569b62928bb11bfc87b03__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronLeftSmRegularIcon);
export default ForwardRef;
