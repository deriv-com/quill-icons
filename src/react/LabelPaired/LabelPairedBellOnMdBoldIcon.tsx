import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBellOnMdBoldIcon = (
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
      <path d='M10 4q.438 0 .719.281A.97.97 0 0 1 11 5v.563q1.75.313 2.844 1.593Q14.969 8.437 15 10.25v1.031q.031 2.188 1.375 3.906l.469.594q.25.375.093.781a.79.79 0 0 1-.687.438H3.75a.79.79 0 0 1-.687-.437.81.81 0 0 1 .093-.782l.469-.594A6.33 6.33 0 0 0 5 11.282V10.25q.03-1.812 1.156-3.094Q7.25 5.875 9 5.563V5q0-.437.281-.719A.97.97 0 0 1 10 4m0 3h-.25q-1.375.03-2.312.938-.907.937-.938 2.312v1.031A7.53 7.53 0 0 1 5.25 15.5h9.5q-1.219-1.905-1.25-4.219V10.25q-.03-1.375-.937-2.312Q11.625 7.03 10.25 7zm2 11q0 .813-.594 1.406A1.92 1.92 0 0 1 10 20q-.812 0-1.406-.594A1.92 1.92 0 0 1 8 18h4M0 10.25q.063-.687.75-.75h2.5q.687.063.75.75-.063.687-.75.75H.75q-.687-.063-.75-.75m16.75-.75h2.5q.687.063.75.75-.063.687-.75.75h-2.5q-.687-.063-.75-.75.063-.687.75-.75m1.938-4.844q.25.657-.344 1.032l-2 1q-.657.25-1-.344-.25-.657.312-1l2-1q.657-.25 1.032.312M1.656 5.688q-.562-.375-.312-1.032.343-.562 1-.312l2 1q.563.343.343 1-.375.563-1.03.343z' />
    </g>
    <defs>
      <clipPath id='2536fc0beddcf2d5fa40fdd4df096f25__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBellOnMdBoldIcon);
export default ForwardRef;
