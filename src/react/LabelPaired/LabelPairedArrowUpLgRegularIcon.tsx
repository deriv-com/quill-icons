import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpLgRegularIcon = (
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
      <path d='m7.93 6.945 6.875 6.875a.66.66 0 0 1 0 .899.66.66 0 0 1-.899 0l-5.781-5.82v14.726a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625V8.898l-5.82 5.82a.66.66 0 0 1-.899 0 .66.66 0 0 1 0-.898l6.875-6.875a.66.66 0 0 1 .899 0' />
    </g>
    <defs>
      <clipPath id='a6af8e6a3f2a64410c1b3bdfe81cc21a__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpLgRegularIcon);
export default ForwardRef;
