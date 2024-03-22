import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpRightFromSquareLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M13.125 5.5h6.25c.313 0 .625.313.625.625v6.25a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625V7.648l-9.57 9.57a.66.66 0 0 1-.899 0 .66.66 0 0 1 0-.898l9.57-9.57h-4.726a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625M2.5 6.75h5.625c.313 0 .625.313.625.625A.64.64 0 0 1 8.125 8H2.5c-.703 0-1.25.586-1.25 1.25V23c0 .703.547 1.25 1.25 1.25h13.75c.664 0 1.25-.547 1.25-1.25v-5.625c0-.312.273-.625.625-.625.313 0 .625.313.625.625V23c0 1.406-1.133 2.5-2.5 2.5H2.5A2.47 2.47 0 0 1 0 23V9.25c0-1.367 1.094-2.5 2.5-2.5' />
    </g>
    <defs>
      <clipPath id='53e3a1a3d5cfea62927b24aa7a1302f2__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpRightFromSquareLgRegularIcon);
export default ForwardRef;
