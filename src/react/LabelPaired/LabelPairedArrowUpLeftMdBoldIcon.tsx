import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpLeftMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={24}
    viewBox='0 0 12 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.75 7h7.5q.687.063.75.75-.063.687-.75.75H3.563l7.218 7.219q.438.531 0 1.062-.531.438-1.062 0L2.5 9.563v5.687q-.063.687-.75.75-.687-.063-.75-.75v-7.5q.063-.687.75-.75' />
    </g>
    <defs>
      <clipPath id='5428fb18611702200fac735c8936b26e__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpLeftMdBoldIcon);
export default ForwardRef;
