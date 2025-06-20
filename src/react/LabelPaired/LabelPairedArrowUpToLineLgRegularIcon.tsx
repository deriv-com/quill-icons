import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpToLineLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={30}
    viewBox='0 0 15 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.625 6.75h13.75c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H.625A.617.617 0 0 1 0 7.375c0-.312.273-.625.625-.625m7.305 3.945 5 5a.66.66 0 0 1 0 .899.66.66 0 0 1-.899 0l-3.906-3.946v10.977a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625V12.648L2.93 16.594a.66.66 0 0 1-.899 0 .66.66 0 0 1 0-.899l5-5a.66.66 0 0 1 .899 0' />
    </g>
    <defs>
      <clipPath id='89396dd284e36f38e943e6247024dec4__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpToLineLgRegularIcon);
export default ForwardRef;
