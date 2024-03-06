import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsDownCaptionRegularIcon = (
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
      <path d='M1.242 5.258q-.234-.258 0-.516.258-.234.516 0L6 8.961l4.242-4.219q.258-.234.516 0 .234.258 0 .516l-4.5 4.5q-.258.234-.516 0zm0 4.5q-.234-.258 0-.516.258-.234.516 0L6 13.461l4.242-4.219q.258-.234.516 0 .234.258 0 .516l-4.5 4.5q-.258.234-.516 0z' />
    </g>
    <defs>
      <clipPath id='c8cfc90278099caa10444a2e5305ffc2__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsDownCaptionRegularIcon);
export default ForwardRef;
