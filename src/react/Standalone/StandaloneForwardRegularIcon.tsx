import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneForwardRegularIcon = (
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
      d='M24.516 16.5 16 10.328v12.344zM15.922 9c.26 0 .495.078.703.234l8.984 6.524c.26.182.391.43.391.742a.86.86 0 0 1-.39.742l-8.985 6.524a1.142 1.142 0 0 1-.703.234c-.339 0-.612-.117-.82-.352-.235-.208-.352-.481-.352-.82v-4.023l-6.875 4.96a1.142 1.142 0 0 1-.703.235c-.339 0-.612-.117-.82-.352-.235-.208-.352-.481-.352-.82V10.172c0-.339.117-.612.352-.82.208-.235.481-.352.82-.352.26 0 .495.078.703.234l6.875 4.961v-4.023c0-.339.117-.612.352-.82.208-.235.481-.352.82-.352m-1.172 8.242v-1.484l-7.5-5.43v12.344z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneForwardRegularIcon);
export default ForwardRef;
