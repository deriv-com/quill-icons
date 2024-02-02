import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedComputerMdBoldIcon = (
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
      <path d='M12 6.5H2q-.469.031-.5.5v7q.031.47.5.5h10q.47-.03.5-.5V7q-.03-.469-.5-.5M2 16q-.843-.03-1.406-.594Q.032 14.843 0 14V7q.03-.843.594-1.406Q1.157 5.032 2 5h10q.844.03 1.406.594Q13.97 6.156 14 7v7q-.03.844-.594 1.406-.563.563-1.406.594H9.281l.5 1.5h1.469q.687.063.75.75-.063.687-.75.75h-8.5q-.687-.063-.75-.75.063-.687.75-.75h1.469l.5-1.5zm3.781 1.5H8.22l-.5-1.5H6.28zM16.5 6.5v1h2v-1zm0 2.5v1h2V9zm2 2.5h-2v6h2zm-3.5-5q.03-.625.438-1.062A1.63 1.63 0 0 1 16.5 5h2q.625.03 1.063.438.405.436.437 1.062v11a1.63 1.63 0 0 1-.437 1.063A1.63 1.63 0 0 1 18.5 19h-2a1.63 1.63 0 0 1-1.062-.437A1.63 1.63 0 0 1 15 17.5zm2.5 8.75q-.687-.063-.75-.75.063-.687.75-.75.687.063.75.75-.063.687-.75.75' />
    </g>
    <defs>
      <clipPath id='14c0341c810f25abc81f41a9ff2c3f83__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedComputerMdBoldIcon);
export default ForwardRef;
