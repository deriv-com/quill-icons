import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedForwardLgRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M18.516 15.5 10 9.328v12.344zM9.922 8c.26 0 .495.078.703.234l8.984 6.524c.26.182.391.43.391.742a.86.86 0 0 1-.39.742l-8.985 6.524a1.142 1.142 0 0 1-.703.234c-.339 0-.612-.117-.82-.352-.235-.208-.352-.481-.352-.82v-4.023l-6.875 4.96a1.142 1.142 0 0 1-.703.235c-.339 0-.612-.117-.82-.352-.235-.208-.352-.481-.352-.82V9.172c0-.339.117-.612.352-.82C.56 8.117.833 8 1.172 8c.26 0 .495.078.703.234l6.875 4.961V9.172c0-.339.117-.612.352-.82.208-.235.481-.352.82-.352M8.75 16.242v-1.484l-7.5-5.43v12.344z' />
    </g>
    <defs>
      <clipPath id='624366c8a7164bf519473c209b50a257__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardLgRegularIcon);
export default ForwardRef;
