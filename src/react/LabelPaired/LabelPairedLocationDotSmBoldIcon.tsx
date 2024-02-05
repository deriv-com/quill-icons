import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLocationDotSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={22}
    viewBox='0 0 11 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9.438 9q-.056-1.668-1.149-2.79Q7.17 5.119 5.5 5.064q-1.668.054-2.79 1.148Q1.619 7.33 1.564 9q0 .52.41 1.559.464 1.039 1.175 2.187a53 53 0 0 0 1.204 1.832q.629.876 1.148 1.531.52-.656 1.148-1.53.629-.876 1.204-1.833.71-1.149 1.175-2.187.41-1.04.41-1.559m1.312 0q-.055 1.23-.875 2.844a27.5 27.5 0 0 1-1.914 3.117q-1.067 1.53-1.805 2.434-.273.328-.656.328t-.656-.328q-.738-.903-1.805-2.434a27.5 27.5 0 0 1-1.914-3.117Q.305 10.23.25 9q.054-2.242 1.531-3.719T5.5 3.75q2.242.054 3.719 1.531T10.75 9M6.375 9a.85.85 0 0 0-.246-.629.85.85 0 0 0-.629-.246.85.85 0 0 0-.629.246.85.85 0 0 0-.246.629q0 .383.246.629a.85.85 0 0 0 .629.246.85.85 0 0 0 .629-.246A.85.85 0 0 0 6.375 9M3.313 9q.027-1.23 1.093-1.887 1.095-.6 2.188 0Q7.66 7.77 7.687 9q-.027 1.23-1.093 1.887-1.095.6-2.188 0Q3.341 10.23 3.313 9' />
    </g>
    <defs>
      <clipPath id='2c950f2c56a034c97fcfd783b1cce6bf__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLocationDotSmBoldIcon);
export default ForwardRef;
