import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartLineUpDownMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.75 5q.687.063.75.75v11q.063.687.75.75h13q.687.063.75.75-.063.687-.75.75h-13q-.969-.031-1.594-.656Q.032 17.719 0 16.75v-11Q.063 5.063.75 5m11 2.5q-.687-.063-.75-.75.063-.687.75-.75h2.5q.312 0 .531.219A.72.72 0 0 1 15 6.75v2.5q-.063.687-.75.75-.687-.063-.75-.75v-.687L9.531 12.53q-.531.438-1.062 0L6.5 10.562l-1.969 1.97q-.531.435-1.062 0-.438-.533 0-1.063l2.5-2.5q.531-.438 1.062 0L9 10.938 12.438 7.5zm0 8.5q-.687-.063-.75-.75.063-.687.75-.75h.688l-1.47-1.469 1.063-1.062 1.469 1.469v-.688q.063-.687.75-.75.687.063.75.75v2.5a.72.72 0 0 1-.219.531.72.72 0 0 1-.531.219z' />
    </g>
    <defs>
      <clipPath id='cc24f85aecb73d39202a8d7d9ce079d7__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartLineUpDownMdBoldIcon);
export default ForwardRef;
