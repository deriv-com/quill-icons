import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleArrowDownLeftMdRegularIcon = (
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
      <path d='M8 5a7.2 7.2 0 0 0-3.5.938A7.2 7.2 0 0 0 1.938 8.5a7 7 0 0 0 0 7A7.2 7.2 0 0 0 4.5 18.063 7.2 7.2 0 0 0 8 19a7.2 7.2 0 0 0 3.5-.937 7.2 7.2 0 0 0 2.563-2.563 7 7 0 0 0 0-7A7.2 7.2 0 0 0 11.5 5.938 7.2 7.2 0 0 0 8 5m0 15q-2.187-.03-4-1.062Q2.188 17.875 1.063 16 0 14.095 0 12t1.063-4Q2.188 6.124 4 5.063 5.813 4.03 8 4q2.188.03 4 1.063Q13.813 6.125 14.938 8 16 9.906 16 12t-1.062 4Q13.813 17.875 12 18.938 10.188 19.968 8 20m1.75-5H5.5q-.469-.03-.5-.5V10q.031-.469.5-.5.47.031.5.5v3.281l4.156-4.125q.345-.312.688 0 .312.345 0 .688L6.719 14H9.75q.47.031.5.5-.03.47-.5.5' />
    </g>
    <defs>
      <clipPath id='b537b84cd2c31893accc06d57da12746__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleArrowDownLeftMdRegularIcon);
export default ForwardRef;
