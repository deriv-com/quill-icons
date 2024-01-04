import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedChartTrendDownCaptionBoldIcon = (
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
        d='M14.484 15.266a.555.555 0 0 1-.75-.258l-2.086-4.195H8.25a.556.556 0 0 1-.516-.305L4.992 5.023.984 7.016a.555.555 0 0 1-.75-.258.555.555 0 0 1 .258-.75l4.5-2.25a.555.555 0 0 1 .75.258l2.836 5.671h3.399c.234 0 .421.141.515.329l2.25 4.5c.14.28.024.609-.258.75Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartTrendDownCaptionBoldIcon);
export default ForwardRef;
