import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleNineCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M11.25 9.5a5.23 5.23 0 0 0-2.625-4.523 5.14 5.14 0 0 0-5.25 0A5.18 5.18 0 0 0 .75 9.5a5.19 5.19 0 0 0 2.625 4.547c1.617.96 3.61.96 5.25 0A5.24 5.24 0 0 0 11.25 9.5M0 9.5a5.96 5.96 0 0 1 3-5.18 5.97 5.97 0 0 1 6 0 6 6 0 0 1 3 5.18 6.01 6.01 0 0 1-3 5.203 5.97 5.97 0 0 1-6 0A5.97 5.97 0 0 1 0 9.5m6-2.25c-.54 0-1.031.305-1.312.75a1.55 1.55 0 0 0 0 1.5c.28.469.773.75 1.312.75.516 0 1.008-.281 1.29-.75a1.55 1.55 0 0 0 0-1.5c-.282-.445-.774-.75-1.29-.75M5.906 11A2.25 2.25 0 1 1 8.25 8.75a2.52 2.52 0 0 1-.82 1.852l-1.946 1.804a.35.35 0 0 1-.515-.023.35.35 0 0 1 .023-.516z' />
    </g>
    <defs>
      <clipPath id='d6991a915f68cf7a4bfffa8db2e8464b__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleNineCaptionRegularIcon);
export default ForwardRef;
