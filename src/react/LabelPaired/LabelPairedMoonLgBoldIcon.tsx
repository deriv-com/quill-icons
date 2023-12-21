import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedMoonLgBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 15 30'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M5.664 9.367a6.748 6.748 0 0 0-2.734 2.461C2.253 12.922 1.9 14.146 1.875 15.5c.052 1.953.716 3.568 1.992 4.844 1.302 1.302 2.917 1.979 4.844 2.031a7.38 7.38 0 0 0 1.523-.156c-1.744-.625-3.15-1.68-4.218-3.164-1.068-1.459-1.615-3.164-1.641-5.117 0-1.693.43-3.217 1.29-4.57M8.086 6.79c.078 0 .17-.013.273-.039h.704c.13 0 .26.013.39.04.313.051.508.207.586.468.052.312-.052.547-.312.703-.13.052-.26.13-.391.234a5.495 5.495 0 0 0-.469.352h-.039l-.078.078a6.998 6.998 0 0 0-1.836 2.344 6.704 6.704 0 0 0-.664 2.969c.052 1.953.716 3.567 1.992 4.843 1.276 1.302 2.89 1.98 4.844 2.032h.156c.208 0 .404-.014.586-.04.156-.026.3-.039.43-.039.312-.052.534.052.664.313.13.26.091.508-.117.742-.104.078-.209.17-.313.273a3.07 3.07 0 0 1-.547.43l-.078.078a.453.453 0 0 1-.117.078c-1.458 1.042-3.125 1.576-5 1.602-1.64-.026-3.112-.43-4.414-1.21a8.187 8.187 0 0 1-3.125-3.126C.43 18.612.026 17.141 0 15.5c.052-2.37.833-4.362 2.344-5.977C3.854 7.91 5.768 6.997 8.086 6.79'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMoonLgBoldIcon);
export default ForwardRef;