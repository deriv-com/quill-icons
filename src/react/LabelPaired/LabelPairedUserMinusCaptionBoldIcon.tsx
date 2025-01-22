import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUserMinusCaptionBoldIcon = (
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
      <path d='M5.25 4.625c-.68 0-1.29.375-1.64.938a1.91 1.91 0 0 0 0 1.875c.35.585.96.937 1.64.937.656 0 1.266-.352 1.617-.937a1.91 1.91 0 0 0 0-1.875c-.351-.563-.96-.938-1.617-.938m0 4.875A2.98 2.98 0 0 1 2.648 8a2.99 2.99 0 0 1 0-3A3.03 3.03 0 0 1 5.25 3.5c1.055 0 2.04.586 2.578 1.5.54.938.54 2.086 0 3A2.97 2.97 0 0 1 5.25 9.5m-1.078 2.25a3.06 3.06 0 0 0-3.024 2.625h8.18a3.06 3.06 0 0 0-3.023-2.625zm0-1.125h2.133A4.19 4.19 0 0 1 10.5 14.82c0 .375-.328.68-.703.68H.68a.68.68 0 0 1-.68-.68 4.17 4.17 0 0 1 4.172-4.195m6.89-2.437h3.376A.57.57 0 0 1 15 8.75a.555.555 0 0 1-.562.563h-3.376a.54.54 0 0 1-.562-.563c0-.305.234-.562.563-.562' />
    </g>
    <defs>
      <clipPath id='8820cabaaa0c437d009ceb05761961e9__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUserMinusCaptionBoldIcon);
export default ForwardRef;
