import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMemoCircleCheckXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={27}
    height={36}
    viewBox='0 0 27 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3 8.25q-.703.047-.75.75v18q.046.704.75.75h10.313a8.5 8.5 0 0 0 2.156 2.203A2.4 2.4 0 0 1 15 30H3q-1.266-.047-2.11-.89Q.048 28.265 0 27V9q.047-1.266.89-2.11Q1.735 6.048 3 6h12q1.266.047 2.11.89.843.844.89 2.11v6.328a7.4 7.4 0 0 0-2.25 1.031V9q-.047-.703-.75-.75zM5.625 12h6.75q1.032.095 1.125 1.125-.093 1.032-1.125 1.125h-6.75q-1.03-.093-1.125-1.125.095-1.03 1.125-1.125m0 4.5h6.75q1.032.094 1.125 1.125-.093 1.032-1.125 1.125h-6.75q-1.03-.093-1.125-1.125.095-1.03 1.125-1.125m0 4.5h2.25q1.032.094 1.125 1.125-.093 1.032-1.125 1.125h-2.25q-1.03-.093-1.125-1.125.095-1.03 1.125-1.125M27 23.25a6.65 6.65 0 0 1-.89 3.375 6.77 6.77 0 0 1-2.485 2.484A6.8 6.8 0 0 1 20.25 30a6.8 6.8 0 0 1-3.375-.89 6.77 6.77 0 0 1-2.484-2.485 6.65 6.65 0 0 1-.891-3.375q0-1.829.89-3.375a6.77 6.77 0 0 1 2.485-2.484 6.8 6.8 0 0 1 3.375-.891q1.782 0 3.375.89a6.77 6.77 0 0 1 2.484 2.485A6.65 6.65 0 0 1 27 23.25m-3.61-2.016q-.515-.468-1.03 0l-2.86 2.813-1.36-1.313q-.515-.468-1.03 0-.47.516 0 1.032l1.874 1.875q.516.468 1.032 0l3.375-3.375q.468-.516 0-1.032' />
    </g>
    <defs>
      <clipPath id='9d887399cd953947d1111fd797c94d49__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMemoCircleCheckXlBoldIcon);
export default ForwardRef;
