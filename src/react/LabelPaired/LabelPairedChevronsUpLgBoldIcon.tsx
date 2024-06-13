import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsUpLgBoldIcon = (
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
      <path d='m10.664 7.336 7.461 7.539c.39.352.39.938 0 1.29a.856.856 0 0 1-1.29 0L9.962 9.327l-6.836 6.836a.856.856 0 0 1-1.29 0c-.39-.352-.39-.937 0-1.328l7.5-7.5c.352-.352.938-.352 1.33 0m7.5 15-.039.039c.39.352.39.938 0 1.29a.856.856 0 0 1-1.29 0l-6.874-6.837-6.836 6.836a.856.856 0 0 1-1.29 0c-.39-.352-.39-.937 0-1.328l7.5-7.5c.352-.352.938-.352 1.33 0z' />
    </g>
    <defs>
      <clipPath id='d0ff84168f34823df7a198f90c357897__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsUpLgBoldIcon);
export default ForwardRef;
