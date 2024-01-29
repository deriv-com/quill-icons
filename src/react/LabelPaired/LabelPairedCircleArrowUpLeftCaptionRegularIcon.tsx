import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleArrowUpLeftCaptionRegularIcon = (
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
      <path d='M6 4.25a5.4 5.4 0 0 0-2.625.703 5.4 5.4 0 0 0-1.922 1.922 5.25 5.25 0 0 0 0 5.25 5.4 5.4 0 0 0 1.922 1.922A5.4 5.4 0 0 0 6 14.75a5.4 5.4 0 0 0 2.625-.703 5.4 5.4 0 0 0 1.922-1.922 5.25 5.25 0 0 0 0-5.25 5.4 5.4 0 0 0-1.922-1.922A5.4 5.4 0 0 0 6 4.25M6 15.5a6.14 6.14 0 0 1-3-.797A6.2 6.2 0 0 1 .797 12.5 6.1 6.1 0 0 1 0 9.5q0-1.57.797-3A6.2 6.2 0 0 1 3 4.297 6.14 6.14 0 0 1 6 3.5a6.14 6.14 0 0 1 3 .797A6.2 6.2 0 0 1 11.203 6.5Q12 7.93 12 9.5a6.1 6.1 0 0 1-.797 3A6.2 6.2 0 0 1 9 14.703a6.14 6.14 0 0 1-3 .797m1.313-8.25q.351.023.375.375-.024.352-.375.375H5.039l3.094 3.117q.234.258 0 .516-.258.234-.516 0L4.5 8.539V11q-.023.352-.375.375-.352-.023-.375-.375V7.625q.023-.352.375-.375z' />
    </g>
    <defs>
      <clipPath id='f7991c7ca9686ae9e657cfeeb9b000cc__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleArrowUpLeftCaptionRegularIcon);
export default ForwardRef;
