import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneBackwardRegularIcon = (
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
      d='M7.484 16.5 16 22.672V10.328zM16.078 9c.339 0 .612.117.82.352.235.208.352.481.352.82v4.023l6.875-4.96c.208-.157.443-.235.703-.235.339 0 .612.117.82.352.235.208.352.481.352.82v12.656c0 .339-.117.612-.352.82-.208.235-.481.352-.82.352-.26 0-.495-.078-.703-.234l-6.875-4.961v4.023c0 .339-.117.612-.352.82-.208.235-.481.352-.82.352-.26 0-.495-.078-.703-.234l-8.984-6.524A.86.86 0 0 1 6 16.5c0-.312.13-.56.39-.742l8.985-6.524c.208-.156.443-.234.703-.234m1.172 8.242 7.5 5.43V10.328l-7.5 5.43z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneBackwardRegularIcon);
export default ForwardRef;
