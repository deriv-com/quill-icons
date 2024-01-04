import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedPenLineLgBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={23}
    height={30}
    viewBox='0 0 23 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m.758 22.648.898-3.046a3.324 3.324 0 0 1 .899-1.446L14.43 6.242a2.47 2.47 0 0 1 1.758-.703c.65 0 1.236.234 1.757.703l1.563 1.563a2.5 2.5 0 0 1 .703 1.992 2.505 2.505 0 0 1-.703 1.523L7.633 23.195l-.156.157c-.391.338-.834.585-1.329.742l-3.046.898-1.641.469c-.365.104-.677.026-.938-.234-.234-.26-.312-.573-.234-.938l.469-1.64Zm2.46-1.601-.663 2.148 2.148-.625.938-.273c.234-.078.455-.209.664-.39l8.906-8.946-2.422-2.422-8.906 8.906-.078.078a1.95 1.95 0 0 0-.352.586l-.234.938Zm6.72 2.578h11.874c.573.052.886.365.938.938-.052.572-.365.885-.938.937H9.938c-.572-.052-.885-.365-.937-.938.052-.572.365-.885.938-.937Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPenLineLgBoldIcon);
export default ForwardRef;
