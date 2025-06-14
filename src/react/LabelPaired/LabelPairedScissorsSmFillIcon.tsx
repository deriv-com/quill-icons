import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedScissorsSmFillIcon = (
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
      <path d='m7 9 3.828-3.828a1.965 1.965 0 0 1 2.817 0 .48.48 0 0 1 0 .683l-7.739 7.739a3 3 0 0 1 .219 1.094 3.075 3.075 0 0 1-3.062 3.062A3.057 3.057 0 0 1 0 14.688a3.075 3.075 0 0 1 3.063-3.063c.382 0 .738.082 1.093.219L5.25 10.75 4.156 9.684c-.355.136-.71.191-1.093.191A3.057 3.057 0 0 1 0 6.813 3.075 3.075 0 0 1 3.063 3.75c1.667 0 3.062 1.395 3.062 3.063 0 .41-.082.765-.219 1.12zm.602 4.129 1.75-1.75 4.293 4.293a.48.48 0 0 1 0 .683 1.965 1.965 0 0 1-2.817 0zM1.75 6.813c0 .492.246.902.656 1.148.383.246.903.246 1.313 0 .383-.246.656-.656.656-1.149 0-.464-.273-.875-.656-1.12-.41-.247-.93-.247-1.313 0-.41.245-.656.656-.656 1.12m1.313 6.562c-.493 0-.903.273-1.149.656-.246.41-.246.93 0 1.313.246.41.656.656 1.149.656.464 0 .874-.246 1.12-.656.247-.383.247-.903 0-1.313-.245-.383-.656-.656-1.12-.656' />
    </g>
    <defs>
      <clipPath id='5e803c1188a94eae4929c3a32946da39__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedScissorsSmFillIcon);
export default ForwardRef;
