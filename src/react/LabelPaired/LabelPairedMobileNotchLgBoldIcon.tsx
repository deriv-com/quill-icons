import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMobileNotchLgBoldIcon = (
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
      <path d='M10 7.375V8a.64.64 0 0 1-.625.625h-3.75A.617.617 0 0 1 5 8v-.625H3.75c-.703 0-1.25.586-1.25 1.25v13.75c0 .703.547 1.25 1.25 1.25h7.5c.664 0 1.25-.547 1.25-1.25V8.625c0-.664-.586-1.25-1.25-1.25zM.625 8.625A3.11 3.11 0 0 1 3.75 5.5h7.5a3.134 3.134 0 0 1 3.125 3.125v13.75A3.11 3.11 0 0 1 11.25 25.5h-7.5c-1.758 0-3.125-1.367-3.125-3.125z' />
    </g>
    <defs>
      <clipPath id='528904c89493db3d5ef4c03ced0c20b4__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMobileNotchLgBoldIcon);
export default ForwardRef;
