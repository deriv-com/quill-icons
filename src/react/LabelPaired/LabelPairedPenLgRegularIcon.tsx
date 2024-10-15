import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPenLgRegularIcon = (
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
      <path d='M15.43 7.063 13.32 9.21l2.97 2.969 2.148-2.11c.351-.39.351-.976 0-1.328l-1.68-1.68c-.352-.351-.938-.351-1.328 0m-3.008 3.007-9.18 9.22a2.3 2.3 0 0 0-.664 1.054l-1.055 3.633 3.633-1.094c.39-.117.782-.313 1.055-.625l9.219-9.18zm5.234-3.906 1.68 1.68c.82.86.82 2.226 0 3.086L7.109 23.156c-.468.43-1.015.782-1.601.938L.78 25.5c-.234.04-.468 0-.625-.156-.156-.157-.195-.39-.156-.625l1.406-4.727c.157-.586.508-1.133.938-1.601L14.57 6.164c.86-.82 2.227-.82 3.086 0' />
    </g>
    <defs>
      <clipPath id='f29d3afd4f947c3992866db656cb97e8__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPenLgRegularIcon);
export default ForwardRef;
