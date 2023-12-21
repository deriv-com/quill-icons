import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedShieldCheckSmBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 14 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M1.996 7.223c-.164.09-.246.21-.246.355 0 .857.146 1.841.438 2.953.291 1.094.802 2.17 1.53 3.227.748 1.039 1.787 1.896 3.118 2.57.11.037.219.037.328 0 1.33-.674 2.37-1.531 3.117-2.57.73-1.057 1.24-2.133 1.531-3.227.292-1.112.438-2.096.438-2.953 0-.146-.082-.264-.246-.355L7 5.09zM12.523 6.02c.31.127.556.328.739.601.2.274.3.593.3.957.019.93-.136 2.024-.464 3.281-.328 1.258-.92 2.48-1.778 3.664-.838 1.204-2.041 2.197-3.61 2.98a1.622 1.622 0 0 1-1.42 0c-1.569-.783-2.772-1.776-3.61-2.98-.857-1.184-1.45-2.406-1.778-3.664C.574 9.602.42 8.508.438 7.58c0-.365.1-.684.3-.958.183-.273.429-.474.739-.601l5.168-2.188A.784.784 0 0 1 7 3.75c.128 0 .246.027.355.082zM8.531 9.438c-.036.637-.328 1.102-.875 1.394v1.887c-.036.4-.255.62-.656.656-.401-.037-.62-.255-.656-.656v-1.887c-.547-.292-.839-.757-.875-1.395.018-.437.164-.802.437-1.093.292-.274.657-.42 1.094-.438.438.018.802.164 1.094.438.273.291.419.656.437 1.094'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedShieldCheckSmBoldIcon);
export default ForwardRef;