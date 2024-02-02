import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPersonChalkboardMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5.25 5.75q.063.687.75.75.687-.063.75-.75Q6.687 5.063 6 5q-.687.063-.75.75m2.5 0q-.03 1-.875 1.5-.875.5-1.75 0-.843-.5-.875-1.5.031-1 .875-1.5.875-.5 1.75 0 .844.5.875 1.5M5.594 9Q5.28 9 5 9.125V14h2V9zM5 19.5q-.03.47-.5.5-.469-.03-.5-.5v-9.187L2.438 13.25q-.25.375-.657.188-.405-.25-.218-.657l1.843-3.469Q4.126 8.063 5.594 8H10V5.5q.03-.625.438-1.062A1.63 1.63 0 0 1 11.5 4h7q.625.03 1.063.438.405.436.437 1.062v7a1.63 1.63 0 0 1-.437 1.063A1.63 1.63 0 0 1 18.5 14h-7a1.63 1.63 0 0 1-1.062-.437A1.63 1.63 0 0 1 10 12.5V10h1v2.5q.031.47.5.5h7q.47-.03.5-.5v-7q-.03-.469-.5-.5h-7q-.469.031-.5.5V8h1.5q.47.031.5.5-.03.47-.5.5H8v10.5q-.03.47-.5.5-.469-.03-.5-.5V15H5z' />
    </g>
    <defs>
      <clipPath id='60c203c9fd250c80__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPersonChalkboardMdRegularIcon);
export default ForwardRef;
