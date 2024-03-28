import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownLeftSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={22}
    viewBox='0 0 11 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.125 14.25V8.125c0-.465.383-.875.875-.875a.9.9 0 0 1 .875.875v4.02l5.496-5.497a.843.843 0 0 1 1.23 0 .843.843 0 0 1 0 1.23l-5.496 5.497h4.02A.9.9 0 0 1 9 14.25c0 .492-.41.875-.875.875H2a.864.864 0 0 1-.875-.875' />
    </g>
    <defs>
      <clipPath id='57fd754c146ea89bd7b3327c5e75c488__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownLeftSmFillIcon);
export default ForwardRef;
