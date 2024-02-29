import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedComputerMouseScrollwheelLgBoldIcon = (
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
      <path d='M13.125 19.25v-7.5q-.039-1.875-1.29-3.086-1.21-1.25-3.085-1.289h-2.5q-1.875.039-3.086 1.29-1.25 1.21-1.289 3.085v7.5q.039 1.875 1.29 3.086 1.21 1.25 3.085 1.289h2.5q1.875-.039 3.086-1.29 1.25-1.21 1.289-3.085M0 11.75q.078-2.655 1.836-4.414T6.25 5.5h2.5q2.656.078 4.414 1.836T15 11.75v7.5q-.078 2.656-1.836 4.414T8.75 25.5h-2.5q-2.655-.078-4.414-1.836T0 19.25zm7.5-2.5q.547 0 .898.352.352.35.352.898v1.25q0 .547-.352.898Q8.048 13 7.5 13q-.547 0-.898-.352-.352-.35-.352-.898V10.5q0-.547.352-.898.35-.352.898-.352' />
    </g>
    <defs>
      <clipPath id='80178bae11f485ae67f73bdf030b4a17__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedComputerMouseScrollwheelLgBoldIcon);
export default ForwardRef;
