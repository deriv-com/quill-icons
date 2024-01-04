import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowDownLeftLgBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
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
        d='M2.188 21.75c-.573-.052-.886-.365-.938-.938v-9.375c.052-.572.365-.885.938-.937.572.052.885.365.937.938v7.109l9.023-9.024c.443-.364.886-.364 1.329 0 .364.443.364.886 0 1.329l-9.024 9.023h7.11c.572.052.885.365.937.938-.052.572-.365.885-.938.937H2.188Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownLeftLgBoldIcon);
export default ForwardRef;
