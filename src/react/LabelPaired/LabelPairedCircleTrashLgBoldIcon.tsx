import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleTrashLgBoldIcon = (
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
      <path d='M18.125 15.5c0-2.89-1.562-5.547-4.062-7.031-2.54-1.446-5.626-1.446-8.126 0-2.539 1.484-4.062 4.14-4.062 7.031a8.13 8.13 0 0 0 4.063 7.07c2.5 1.446 5.585 1.446 8.125 0 2.5-1.484 4.062-4.14 4.062-7.07M0 15.5a9.93 9.93 0 0 1 5-8.633c3.086-1.797 6.875-1.797 10 0 3.086 1.797 5 5.078 5 8.633 0 3.594-1.914 6.875-5 8.672-3.125 1.797-6.914 1.797-10 0-3.125-1.797-5-5.078-5-8.672m6.25-5h1.602l.43-.43a.65.65 0 0 1 .468-.195h2.5c.156 0 .313.078.43.195l.43.43h1.64c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-7.5a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625m0 2.5h7.5l-.547 6.367c-.039.664-.586 1.133-1.25 1.133H8.008c-.664 0-1.211-.469-1.25-1.133z' />
    </g>
    <defs>
      <clipPath id='16f565f4a0c50c703a27a1b52179589e__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleTrashLgBoldIcon);
export default ForwardRef;
