import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedPlayLgRegularIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        d='M2.188 8.078a.664.664 0 0 0-.626 0 .612.612 0 0 0-.312.547v13.75c0 .234.104.417.313.547a.664.664 0 0 0 .625 0l11.25-6.875a.612.612 0 0 0 .312-.547.612.612 0 0 0-.313-.547L2.188 8.078ZM.976 6.984c.625-.338 1.25-.325 1.875.04l11.25 6.874c.572.365.872.899.898 1.602-.026.703-.325 1.237-.898 1.602l-11.25 6.875c-.625.364-1.25.377-1.875.039-.625-.365-.951-.912-.977-1.641V8.625c.026-.73.352-1.276.977-1.64Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlayLgRegularIcon);
export default ForwardRef;
