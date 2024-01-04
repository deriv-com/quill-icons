import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedPlayLgBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={30}
    viewBox='0 0 15 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m1.875 22.375 11.25-6.875-11.25-6.875v13.75ZM.977 6.985c.625-.34 1.25-.326 1.875.038l11.25 6.875c.572.365.872.899.898 1.602-.026.703-.325 1.237-.898 1.602l-11.25 6.875c-.625.364-1.25.377-1.875.039-.625-.365-.951-.912-.977-1.641V8.625c.026-.73.352-1.276.977-1.64Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlayLgBoldIcon);
export default ForwardRef;
