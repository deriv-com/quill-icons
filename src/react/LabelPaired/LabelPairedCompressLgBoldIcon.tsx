import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedCompressLgBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M6.5 7.688v4.375c-.052.572-.365.885-.938.937H1.188c-.572-.052-.885-.365-.937-.938.052-.572.365-.885.938-.937h3.437V7.687c.052-.572.365-.885.938-.937.572.052.885.365.937.938ZM1.187 18h4.375c.573.052.886.365.938.938v4.375c-.052.572-.365.885-.938.937-.572-.052-.885-.365-.937-.938v-3.437H1.187c-.572-.052-.885-.365-.937-.938.052-.572.365-.885.938-.937ZM13.376 7.687v3.438h3.438c.572.052.885.365.937.938-.052.572-.365.885-.938.937h-4.375c-.572-.052-.885-.365-.937-.938V7.689c.052-.573.365-.886.938-.938.572.052.885.365.937.938ZM12.437 18h4.376c.572.052.885.365.937.938-.052.572-.365.885-.938.937h-3.437v3.438c-.052.572-.365.885-.938.937-.572-.052-.885-.365-.937-.938v-4.375c.052-.572.365-.885.938-.937Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCompressLgBoldIcon);
export default ForwardRef;
