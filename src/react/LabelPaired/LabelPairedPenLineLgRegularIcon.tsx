import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPenLineLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={23}
    height={30}
    viewBox='0 0 23 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M17.008 7.063c-.352-.352-.938-.352-1.328 0L13.57 9.21l2.97 2.969 2.148-2.11c.351-.39.351-.976 0-1.328zM3.492 19.289c-.312.273-.508.664-.625 1.055l-1.094 3.633 3.633-1.055c.39-.117.782-.352 1.055-.664l9.219-9.18-3.008-3.008zM14.82 6.164c.86-.82 2.227-.82 3.086 0l1.68 1.68c.82.86.82 2.226 0 3.086L7.359 23.156c-.468.43-1.015.782-1.601.938L1.03 25.5a.61.61 0 0 1-.625-.156c-.156-.157-.195-.39-.156-.625l1.406-4.727c.157-.586.508-1.133.938-1.601zM9.625 24.25h12.5c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-12.5A.617.617 0 0 1 9 24.875c0-.312.273-.625.625-.625' />
    </g>
    <defs>
      <clipPath id='7bcc02c8e6dc75eb8110196b559cae4f__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPenLineLgRegularIcon);
export default ForwardRef;
