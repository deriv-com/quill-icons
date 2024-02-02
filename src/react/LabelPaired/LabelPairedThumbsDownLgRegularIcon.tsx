import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedThumbsDownLgRegularIcon = (
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
      <path d='M11.29 22.297q.311.82 1.132.664.82-.312.664-1.133l-.156-.664a10 10 0 0 0-.977-2.227.6.6 0 0 1-.039-.625.61.61 0 0 1 .547-.312H17.5q.547 0 .898-.352.352-.35.352-.898-.039-.703-.586-1.055-.43-.351-.195-.82.156-.273.156-.625-.039-.78-.664-1.133a.58.58 0 0 1-.352-.39.78.78 0 0 1 .118-.547 1.1 1.1 0 0 0 .273-.742q-.039-.9-.86-1.211-.468-.195-.43-.704a.9.9 0 0 0 .04-.273q0-.547-.352-.898Q15.548 8 15 8h-3.477q-.975 0-1.757.508L8.28 9.523a2.96 2.96 0 0 0-.898.899q-.352.429-.86.156-.429-.35-.195-.86a4.8 4.8 0 0 1 1.25-1.25l1.484-.976q1.134-.742 2.422-.742H15q1.055.039 1.758.742T17.5 9.25v.04q1.172.702 1.25 2.148 0 .507-.195.976.78.703.82 1.836 0 .39-.117.742.703.703.742 1.758-.039 1.055-.742 1.758-.704.703-1.758.742h-3.984q.39.78.625 1.602l.156.625q.234.898-.195 1.68a2.37 2.37 0 0 1-1.329 1.015q-.897.234-1.68-.195-.742-.43-1.015-1.329l-.195-.664q-.547-1.953-2.266-3.086L7.5 18.82l.313-.468-.313.468a3.5 3.5 0 0 1-1.133-1.093q-.312-.508.156-.86.47-.273.86.156.313.469.781.743l.117.078q2.149 1.406 2.813 3.828zM1.25 19.25h2.5V10.5h-2.5zm-1.25 0V10.5q0-.547.352-.898.35-.352.898-.352h2.5q.547 0 .898.352.352.35.352.898v8.75q0 .547-.352.898-.35.352-.898.352h-2.5q-.547 0-.898-.352Q0 19.798 0 19.25' />
    </g>
    <defs>
      <clipPath id='d6df47be27027539__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedThumbsDownLgRegularIcon);
export default ForwardRef;
