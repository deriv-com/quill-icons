import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneBackwardBoldIcon = (
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
      d='M17.25 10.172v3.867l6.914-4.844c.182-.13.404-.195.664-.195.339 0 .612.117.82.352.235.208.352.481.352.82v12.656c0 .339-.117.612-.352.82-.208.235-.481.352-.82.352-.234 0-.456-.065-.664-.195L17.25 18.96v3.867c0 .339-.117.612-.352.82-.208.235-.481.352-.82.352-.26 0-.495-.078-.703-.234l-8.984-6.524A.86.86 0 0 1 6 16.5c0-.313.13-.56.39-.742l8.985-6.524c.208-.156.443-.234.703-.234.339 0 .612.117.82.352.235.208.352.481.352.82Zm0 6.172v.312l6.875 4.844v-9.96l-6.875 4.804Zm-8.71.156 6.835 4.96v-9.92L8.539 16.5Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneBackwardBoldIcon);
export default ForwardRef;
