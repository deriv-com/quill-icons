import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedExpandLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5.875 6.75q.585.039.625.625-.039.585-.625.625H1.5v4.375q-.039.585-.625.625-.585-.039-.625-.625v-5q.039-.585.625-.625zM.25 18.625Q.289 18.04.875 18q.586.039.625.625V23h4.375q.585.039.625.625-.039.585-.625.625h-5q-.585-.039-.625-.625zM17.125 6.75q.585.039.625.625v5q-.039.585-.625.625-.585-.039-.625-.625V8h-4.375q-.585-.039-.625-.625.039-.585.625-.625zM16.5 18.625q.039-.585.625-.625.585.039.625.625v5q-.039.585-.625.625h-5q-.585-.039-.625-.625.039-.585.625-.625H16.5z' />
    </g>
    <defs>
      <clipPath id='2d34fbf64ea5243fa337bfe0d894fed8__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedExpandLgRegularIcon);
export default ForwardRef;
