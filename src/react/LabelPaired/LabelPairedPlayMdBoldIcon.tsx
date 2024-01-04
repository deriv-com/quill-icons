import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedPlayMdBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={24}
    viewBox='0 0 12 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m1.5 17.5 9-5.5-9-5.5v11ZM.781 5.187c.5-.27 1-.26 1.5.032l9 5.5c.459.291.698.719.719 1.281-.02.563-.26.99-.719 1.281l-9 5.5c-.5.292-1 .302-1.5.032-.5-.292-.76-.73-.781-1.313v-11c.02-.583.281-1.02.781-1.313Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlayMdBoldIcon);
export default ForwardRef;
