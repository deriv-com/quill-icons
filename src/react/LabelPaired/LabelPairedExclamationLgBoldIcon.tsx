import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedExclamationLgBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={3}
    height={30}
    viewBox='0 0 3 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M2.438 7.688v11.25c-.053.572-.365.885-.938.937-.573-.052-.885-.365-.938-.938V7.688c.053-.572.365-.885.938-.937.573.052.885.365.938.938ZM1.5 24.25c-.365 0-.664-.117-.898-.352C.367 23.664.25 23.365.25 23s.117-.664.352-.898c.234-.235.533-.352.898-.352s.664.117.898.352c.235.234.352.533.352.898s-.117.664-.352.898c-.234.235-.533.352-.898.352Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h3v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedExclamationLgBoldIcon);
export default ForwardRef;
