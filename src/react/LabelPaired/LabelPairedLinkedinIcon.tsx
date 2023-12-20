import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedLinkedinIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 14 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M13 5c.292 0 .531.094.719.281.187.209.281.448.281.719v12c0 .27-.094.51-.281.719A.974.974 0 0 1 13 19H1a.974.974 0 0 1-.719-.281A1.043 1.043 0 0 1 0 18V6c0-.27.094-.51.281-.719A.973.973 0 0 1 1 5zM4.219 17h.031v-6.687H2.156V17zM3.187 9.406c.355 0 .636-.114.844-.344.23-.229.354-.51.375-.843a1.3 1.3 0 0 0-.375-.875C3.823 7.114 3.541 7 3.188 7c-.334 0-.615.115-.844.344-.23.229-.344.52-.344.875 0 .333.115.614.344.844.229.229.51.343.844.343M12 17v-3.656c.042-.917-.104-1.677-.437-2.281-.334-.584-1.01-.886-2.032-.907-.52 0-.948.115-1.281.344-.333.208-.562.448-.687.719H7.53v-.906h-2V17h2.094v-3.312c-.02-.459.042-.855.188-1.188.166-.333.51-.51 1.03-.531.522.041.834.24.938.594.125.374.177.77.156 1.187V17z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLinkedinIcon);
export default ForwardRef;
