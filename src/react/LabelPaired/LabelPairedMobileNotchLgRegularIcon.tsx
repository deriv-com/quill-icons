import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMobileNotchLgRegularIcon = (
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
      <path d='M10 6.75v.625q0 .547-.352.898-.35.352-.898.352h-2.5q-.547 0-.898-.352Q5 7.923 5 7.375V6.75H3.75q-.547 0-.898.352Q2.5 7.452 2.5 8v15q0 .547.352.898.35.352.898.352h7.5q.547 0 .898-.352.352-.35.352-.898V8q0-.547-.352-.898-.35-.352-.898-.352zm-1.25 0h-2.5v.625h2.5zM1.25 8q.039-1.055.742-1.758T3.75 5.5h7.5q1.055.039 1.758.742T13.75 8v15q-.039 1.055-.742 1.758t-1.758.742h-7.5q-1.055-.039-1.758-.742Q1.29 24.054 1.25 23z' />
    </g>
    <defs>
      <clipPath id='b094ab94028d4e2a9f315891d6593c50__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMobileNotchLgRegularIcon);
export default ForwardRef;
