import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLifeRingXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m18.89 25.922-4.265-4.266Q13.5 22.454 12 22.5q-1.5-.046-2.625-.844l-4.266 4.266Q7.97 28.406 12 28.5q4.032-.094 6.89-2.578m1.032-1.031Q22.406 22.03 22.5 18q-.094-4.03-2.578-6.89l-4.266 4.265Q16.453 16.5 16.5 18q-.046 1.5-.844 2.625zM21 25.92l.516.563q.468.516 0 1.032-.516.468-1.032 0L19.922 27Q16.688 29.907 12 30q-4.688-.093-7.922-3l-.562.516q-.516.468-1.032 0-.468-.516 0-1.032L3 25.922Q.095 22.64 0 18q.095-4.64 3-7.922l-.516-.562q-.468-.516 0-1.032.516-.468 1.032 0L4.078 9Q7.36 6.095 12 6q4.64.095 7.922 3l.562-.516q.516-.468 1.032 0 .468.516 0 1.032l-.516.562q2.907 3.234 3 7.922-.093 4.688-3 7.922m-2.11-15.843Q16.03 7.594 12 7.5q-4.03.094-6.89 2.578l4.265 4.266Q10.5 13.547 12 13.5q1.5.047 2.625.844zM8.345 20.625Q7.547 19.5 7.5 18q.047-1.5.844-2.625l-4.266-4.266Q1.594 13.97 1.5 18q.094 4.031 2.578 6.89zM9 18q.047 1.687 1.5 2.578 1.5.845 3 0 1.453-.89 1.5-2.578-.047-1.687-1.5-2.578-1.5-.844-3 0Q9.047 16.312 9 18' />
    </g>
    <defs>
      <clipPath id='d32e11200d9017f53385ae484ee0e8c2__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLifeRingXlRegularIcon);
export default ForwardRef;
