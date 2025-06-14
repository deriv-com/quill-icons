import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleThreeLgBoldIcon = (
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
      <path d='M10 7.375c-2.93 0-5.586 1.563-7.07 4.063-1.446 2.539-1.446 5.624 0 8.124A8.13 8.13 0 0 0 10 23.626c2.89 0 5.547-1.523 7.031-4.062 1.446-2.5 1.446-5.586 0-8.125-1.484-2.5-4.14-4.063-7.031-4.063M10 25.5c-3.594 0-6.875-1.875-8.672-5-1.797-3.086-1.797-6.875 0-10 1.797-3.086 5.078-5 8.672-5 3.555 0 6.836 1.914 8.633 5 1.797 3.125 1.797 6.914 0 10a9.93 9.93 0 0 1-8.633 5m-2.812-15h5c.351 0 .703.273.859.625a.98.98 0 0 1-.235 1.016l-1.992 1.836c1.64.156 2.93 1.562 2.93 3.242 0 1.836-1.484 3.281-3.32 3.281H9.375c-1.21 0-2.266-.586-2.89-1.602l-.118-.156c-.273-.43-.117-1.015.313-1.289.43-.273 1.015-.117 1.289.313l.117.156a1.46 1.46 0 0 0 1.289.742h1.055c.78 0 1.445-.664 1.445-1.445 0-.782-.664-1.407-1.445-1.407H8.438c-.391.04-.743-.195-.899-.585-.117-.352-.039-.782.234-1.016l1.993-1.836H7.188c-.547 0-.938-.39-.938-.937 0-.508.39-.938.938-.938' />
    </g>
    <defs>
      <clipPath id='495d85bd2447d6f5837ac96b424f402f__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleThreeLgBoldIcon);
export default ForwardRef;
