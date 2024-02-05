import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPenCircleCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10.875 9.5q0-1.336-.656-2.437A4.87 4.87 0 0 0 8.438 5.28 4.84 4.84 0 0 0 6 4.625q-1.29 0-2.437.656A4.87 4.87 0 0 0 1.78 7.063 4.67 4.67 0 0 0 1.125 9.5q0 1.335.656 2.438a4.87 4.87 0 0 0 1.782 1.78A4.84 4.84 0 0 0 6 14.376q1.29 0 2.438-.656a4.87 4.87 0 0 0 1.78-1.781 4.7 4.7 0 0 0 .657-2.438M0 9.5a6.14 6.14 0 0 1 .797-3A6.2 6.2 0 0 1 3 4.297 6.1 6.1 0 0 1 6 3.5q1.57 0 3 .797A6.2 6.2 0 0 1 11.203 6.5q.774 1.359.797 3a6.14 6.14 0 0 1-.797 3A6.2 6.2 0 0 1 9 14.703a6.1 6.1 0 0 1-3 .797 6.1 6.1 0 0 1-3-.797A6.2 6.2 0 0 1 .797 12.5 6.14 6.14 0 0 1 0 9.5m8.39-2.719.329.328A.9.9 0 0 1 9 7.766q0 .375-.281.68l-.492.492-1.665-1.665.493-.492q.305-.28.656-.281.374 0 .68.281m-4.828 3.492 2.461-2.46 1.665 1.664-2.461 2.46a.7.7 0 0 1-.352.188l-1.406.352a.36.36 0 0 1-.352-.094.36.36 0 0 1-.094-.352l.352-1.406a.7.7 0 0 1 .188-.352' />
    </g>
    <defs>
      <clipPath id='f31fb630cad7c2a139959597792cab8e__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPenCircleCaptionBoldIcon);
export default ForwardRef;
