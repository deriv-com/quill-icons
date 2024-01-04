import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedFourLgBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        d='M7.383 8.117 2.5 17.375h8.125v-5.938c.052-.572.365-.885.938-.937.572.052.885.365.937.938v5.937h1.563c.572.052.885.365.937.938-.052.572-.365.885-.938.937H12.5v4.063c-.052.572-.365.885-.938.937-.572-.052-.885-.365-.937-.938V19.25H.937c-.338 0-.611-.156-.82-.469-.156-.286-.156-.586 0-.898L5.742 7.258c.313-.495.73-.625 1.25-.39.495.312.625.728.39 1.25Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFourLgBoldIcon);
export default ForwardRef;
