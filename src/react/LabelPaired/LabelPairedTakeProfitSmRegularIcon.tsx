import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedTakeProfitSmRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 18 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M6.375 8.152v6.262H5.172V8.152H2.984V7.086h5.551v1.066zm3.336 6.262V7.086h3.144c.684 0 1.204.219 1.586.601.356.41.547.958.547 1.614 0 .683-.191 1.203-.547 1.613-.382.41-.902.602-1.586.602h-1.968v2.898zm1.176-3.937h1.886c.301 0 .547-.082.711-.247.164-.164.246-.382.246-.683v-.492c0-.301-.082-.52-.246-.684-.164-.164-.41-.246-.71-.246h-1.887z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTakeProfitSmRegularIcon);
export default ForwardRef;