import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedGooglePlayLgIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 20 30'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m12.695 14.64 2.344-2.343-10.937-6.29zM1.835 5.5l10.04 10-10.04 10c-.546-.287-.832-.742-.858-1.367V6.867c.026-.625.312-1.08.859-1.367m16.603 8.828c.39.287.585.677.585 1.172 0 .495-.182.885-.546 1.172l-2.344 1.367-2.54-2.539 2.54-2.5zM4.102 24.992l8.593-8.633 2.344 2.344z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGooglePlayLgIcon);
export default ForwardRef;
