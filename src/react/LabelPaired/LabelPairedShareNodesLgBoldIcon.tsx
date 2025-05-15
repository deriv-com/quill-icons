import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedShareNodesLgBoldIcon = (
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
      <path d='M17.75 10.5c0 2.07-1.68 3.75-3.75 3.75-1.133 0-2.148-.469-2.852-1.29L7.633 14.72c.078.273.117.547.117.781q0 .41-.117.82l3.515 1.72A3.84 3.84 0 0 1 14 16.75a3.751 3.751 0 0 1 0 7.5c-2.07 0-3.75-1.68-3.75-3.75 0-.234 0-.508.078-.781L6.813 17.96A3.68 3.68 0 0 1 4 19.25a3.751 3.751 0 0 1 0-7.5c1.094 0 2.11.508 2.813 1.29l3.515-1.72c-.078-.273-.078-.547-.078-.82a3.751 3.751 0 0 1 7.5 0M4 17.375c.664 0 1.25-.352 1.602-.937.351-.547.351-1.29 0-1.875-.352-.547-.938-.938-1.602-.938-.703 0-1.29.39-1.64.938-.352.585-.352 1.328 0 1.874a1.87 1.87 0 0 0 1.64.938M15.875 10.5c0-.664-.39-1.25-.937-1.602-.586-.351-1.329-.351-1.876 0-.585.352-.937.938-.937 1.602 0 .703.352 1.29.938 1.64.546.352 1.289.352 1.874 0 .547-.35.938-.937.938-1.64M14 22.375c.664 0 1.25-.352 1.602-.937.351-.547.351-1.29 0-1.875-.352-.547-.938-.938-1.602-.938-.703 0-1.29.39-1.64.938-.352.585-.352 1.328 0 1.875a1.87 1.87 0 0 0 1.64.937' />
    </g>
    <defs>
      <clipPath id='c340499dde6ffd7e3d604a9a17391c7b__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedShareNodesLgBoldIcon);
export default ForwardRef;
