import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedBarcodeLgBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        d='M.938 6.75c.572.052.885.365.937.938v15.625c-.052.572-.365.885-.938.937-.572-.052-.885-.365-.937-.938V7.688c.052-.572.365-.885.938-.937Zm3.437 0c.39.026.599.234.625.625v16.25c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625V7.375c.026-.39.234-.599.625-.625Zm2.813 0c.572.052.885.365.937.938v15.625c-.052.572-.365.885-.938.937-.572-.052-.885-.365-.937-.938V7.688c.052-.572.365-.885.938-.937Zm4.375 0c.572.052.885.365.937.938v15.625c-.052.572-.365.885-.938.937-.572-.052-.885-.365-.937-.938V7.688c.052-.572.365-.885.938-.937Zm6.562.938c.052-.573.365-.886.938-.938.572.052.885.365.937.938v15.625c-.052.572-.365.885-.938.937-.572-.052-.885-.365-.937-.938V7.688Zm-2.5-.313c.026-.39.234-.599.625-.625.39.026.599.234.625.625v16.25c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625V7.375Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarcodeLgBoldIcon);
export default ForwardRef;
