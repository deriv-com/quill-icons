import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedBackwardLgFillIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        d='M17.969 22.727 11.25 17.14V13.86l6.719-5.587c.39-.312.833-.364 1.328-.156.443.235.677.612.703 1.133v12.5c-.026.52-.26.898-.703 1.133-.495.208-.938.156-1.328-.156ZM10 19.25v2.5c-.026.52-.26.898-.703 1.133-.495.208-.938.156-1.328-.156l-7.5-6.25A1.22 1.22 0 0 1 0 15.5c0-.39.156-.716.469-.977l7.5-6.25c.39-.312.833-.364 1.328-.156.443.235.677.612.703 1.133v10Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardLgFillIcon);
export default ForwardRef;
