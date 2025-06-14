import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowLeftToLineLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.25 22.375V8.625C.25 8.313.523 8 .875 8c.313 0 .625.313.625.625v13.75A.64.64 0 0 1 .875 23a.617.617 0 0 1-.625-.625m3.906-7.305 5-5a.66.66 0 0 1 .899 0 .66.66 0 0 1 0 .899l-3.946 3.906h11.016c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H6.11l3.945 3.945a.66.66 0 0 1 0 .899.66.66 0 0 1-.899 0l-5-5a.66.66 0 0 1 0-.899' />
    </g>
    <defs>
      <clipPath id='82303937502b41ef0aa6faf92e60c51b__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowLeftToLineLgRegularIcon);
export default ForwardRef;
