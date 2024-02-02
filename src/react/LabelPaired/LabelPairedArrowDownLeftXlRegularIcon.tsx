import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownLeftXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={36}
    viewBox='0 0 18 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.25 25.5q-.703-.046-.75-.75v-10.5q.046-.703.75-.75.704.047.75.75v8.672l12.234-12.188q.516-.468 1.032 0 .468.516 0 1.032L4.078 24h8.672q.703.046.75.75-.047.704-.75.75z' />
    </g>
    <defs>
      <clipPath id='c031b83c9afbb13d__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownLeftXlRegularIcon);
export default ForwardRef;
