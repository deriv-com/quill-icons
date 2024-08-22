import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronUpSmRegularIcon = (
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
      <path d='M6.672 6.95a.463.463 0 0 1 .629 0l5.25 5.25a.463.463 0 0 1 0 .628.463.463 0 0 1-.63 0L7 7.878l-4.95 4.95a.463.463 0 0 1-.628 0 .463.463 0 0 1 0-.629z' />
    </g>
    <defs>
      <clipPath id='60350eb125df92c968eab248218fe9ac__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronUpSmRegularIcon);
export default ForwardRef;
