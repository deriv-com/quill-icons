import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSixCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={18}
    viewBox='0 0 8 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6.625 11C6.625 9.57 5.43 8.375 4 8.375a2.58 2.58 0 0 0-1.922.844l-.117.14A2.52 2.52 0 0 0 1.375 11 2.62 2.62 0 0 0 4 13.625 2.636 2.636 0 0 0 6.625 11M3.648 7.273c.118 0 .235-.023.352-.023A3.76 3.76 0 0 1 7.75 11 3.746 3.746 0 0 1 4 14.75 3.73 3.73 0 0 1 .25 11c0-.96.352-1.852.96-2.508l3.282-4.031a.56.56 0 0 1 .797-.07c.234.187.281.539.07.797z' />
    </g>
    <defs>
      <clipPath id='2e74f8c927c77caf80842ce05280f137__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSixCaptionBoldIcon);
export default ForwardRef;
