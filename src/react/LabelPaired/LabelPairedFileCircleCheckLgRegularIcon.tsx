import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileCircleCheckLgRegularIcon = (
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
      <path d='M12.5 24.25q.547 0 .898-.352.352-.35.352-.898V13H9.375a2.04 2.04 0 0 1-1.328-.547 2.04 2.04 0 0 1-.547-1.328V6.75h-5q-.547 0-.898.352-.352.35-.352.898v15q0 .547.352.898.35.352.898.352zm-3.125-12.5h4.375a1 1 0 0 0-.195-.273L9.023 6.945a.6.6 0 0 0-.273-.156v4.336q.039.585.625.625M2.5 5.5h6.094q.78 0 1.328.547l4.531 4.531q.547.547.547 1.328V23q-.039 1.055-.742 1.758T12.5 25.5h-10q-1.055-.039-1.758-.742Q.04 24.054 0 23V8q.039-1.055.742-1.758T2.5 5.5m8.555 11.484-4.14 4.18q-.47.351-.9 0l-2.07-2.11q-.39-.429 0-.859.43-.351.86 0l1.64 1.64 3.75-3.75q.43-.35.86 0 .39.47 0 .9' />
    </g>
    <defs>
      <clipPath id='a34d876c820c8cef__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileCircleCheckLgRegularIcon);
export default ForwardRef;
