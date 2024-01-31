import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileCircleInfoXlBoldIcon = (
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
      <path d='M3 27.75h10.36a7.9 7.9 0 0 0 2.109 2.203A2.4 2.4 0 0 1 15 30H3q-1.266-.047-2.11-.89Q.048 28.265 0 27V9q.047-1.266.89-2.11Q1.735 6.048 3 6h7.781q1.22 0 2.11.89l4.218 4.22Q18 12 18 13.265v2.062a8 8 0 0 0-2.25.985V13.5H12q-.656 0-1.078-.422Q10.5 12.657 10.5 12V8.25H3q-.703.047-.75.75v18q.046.704.75.75M20.25 16.5q1.829 0 3.375.89a6.77 6.77 0 0 1 2.484 2.485A6.8 6.8 0 0 1 27 23.25a6.8 6.8 0 0 1-.89 3.375 6.77 6.77 0 0 1-2.485 2.484A6.65 6.65 0 0 1 20.25 30a6.65 6.65 0 0 1-3.375-.89 6.77 6.77 0 0 1-2.484-2.485 6.8 6.8 0 0 1-.891-3.375q0-1.78.89-3.375a6.77 6.77 0 0 1 2.485-2.484 6.65 6.65 0 0 1 3.375-.891m0 4.5q1.032-.093 1.125-1.125-.093-1.03-1.125-1.125-1.03.094-1.125 1.125.094 1.032 1.125 1.125m-1.5 2.25q.046.704.75.75v2.25q-.704.046-.75.75.046.704.75.75H21q.704-.046.75-.75-.046-.704-.75-.75v-3q-.046-.704-.75-.75h-.75q-.704.046-.75.75' />
    </g>
    <defs>
      <clipPath id='d34f03ddd4965353__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileCircleInfoXlBoldIcon);
export default ForwardRef;
