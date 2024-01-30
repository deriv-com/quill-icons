import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedInfoLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={30}
    viewBox='0 0 8 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.75 8q0-.547.352-.898.35-.352.898-.352.547 0 .898.352.352.35.352.898 0 .547-.352.898-.35.352-.898.352-.547 0-.898-.352Q2.75 8.548 2.75 8M.875 12.375q.039-.585.625-.625H4q.585.039.625.625V23h2.5q.585.039.625.625-.039.585-.625.625H.875q-.585-.039-.625-.625.039-.585.625-.625h2.5V13H1.5q-.585-.039-.625-.625' />
    </g>
    <defs>
      <clipPath id='46a4a3403fa8903778de4964d86bdfdc__a'>
        <path d='M0 0h8v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedInfoLgRegularIcon);
export default ForwardRef;
