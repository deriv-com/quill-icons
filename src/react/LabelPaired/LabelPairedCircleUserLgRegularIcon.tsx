import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleUserLgRegularIcon = (
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
      <path d='M16.094 21.79a8.76 8.76 0 0 0 2.656-6.29c0-4.805-3.945-8.75-8.75-8.75-4.844 0-8.75 3.945-8.75 8.75a8.89 8.89 0 0 0 2.617 6.29C4.414 19.64 6.407 18 8.75 18h2.5c2.305 0 4.297 1.64 4.844 3.79m-1.133.898v.039c-.156-1.954-1.758-3.477-3.711-3.477h-2.5A3.754 3.754 0 0 0 5 22.727c1.406.976 3.125 1.523 5 1.523 1.836 0 3.555-.547 4.96-1.562M10 25.5c-3.594 0-6.875-1.875-8.672-5-1.797-3.086-1.797-6.875 0-10 1.797-3.086 5.078-5 8.672-5 3.555 0 6.836 1.914 8.633 5 1.797 3.125 1.797 6.914 0 10a9.93 9.93 0 0 1-8.633 5m0-10c.664 0 1.25-.352 1.602-.937.351-.547.351-1.29 0-1.876-.352-.546-.938-.937-1.602-.937-.703 0-1.29.39-1.64.938-.352.585-.352 1.328 0 1.874A1.87 1.87 0 0 0 10 15.5m-3.125-1.875c0-1.094.586-2.11 1.563-2.695.937-.547 2.148-.547 3.124 0 .938.586 1.563 1.601 1.563 2.695 0 1.133-.625 2.148-1.562 2.734-.977.547-2.188.547-3.126 0a3.16 3.16 0 0 1-1.562-2.734' />
    </g>
    <defs>
      <clipPath id='a05c66cd99ab6b98f8adf37b15bd9fe4__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleUserLgRegularIcon);
export default ForwardRef;
