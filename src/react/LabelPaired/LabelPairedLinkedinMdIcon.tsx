import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedLinkedinMdIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M13 5c.292 0 .531.094.719.281.187.209.281.448.281.719v12c0 .27-.094.51-.281.719A.974.974 0 0 1 13 19H1a.974.974 0 0 1-.719-.281A1.043 1.043 0 0 1 0 18V6c0-.27.094-.51.281-.719A.973.973 0 0 1 1 5h12ZM4.219 17h.031v-6.688H2.156V17H4.22ZM3.187 9.406c.355 0 .636-.114.844-.344.23-.229.354-.51.375-.843a1.3 1.3 0 0 0-.375-.875C3.823 7.114 3.541 7 3.188 7c-.334 0-.615.115-.844.344-.23.229-.344.52-.344.875 0 .333.115.614.344.844.229.229.51.343.844.343ZM12 17v-3.656c.042-.917-.104-1.677-.438-2.281-.333-.584-1.01-.886-2.03-.907-.522 0-.949.115-1.282.344-.333.208-.563.448-.688.719h-.03v-.906h-2V17h2.093v-3.313c-.02-.458.042-.854.188-1.187.166-.333.51-.51 1.03-.531.522.041.834.24.938.594.125.374.177.77.156 1.187V17H12Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLinkedinMdIcon);
export default ForwardRef;
