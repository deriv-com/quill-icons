import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneCircleSterlingRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <path
      fillOpacity={0.72}
      d='M24.75 16.5c-.026-1.588-.417-3.047-1.172-4.375a8.988 8.988 0 0 0-3.203-3.203C18.995 8.14 17.537 7.75 16 7.75s-2.995.39-4.375 1.172a8.989 8.989 0 0 0-3.203 3.203c-.755 1.328-1.146 2.787-1.172 4.375.026 1.588.417 3.047 1.172 4.375a8.989 8.989 0 0 0 3.203 3.203c1.38.781 2.838 1.172 4.375 1.172s2.995-.39 4.375-1.172a8.988 8.988 0 0 0 3.203-3.203c.755-1.328 1.146-2.787 1.172-4.375ZM6 16.5c.026-1.823.469-3.49 1.328-5C8.214 9.99 9.438 8.766 11 7.828c1.588-.885 3.255-1.328 5-1.328s3.412.443 5 1.328c1.563.938 2.787 2.162 3.672 3.672.86 1.51 1.302 3.177 1.328 5-.026 1.823-.469 3.49-1.328 5-.886 1.51-2.11 2.734-3.672 3.672-1.588.885-3.255 1.328-5 1.328s-3.412-.443-5-1.328c-1.563-.938-2.786-2.162-3.672-3.672-.86-1.51-1.302-3.177-1.328-5Zm10.156-4.375c-.416 0-.755.143-1.015.43-.26.26-.404.599-.43 1.015l.039 1.68h1.875c.39.026.599.234.625.625-.026.39-.234.599-.625.625H14.75a6.001 6.001 0 0 1-.703 2.5h4.765c.391.026.6.234.625.625-.026.39-.234.599-.625.625h-5.937a.612.612 0 0 1-.547-.313.67.67 0 0 1 .04-.664l.35-.507c.47-.703.73-1.459.782-2.266h-.625c-.39-.026-.599-.234-.625-.625.026-.39.234-.599.625-.625h.625l-.04-1.68c.027-.755.287-1.393.782-1.914.495-.495 1.133-.755 1.914-.781.417 0 .808.091 1.172.273l.82.43c.339.209.43.482.274.82-.182.339-.456.43-.82.274l-.82-.39a1.387 1.387 0 0 0-.626-.157Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCircleSterlingRegularIcon);
export default ForwardRef;
