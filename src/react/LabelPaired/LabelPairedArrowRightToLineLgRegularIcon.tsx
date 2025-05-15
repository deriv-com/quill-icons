import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRightToLineLgRegularIcon = (
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
      <path d='M17.75 8.625v13.75a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625V8.625c0-.312.273-.625.625-.625.313 0 .625.313.625.625m-3.945 7.344-5 5a.66.66 0 0 1-.899 0 .66.66 0 0 1 0-.899l3.946-3.945H.875A.617.617 0 0 1 .25 15.5c0-.312.273-.625.625-.625h10.977l-3.946-3.906a.66.66 0 0 1 0-.899.66.66 0 0 1 .899 0l5 5a.66.66 0 0 1 0 .899' />
    </g>
    <defs>
      <clipPath id='7cbb45076775b962008f440d6aba6b1f__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightToLineLgRegularIcon);
export default ForwardRef;
