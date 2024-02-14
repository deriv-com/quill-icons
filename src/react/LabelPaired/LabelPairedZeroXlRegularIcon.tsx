import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedZeroXlRegularIcon = (
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
      <path d='M0 15q.094-3.187 2.203-5.297T7.5 7.5q3.187.094 5.297 2.203T15 15v6q-.094 3.187-2.203 5.297T7.5 28.5q-3.187-.094-5.297-2.203T0 21zm7.5-6q-2.531.047-4.266 1.734Q1.547 12.47 1.5 15v6q.047 2.532 1.734 4.266Q4.97 26.954 7.5 27q2.532-.047 4.266-1.734Q13.454 23.53 13.5 21v-6q-.047-2.531-1.734-4.266Q10.03 9.047 7.5 9' />
    </g>
    <defs>
      <clipPath id='2fd43cb265f437beb4b310d0e80f47eb__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedZeroXlRegularIcon);
export default ForwardRef;
