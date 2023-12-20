import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedSortLgBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 13 30'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M3.023 12.375h6.954L6.5 8.898zm4.375-5.273 5 5c.365.416.456.872.274 1.367-.235.495-.625.755-1.172.781h-10c-.547-.026-.937-.287-1.172-.781-.182-.495-.091-.95.274-1.367l5-5c.26-.235.56-.352.898-.352.339 0 .638.117.898.352M3.023 18.625 6.5 22.102l3.477-3.477zm4.375 5.273c-.26.235-.56.352-.898.352-.339 0-.638-.117-.898-.352l-5-5c-.365-.416-.456-.872-.274-1.367.235-.494.625-.755 1.172-.781h10c.547.026.938.287 1.172.781.182.495.091.95-.274 1.367z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortLgBoldIcon);
export default ForwardRef;
