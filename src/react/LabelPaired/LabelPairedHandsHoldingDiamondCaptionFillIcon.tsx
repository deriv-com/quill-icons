import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHandsHoldingDiamondCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={18}
    viewBox='0 0 15 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6.96 3.734a.723.723 0 0 1 1.056 0l2.25 2.25a.723.723 0 0 1 0 1.055l-2.25 2.25a.723.723 0 0 1-1.055 0L4.71 7.04a.723.723 0 0 1 0-1.055zM1.876 5.938V9.71c0 .4.14.774.422 1.056l1.195 1.195c.211.187.516.234.727.07.304-.187.351-.633.093-.89l-.351-.352-.75-.75a.723.723 0 0 1 0-1.055.723.723 0 0 1 1.055 0l.75.75.351.352.61.586c.492.492.773 1.172.773 1.875v1.828c0 .633-.516 1.125-1.125 1.125h-1.57c-.399 0-.774-.14-1.055-.422L.656 12.734A2.27 2.27 0 0 1 0 11.141V5.938C0 5.422.398 5 .938 5a.94.94 0 0 1 .937.938m11.25 0A.94.94 0 0 1 14.063 5a.94.94 0 0 1 .937.938v5.202c0 .587-.234 1.172-.656 1.594L12 15.078c-.281.281-.68.422-1.078.422H9.375a1.11 1.11 0 0 1-1.125-1.125v-1.828c0-.703.258-1.383.75-1.875l.61-.586.35-.352.75-.75a.723.723 0 0 1 1.056 0 .723.723 0 0 1 0 1.055l-.75.75-.352.352c-.258.257-.21.703.094.89.21.164.515.117.726-.07l1.196-1.195c.28-.282.445-.657.445-1.055V5.938' />
    </g>
    <defs>
      <clipPath id='dfe17f646580eb310d6ad658f873631d__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHandsHoldingDiamondCaptionFillIcon);
export default ForwardRef;
