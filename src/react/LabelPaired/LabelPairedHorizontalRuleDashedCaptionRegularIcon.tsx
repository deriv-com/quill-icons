import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedHorizontalRuleDashedCaptionRegularIcon = (
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
        d='M0 9.5c0-.188.164-.375.375-.375H2.25c.188 0 .375.188.375.375 0 .21-.188.375-.375.375H.375A.37.37 0 0 1 0 9.5Zm4.125 0c0-.188.164-.375.375-.375h1.875c.188 0 .375.188.375.375 0 .21-.188.375-.375.375H4.5a.37.37 0 0 1-.375-.375Zm4.125 0c0-.188.164-.375.375-.375H10.5c.188 0 .375.188.375.375 0 .21-.188.375-.375.375H8.625A.37.37 0 0 1 8.25 9.5Zm4.125 0c0-.188.164-.375.375-.375h1.875c.188 0 .375.188.375.375 0 .21-.188.375-.375.375H12.75a.37.37 0 0 1-.375-.375Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHorizontalRuleDashedCaptionRegularIcon);
export default ForwardRef;
