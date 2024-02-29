import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileExcelMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={24}
    viewBox='0 0 12 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.5 18q.031.47.5.5h8q.47-.03.5-.5V9H8a.97.97 0 0 1-.719-.281A.97.97 0 0 1 7 8V5.5H2q-.469.031-.5.5zM2 4h5.188Q8 4 8.594 4.594l2.812 2.812Q12 8 12 8.844V18q-.03.844-.594 1.406-.563.563-1.406.594H2q-.843-.03-1.406-.594Q.032 18.844 0 18V6q.03-.843.594-1.406Q1.157 4.032 2 4m2.844 7.281L6 12.781l1.156-1.5q.47-.5 1.063-.125.5.47.125 1.063L6.938 14l1.406 1.781q.375.594-.125 1.063-.594.375-1.063-.125L6 15.219l-1.156 1.5q-.47.5-1.063.125-.5-.47-.125-1.063L5.062 14l-1.406-1.781q-.375-.594.125-1.063.594-.375 1.063.125' />
    </g>
    <defs>
      <clipPath id='2be7ad6d04508e6d35a117aa108c484d__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileExcelMdBoldIcon);
export default ForwardRef;
