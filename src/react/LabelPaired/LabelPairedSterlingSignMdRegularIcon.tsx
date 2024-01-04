import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedSterlingSignMdRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={10}
    height={24}
    viewBox='0 0 10 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M2.5 8.75V12h5c.313.02.48.188.5.5-.02.313-.188.48-.5.5h-5a12.234 12.234 0 0 1-1.188 5H9.5c.313.02.48.188.5.5-.02.313-.188.48-.5.5h-9a.49.49 0 0 1-.438-.25.531.531 0 0 1 0-.5l.032-.063A11.638 11.638 0 0 0 1.5 13h-1c-.313-.02-.48-.188-.5-.5.02-.313.188-.48.5-.5h1V8.75c.02-1.063.385-1.948 1.094-2.656C3.302 5.385 4.188 5.02 5.25 5h.219c.416 0 .812.063 1.187.188l2.5.843c.271.125.375.334.313.625-.125.292-.334.396-.625.313l-2.5-.813A2.587 2.587 0 0 0 5.469 6H5.25c-.77.02-1.417.292-1.938.813-.52.52-.791 1.166-.812 1.937Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSterlingSignMdRegularIcon);
export default ForwardRef;
