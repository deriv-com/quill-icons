import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleEuroMdRegularIcon = (
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
      <path d='M15 12a7.2 7.2 0 0 0-.937-3.5A7.2 7.2 0 0 0 11.5 5.938a7 7 0 0 0-7 0A7.2 7.2 0 0 0 1.938 8.5 7.2 7.2 0 0 0 1 12q.03 1.906.938 3.5A7.2 7.2 0 0 0 4.5 18.063a7 7 0 0 0 7 0 7.2 7.2 0 0 0 2.563-2.563A7.2 7.2 0 0 0 15 12M0 12q.03-2.187 1.063-4Q2.125 6.188 4 5.063 5.906 4 8 4t4 1.063Q13.875 6.188 14.938 8q1.03 1.813 1.062 4-.03 2.188-1.062 4-1.063 1.812-2.938 2.938Q10.095 20 8 20t-4-1.062Q2.124 17.813 1.063 16 .03 14.188 0 12m4 .5h.75a4 4 0 0 1-.031-.469q0-.28.031-.531H4q-.469-.03-.5-.5.031-.469.5-.5h1.063a3.4 3.4 0 0 1 1.28-1.437A3.36 3.36 0 0 1 8.25 8.5h1.281q.47.031.5.5-.03.47-.5.5H8.25q-1.28.03-2 1H9q.47.031.5.5-.03.47-.5.5H5.781a2.2 2.2 0 0 0-.062.531q0 .25.062.469H9q.47.031.5.5-.03.47-.5.5H6.188q.75 1 2.062 1.063h1.281q.47.03.5.5-.03.437-.5.5H8.25q-1.094-.032-1.937-.594a3.4 3.4 0 0 1-1.25-1.469H4q-.469-.03-.5-.5.031-.469.5-.5' />
    </g>
    <defs>
      <clipPath id='bb23536fa51a931aea5422bdaa446b63__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleEuroMdRegularIcon);
export default ForwardRef;
