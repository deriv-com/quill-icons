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
      <path d='M10 7.375V8q-.039.585-.625.625h-3.75Q5.04 8.586 5 8v-.625H3.75q-.547 0-.898.352-.352.35-.352.898v13.75q0 .547.352.898.35.352.898.352h7.5q.547 0 .898-.352.352-.35.352-.898V8.625q0-.547-.352-.898-.35-.352-.898-.352zM.625 8.625q.04-1.328.898-2.227.9-.859 2.227-.898h7.5q1.328.04 2.227.898.858.9.898 2.227v13.75q-.039 1.328-.898 2.227-.9.858-2.227.898h-7.5q-1.328-.04-2.227-.898-.858-.9-.898-2.227z' />
    </g>
    <defs>
      <clipPath id='f5c6fdf9ff33cdc9__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMobileNotchLgBoldIcon);
export default ForwardRef;
