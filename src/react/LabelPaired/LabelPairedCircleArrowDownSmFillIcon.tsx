import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleArrowDownSmFillIcon = (
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
      <path d='M7 3.75c2.488 0 4.785 1.34 6.043 3.5 1.258 2.188 1.258 4.84 0 7A6.95 6.95 0 0 1 7 17.75a6.96 6.96 0 0 1-6.07-3.5c-1.258-2.16-1.258-4.812 0-7A7.02 7.02 0 0 1 7 3.75m-3.527 7.684 3.062 3.062c.246.274.656.274.93 0l3.035-3.062a.6.6 0 0 0 0-.903.6.6 0 0 0-.902 0l-1.942 1.942V7.469c0-.356-.3-.657-.656-.657-.383 0-.656.301-.656.657l-.028 5.004-1.941-1.942a.6.6 0 0 0-.902 0 .6.6 0 0 0 0 .903' />
    </g>
    <defs>
      <clipPath id='32353b7b722b717a29ada4baf3ed28e7__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleArrowDownSmFillIcon);
export default ForwardRef;
