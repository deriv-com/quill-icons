import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTwoMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={10}
    height={24}
    viewBox='0 0 10 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.625 6.5q-1.313.03-2.219.906L1.281 8.531q-.531.438-1.062 0Q-.22 8 .219 7.47l1.125-1.094Q2.688 5.031 4.625 5h.219q1.875.063 3.125 1.281 1.219 1.25 1.281 3.125-.031 1.906-1.406 3.219L2.656 17.5H9.25q.687.063.75.75-.063.687-.75.75H.75q-.5-.03-.687-.469-.157-.468.187-.812l6.594-6.188a3 3 0 0 0 .906-2.125q-.03-1.219-.844-2.062-.844-.813-2.062-.844z' />
    </g>
    <defs>
      <clipPath id='665ef5e90797a5c470d3dcd1e0eeab1e__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTwoMdBoldIcon);
export default ForwardRef;
