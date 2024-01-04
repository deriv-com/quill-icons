import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowRightToLineLgBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
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
        d='M17.75 8.938v13.124c-.052.573-.365.886-.938.938-.572-.052-.885-.365-.937-.938V8.938c.052-.572.365-.885.938-.937.572.052.885.365.937.938Zm-5.313 7.265.04-.039-5.313 5c-.469.365-.911.352-1.328-.039-.365-.443-.352-.872.039-1.29l3.594-3.398H1.188c-.573-.052-.886-.364-.938-.937.052-.573.365-.885.938-.938h8.28l-3.593-3.398c-.39-.417-.404-.846-.04-1.289.418-.39.847-.404 1.29-.04l5.313 5a.851.851 0 0 1 .312.665c0 .26-.104.495-.313.703Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightToLineLgBoldIcon);
export default ForwardRef;
