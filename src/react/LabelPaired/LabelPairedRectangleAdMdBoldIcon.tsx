import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRectangleAdMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={24}
    viewBox='0 0 18 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2 6.5q-.469.031-.5.5v10q.031.47.5.5h14q.47-.03.5-.5V7q-.03-.469-.5-.5zM0 7q.03-.843.594-1.406Q1.157 5.032 2 5h14q.844.03 1.406.594Q17.97 6.156 18 7v10q-.03.844-.594 1.406-.562.563-1.406.594H2q-.843-.03-1.406-.594Q.032 17.844 0 17zm7.188 2.406 2.25 4.5q.217.656-.344 1.031-.657.22-1-.343l-.188-.344H5.094l-.188.344q-.343.562-1 .312-.594-.343-.312-1l2.25-4.5Q6.062 9.001 6.5 9q.47 0 .688.406M6.5 11.437l-.656 1.313h1.312zm5.75.563q-.687.063-.75.75.063.687.75.75.687-.063.75-.75-.063-.687-.75-.75m.75-1.375V9.75q.063-.687.75-.75.687.063.75.75v4.5q-.063.687-.75.75a.72.72 0 0 1-.531-.219 2.13 2.13 0 0 1-.969.219q-.969-.031-1.594-.656-.624-.625-.656-1.594.031-.969.656-1.594.625-.624 1.594-.656.405 0 .75.125' />
    </g>
    <defs>
      <clipPath id='a9eab1783ac35a9e2a6669277db2ee7b__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRectangleAdMdBoldIcon);
export default ForwardRef;
