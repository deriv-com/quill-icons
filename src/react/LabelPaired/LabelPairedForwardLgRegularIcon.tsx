import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedForwardLgRegularIcon = (
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
        d='M18.516 15.5 10 9.328v12.344zM9.922 8c.26 0 .495.078.703.234l8.984 6.524c.26.182.391.43.391.742a.86.86 0 0 1-.39.742l-8.985 6.524a1.142 1.142 0 0 1-.703.234c-.339 0-.612-.117-.82-.352-.235-.208-.352-.481-.352-.82v-4.023l-6.875 4.96a1.142 1.142 0 0 1-.703.235c-.339 0-.612-.117-.82-.352-.235-.208-.352-.481-.352-.82V9.172c0-.339.117-.612.352-.82C.56 8.117.833 8 1.172 8c.26 0 .495.078.703.234l6.875 4.961V9.172c0-.339.117-.612.352-.82.208-.235.481-.352.82-.352M8.75 16.242v-1.484l-7.5-5.43v12.344z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardLgRegularIcon);
export default ForwardRef;
