import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileExcelCaptionRegularIcon = (
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
      <path d='M7.5 14.75a.73.73 0 0 0 .54-.21.73.73 0 0 0 .21-.54V8H5.625a1.22 1.22 0 0 1-.797-.328 1.22 1.22 0 0 1-.328-.797V4.25h-3a.73.73 0 0 0-.54.21.73.73 0 0 0-.21.54v9q0 .328.21.54.212.21.54.21zm-1.875-7.5H8.25a.6.6 0 0 0-.117-.164L5.414 4.367a.35.35 0 0 0-.164-.094v2.602q.023.352.375.375M1.5 3.5h3.656q.469 0 .797.328l2.719 2.719Q9 6.875 9 7.344V14a1.52 1.52 0 0 1-.445 1.055q-.422.421-1.055.445h-6a1.52 1.52 0 0 1-1.055-.445A1.52 1.52 0 0 1 0 14V5q.024-.632.445-1.055Q.868 3.524 1.5 3.5m1.992 5.79L4.5 10.718l1.008-1.43q.21-.258.515-.094.258.21.094.516L4.97 11.375l1.148 1.664q.165.304-.094.516-.305.165-.515-.094L4.5 12.03l-1.008 1.43q-.21.258-.515.094-.259-.21-.094-.516l1.172-1.664-1.172-1.664q-.164-.305.094-.516.305-.164.515.094' />
    </g>
    <defs>
      <clipPath id='95dd5367282b884aa1eb9aa352fbfff6__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileExcelCaptionRegularIcon);
export default ForwardRef;
