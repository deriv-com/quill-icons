import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPhoneLgRegularIcon = (
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
      <path d='m14.648 16.281 4.375 1.875a1.535 1.535 0 0 1 .938 1.758l-.938 4.375c-.156.703-.78 1.25-1.523 1.25-.273 0-.508-.039-.742-.039-.156 0-.352 0-.508-.04C7.148 24.837 0 17.259 0 8c0-.703.508-1.367 1.21-1.523l4.376-.938a1.535 1.535 0 0 1 1.758.938l1.875 4.375c.273.625.117 1.367-.43 1.796l-1.601 1.329a12.14 12.14 0 0 0 4.335 4.336l1.329-1.602c.43-.547 1.171-.703 1.796-.43m2.813 7.969c.156 0 .273-.078.312-.234l.938-4.375c.039-.157-.04-.274-.156-.352l-4.375-1.875a.45.45 0 0 0-.39.078l-1.29 1.602a1.254 1.254 0 0 1-1.602.273 12.7 12.7 0 0 1-4.765-4.765A1.254 1.254 0 0 1 6.406 13l1.602-1.29c.078-.116.117-.233.078-.39L6.21 6.945c-.078-.117-.195-.195-.352-.156l-4.375.938c-.156 0-.234.156-.234.273 0 8.984 7.266 16.25 16.21 16.25' />
    </g>
    <defs>
      <clipPath id='71e39c915c17fd5b9ed641e28162dfa3__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPhoneLgRegularIcon);
export default ForwardRef;
