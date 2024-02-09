import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLocationDotMdBoldIcon = (
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
      <path d='M10.5 10q-.063-1.905-1.312-3.187Q7.906 5.563 6 5.5q-1.905.063-3.187 1.313Q1.563 8.092 1.5 10q0 .594.469 1.781.531 1.188 1.344 2.5.687 1.094 1.374 2.094.72 1 1.313 1.75.594-.75 1.313-1.75.718-1 1.375-2.094.813-1.312 1.343-2.5.47-1.187.469-1.781m1.5 0q-.063 1.406-1 3.25a31 31 0 0 1-2.187 3.563q-1.219 1.75-2.063 2.78-.312.375-.75.376-.438 0-.75-.375-.844-1.032-2.062-2.782A31 31 0 0 1 1 13.25Q.063 11.406 0 10q.063-2.562 1.75-4.25Q3.438 4.063 6 4q2.562.063 4.25 1.75Q11.937 7.438 12 10m-5 0a.97.97 0 0 0-.281-.719A.97.97 0 0 0 6 9a.97.97 0 0 0-.719.281A.97.97 0 0 0 5 10q0 .438.281.719A.97.97 0 0 0 6 11a.97.97 0 0 0 .719-.281A.97.97 0 0 0 7 10m-3.5 0q.031-1.406 1.25-2.156 1.25-.688 2.5 0Q8.47 8.594 8.5 10q-.03 1.407-1.25 2.156-1.25.688-2.5 0Q3.531 11.406 3.5 10' />
    </g>
    <defs>
      <clipPath id='2bff225148d8e983db30d793d8dea849__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLocationDotMdBoldIcon);
export default ForwardRef;
