import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedBackwardLgRegularIcon = (
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
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M1.484 15.5 10 21.672V9.328L1.484 15.5ZM10.078 8c.339 0 .612.117.82.352.235.208.352.481.352.82v4.023l6.875-4.96c.208-.157.443-.235.703-.235.339 0 .612.117.82.352.235.208.352.481.352.82v12.656c0 .339-.117.612-.352.82-.208.235-.481.352-.82.352-.26 0-.495-.078-.703-.234l-6.875-4.961v4.023c0 .339-.117.612-.352.82-.208.235-.481.352-.82.352-.26 0-.495-.078-.703-.234L.391 16.242A.86.86 0 0 1 0 15.5c0-.313.13-.56.39-.742l8.985-6.524c.208-.156.443-.234.703-.234Zm1.172 8.242 7.5 5.43V9.328l-7.5 5.43v1.484Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardLgRegularIcon);
export default ForwardRef;
