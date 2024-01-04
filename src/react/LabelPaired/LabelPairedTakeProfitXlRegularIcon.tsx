import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedTakeProfitXlRegularIcon = (
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
        d='M10.5 13.547V24.28H8.437V13.547h-3.75v-1.828h9.516v1.828H10.5Zm5.719 10.734V11.72h5.39c1.172 0 2.063.375 2.72 1.031.608.703.937 1.64.937 2.766 0 1.171-.328 2.062-.938 2.765-.656.703-1.547 1.032-2.719 1.032h-3.375v4.968H16.22Zm2.015-6.75h3.235c.515 0 .937-.14 1.218-.422.282-.28.422-.656.422-1.172v-.843c0-.516-.14-.89-.422-1.172-.28-.281-.703-.422-1.218-.422h-3.235v4.031Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTakeProfitXlRegularIcon);
export default ForwardRef;
