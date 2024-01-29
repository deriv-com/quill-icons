import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedHorizontalRuleMdRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M0 12q.031-.469.5-.5h19q.47.031.5.5-.03.47-.5.5H.5q-.469-.03-.5-.5' />
    </g>
    <defs>
      <clipPath id='ff80ab6e1b336726a7d0431d5fbbb20b__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHorizontalRuleMdRegularIcon);
export default ForwardRef;
