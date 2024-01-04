import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedForwardLgFillIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M2.07 22.727c-.416.312-.872.364-1.367.156C.26 22.648.026 22.27 0 21.75V9.25c.026-.52.26-.898.703-1.133.495-.208.95-.156 1.367.156l6.68 5.586V17.14l-6.68 5.587ZM10 19.25v-10c.026-.52.26-.898.703-1.133.495-.208.95-.156 1.367.156l7.5 6.25c.287.26.43.586.43.977 0 .39-.143.716-.43.977l-7.5 6.25c-.416.312-.872.364-1.367.156-.443-.235-.677-.612-.703-1.133v-2.5Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardLgFillIcon);
export default ForwardRef;
