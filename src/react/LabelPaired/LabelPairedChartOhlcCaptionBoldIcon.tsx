import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedChartOhlcCaptionBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={18}
    viewBox='0 0 15 18'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M7.5 3.5a.57.57 0 0 1 .563.563V5H9a.57.57 0 0 1 .563.563.555.555 0 0 1-.563.562h-.938v7.313A.555.555 0 0 1 7.5 14a.542.542 0 0 1-.563-.563V12.5H6a.542.542 0 0 1-.563-.563c0-.304.235-.562.563-.562h.938V4.062c0-.304.234-.562.562-.562ZM12.375 5a.57.57 0 0 1 .563.563v4.312h.937a.57.57 0 0 1 .563.563.555.555 0 0 1-.563.562h-.938v.938a.555.555 0 0 1-.562.562.542.542 0 0 1-.563-.563V7.625h-.937a.542.542 0 0 1-.563-.563c0-.304.235-.562.563-.562h.938v-.938c0-.304.234-.562.562-.562Zm-9.75 3a.57.57 0 0 1 .563.563v4.312h.937a.57.57 0 0 1 .563.563.555.555 0 0 1-.563.562h-.938v.938a.555.555 0 0 1-.562.562.542.542 0 0 1-.563-.563v-4.312h-.937a.542.542 0 0 1-.563-.563c0-.304.235-.562.563-.562h.938v-.938c0-.304.234-.562.562-.562Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartOhlcCaptionBoldIcon);
export default ForwardRef;
