import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedHorizontalRuleXlBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M0 18c.063-.688.438-1.063 1.125-1.125h27.75c.688.063 1.063.438 1.125 1.125-.063.688-.438 1.063-1.125 1.125H1.125C.437 19.062.062 18.687 0 18Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHorizontalRuleXlBoldIcon);
export default ForwardRef;
