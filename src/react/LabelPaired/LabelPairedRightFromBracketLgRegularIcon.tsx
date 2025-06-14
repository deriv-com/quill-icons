import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRightFromBracketLgRegularIcon = (
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
      <path d='m18.71 15.46-5.155-4.882a.3.3 0 0 0-.196-.078c-.117 0-.234.117-.234.273V13a.64.64 0 0 1-.625.625H7.813a.31.31 0 0 0-.313.313v3.124c0 .196.117.313.313.313H12.5c.313 0 .625.313.625.625v2.266c0 .117.117.234.234.234.079 0 .157 0 .196-.04l5.156-4.882s.039-.039.039-.078zm1.29.04c0 .39-.156.742-.43 1.016l-5.156 4.843c-.273.274-.664.391-1.055.391-.82 0-1.484-.664-1.484-1.484v-1.641H7.813c-.899 0-1.563-.664-1.563-1.562v-3.125c0-.86.664-1.563 1.563-1.563h4.062v-1.602c0-.82.664-1.523 1.484-1.523.391 0 .782.156 1.055.43l5.156 4.843c.274.274.43.625.43.977M6.875 8h-3.75C2.07 8 1.25 8.86 1.25 9.875v11.25C1.25 22.18 2.07 23 3.125 23h3.75c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-3.75C1.367 24.25 0 22.883 0 21.125V9.875A3.11 3.11 0 0 1 3.125 6.75h3.75c.313 0 .625.313.625.625A.64.64 0 0 1 6.875 8' />
    </g>
    <defs>
      <clipPath id='d803a909092494c2a48999f5373b882d__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRightFromBracketLgRegularIcon);
export default ForwardRef;
