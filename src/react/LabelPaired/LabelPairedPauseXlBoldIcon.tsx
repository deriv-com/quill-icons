import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedPauseXlBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={36}
    viewBox='0 0 15 36'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M2.25 11.25v13.5H4.5v-13.5H2.25Zm-2.25 0c.031-.625.25-1.156.656-1.594A2.446 2.446 0 0 1 2.25 9H4.5c.625.031 1.156.25 1.594.656.406.438.625.969.656 1.594v13.5a2.447 2.447 0 0 1-.656 1.594A2.446 2.446 0 0 1 4.5 27H2.25a2.446 2.446 0 0 1-1.594-.656A2.447 2.447 0 0 1 0 24.75v-13.5Zm10.5 0v13.5h2.25v-13.5H10.5Zm-2.25 0c.031-.625.25-1.156.656-1.594A2.446 2.446 0 0 1 10.5 9h2.25c.625.031 1.156.25 1.594.656.406.438.625.969.656 1.594v13.5a2.446 2.446 0 0 1-.656 1.594A2.446 2.446 0 0 1 12.75 27H10.5a2.446 2.446 0 0 1-1.594-.656 2.447 2.447 0 0 1-.656-1.594v-13.5Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPauseXlBoldIcon);
export default ForwardRef;
