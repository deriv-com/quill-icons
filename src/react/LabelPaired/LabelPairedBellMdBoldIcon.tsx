import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBellMdBoldIcon = (
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
      <path d='M7 4q.437 0 .719.281A.97.97 0 0 1 8 5v.563q1.75.313 2.844 1.593Q11.969 8.437 12 10.25v1.031q.031 2.188 1.375 3.906l.469.594q.25.375.094.781a.79.79 0 0 1-.688.438H.75a.79.79 0 0 1-.687-.437q-.187-.407.093-.782l.469-.594A6.33 6.33 0 0 0 2 11.282V10.25q.03-1.812 1.156-3.094Q4.25 5.875 6 5.563V5q0-.437.281-.719A.97.97 0 0 1 7 4m0 3h-.25q-1.375.03-2.312.938-.907.937-.938 2.312v1.031q-.03 2.313-1.25 4.219h9.5a7.53 7.53 0 0 1-1.25-4.219V10.25q-.03-1.375-.937-2.312Q8.625 7.03 7.25 7zm2 11q0 .813-.594 1.406A1.92 1.92 0 0 1 7 20q-.812 0-1.406-.594A1.92 1.92 0 0 1 5 18h4' />
    </g>
    <defs>
      <clipPath id='14907d4f0a93d27f390079dc378ac7f6__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBellMdBoldIcon);
export default ForwardRef;
