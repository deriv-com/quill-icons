import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLocationDotCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={18}
    viewBox='0 0 9 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.875 8q-.047-1.43-.984-2.39Q5.93 4.67 4.5 4.624q-1.43.047-2.39.984Q1.17 6.57 1.124 8q0 .445.352 1.336.398.891 1.007 1.875.516.82 1.032 1.57.539.75.984 1.313.445-.563.984-1.313.54-.75 1.032-1.57.61-.984 1.007-1.875.352-.891.352-1.336M9 8q-.047 1.055-.75 2.438a24 24 0 0 1-1.64 2.671q-.915 1.312-1.548 2.086a.71.71 0 0 1-.562.282.71.71 0 0 1-.562-.282A35 35 0 0 1 2.39 13.11Q1.476 11.82.75 10.438.047 9.055 0 8q.047-1.922 1.313-3.187Q2.577 3.547 4.5 3.5q1.922.047 3.188 1.313Q8.952 6.078 9 8M5.25 8a.73.73 0 0 0-.21-.54.73.73 0 0 0-.54-.21.73.73 0 0 0-.54.21.73.73 0 0 0-.21.54q0 .328.21.54.212.21.54.21a.73.73 0 0 0 .54-.21.73.73 0 0 0 .21-.54M2.625 8q.024-1.054.938-1.617.937-.516 1.874 0 .915.563.938 1.617-.024 1.055-.937 1.617-.937.516-1.875 0Q2.648 9.055 2.625 8' />
    </g>
    <defs>
      <clipPath id='d2d00e0528c8916bf0afea54a7e438ed__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLocationDotCaptionBoldIcon);
export default ForwardRef;
