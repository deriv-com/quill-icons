import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedStopwatchMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4 4.5q.031-.469.5-.5h5q.47.031.5.5-.03.47-.5.5h-2v2.031q2.375.219 4 1.782l1.156-1.157q.345-.312.688 0 .312.345 0 .688L12.156 9.53Q13.47 11.22 13.5 13.5q-.063 2.75-1.906 4.594Q9.75 19.937 7 20q-2.75-.063-4.594-1.906Q.563 16.25.5 13.5q.063-2.626 1.75-4.437Q3.938 7.28 6.5 7.03V5h-2q-.469-.03-.5-.5m-2.5 9q0 1.5.75 2.75.72 1.25 2 2Q5.563 19 7 19t2.75-.75a5.4 5.4 0 0 0 2-2q.75-1.25.75-2.75t-.75-2.75a5.4 5.4 0 0 0-2-2A5.46 5.46 0 0 0 7 8q-1.437 0-2.75.75a5.4 5.4 0 0 0-2 2Q1.5 12 1.5 13.5m6-3V14q-.03.47-.5.5-.469-.03-.5-.5v-3.5q.031-.469.5-.5.47.031.5.5' />
    </g>
    <defs>
      <clipPath id='4dba2b89684c63700f50aaff5048a1bc__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStopwatchMdRegularIcon);
export default ForwardRef;
