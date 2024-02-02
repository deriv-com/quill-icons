import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSixXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={36}
    viewBox='0 0 15 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M13.5 21q-.047-2.531-1.734-4.266Q10.03 15.047 7.5 15q-2.53.047-4.172 1.734Q1.641 18.376 1.5 20.86V21q.047 2.532 1.734 4.266Q4.97 26.954 7.5 27q2.532-.047 4.266-1.734Q13.454 23.53 13.5 21m-7.547-7.312A6.4 6.4 0 0 1 7.5 13.5q3.187.094 5.297 2.203T15 21q-.094 3.187-2.203 5.297T7.5 28.5q-3.187-.094-5.297-2.203T0 21v-.281a7.74 7.74 0 0 1 1.922-4.782l7.266-8.203q.515-.469 1.078-.046.468.515.046 1.078z' />
    </g>
    <defs>
      <clipPath id='a13cdd4b6e952530__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSixXlRegularIcon);
export default ForwardRef;
