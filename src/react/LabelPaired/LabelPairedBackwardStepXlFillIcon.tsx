import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBackwardStepXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={36}
    viewBox='0 0 15 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m12.563 26.672-9-7.5L3 18.703V25.5q0 .657-.422 1.078Q2.157 27 1.5 27q-.656 0-1.078-.422Q0 26.157 0 25.5v-15q0-.656.422-1.078Q.843 9 1.5 9t1.078.422Q3 9.843 3 10.5v6.797l.563-.469 9-7.5q.703-.562 1.593-.187.797.42.844 1.359v15q-.046.937-.844 1.36-.89.375-1.594-.188' />
    </g>
    <defs>
      <clipPath id='69d19781d89f4a548cf1f93e56e767b4__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardStepXlFillIcon);
export default ForwardRef;
