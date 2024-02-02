import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSunBrightLgRegularIcon = (
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
      <path d='M10 5.5q.585.039.625.625V9.25q-.039.585-.625.625-.585-.039-.625-.625V6.125Q9.414 5.54 10 5.5m-10 10q.039-.585.625-.625H3.75q.585.039.625.625-.039.585-.625.625H.625Q.04 16.086 0 15.5m15.625 0q.039-.585.625-.625h3.125q.585.039.625.625-.039.585-.625.625H16.25q-.585-.039-.625-.625M10 21.125q.585.039.625.625v3.125q-.039.585-.625.625-.585-.039-.625-.625V21.75q.039-.585.625-.625M2.93 8.43q.43-.352.898 0l2.188 2.226q.351.43 0 .86-.43.39-.86 0L2.93 9.328q-.352-.468 0-.898m0 14.14q-.352-.43 0-.898l2.226-2.188q.43-.351.86 0 .39.43 0 .86L3.828 22.57q-.469.352-.898 0m11.054-11.054q-.351-.43 0-.86l2.188-2.226q.468-.352.898 0 .352.43 0 .898l-2.226 2.188q-.43.351-.86 0m0 7.968q.43-.351.86 0l2.226 2.188q.352.468 0 .898-.43.352-.898 0l-2.188-2.226q-.351-.43 0-.86m-.859-3.984q-.04-1.758-1.562-2.695-1.563-.86-3.126 0-1.523.937-1.562 2.695.039 1.758 1.563 2.695 1.562.86 3.124 0 1.524-.937 1.563-2.695m-7.5 0q0-1.172.586-2.187.585-1.016 1.601-1.602A4.3 4.3 0 0 1 10 11.125q1.171 0 2.188.586 1.015.585 1.601 1.601t.586 2.188-.586 2.188a4.3 4.3 0 0 1-1.601 1.601 4.3 4.3 0 0 1-2.188.586q-1.172 0-2.187-.586a4.3 4.3 0 0 1-1.602-1.602 4.3 4.3 0 0 1-.586-2.187' />
    </g>
    <defs>
      <clipPath id='e7edd7018046d433__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSunBrightLgRegularIcon);
export default ForwardRef;
