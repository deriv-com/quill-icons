import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPageCircleArrowRightLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={23}
    height={30}
    viewBox='0 0 23 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.25 8c0-1.367 1.094-2.5 2.5-2.5h7.07c.664 0 1.29.273 1.758.742l2.93 2.93c.469.469.742 1.094.742 1.758v2.343c-.703.196-1.328.47-1.875.86V10.93a.63.63 0 0 0-.195-.43l-2.93-2.93a.63.63 0 0 0-.43-.195H2.75A.64.64 0 0 0 2.125 8v15c0 .352.273.625.625.625h8.594a6.7 6.7 0 0 0 1.758 1.875H2.75A2.47 2.47 0 0 1 .25 23zM11.5 19.875c0-3.086 2.5-5.625 5.625-5.625 3.086 0 5.625 2.54 5.625 5.625a5.626 5.626 0 0 1-5.625 5.625 5.6 5.6 0 0 1-5.625-5.625m2.5 0c0 .352.273.625.625.625h3.477l-1.133 1.133a.66.66 0 0 0 0 .898.66.66 0 0 0 .898 0l2.188-2.187a.66.66 0 0 0 0-.899l-2.188-2.187a.66.66 0 0 0-.898 0 .66.66 0 0 0 0 .898l1.133 1.094h-3.477a.64.64 0 0 0-.625.625' />
    </g>
    <defs>
      <clipPath id='bcf9291f6117d14518864d66d5cab36b__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPageCircleArrowRightLgBoldIcon);
export default ForwardRef;
