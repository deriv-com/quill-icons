import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedMoonLgRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 15 30'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M7.46 8.117c-1.796.339-3.267 1.185-4.413 2.54-1.172 1.327-1.771 2.942-1.797 4.843.052 2.135.781 3.906 2.188 5.313C4.844 22.219 6.615 22.947 8.75 23a7.727 7.727 0 0 0 3.672-.977c-2.136-.208-3.893-1.067-5.274-2.578-1.38-1.484-2.096-3.32-2.148-5.507 0-1.146.221-2.214.664-3.204a7.347 7.347 0 0 1 1.797-2.617m2.58-.86c.051.313-.053.548-.313.704a7.177 7.177 0 0 0-2.54 2.46c-.625 1.043-.937 2.214-.937 3.517.052 1.953.716 3.567 1.992 4.843 1.302 1.302 2.917 1.98 4.844 2.032.417 0 .807-.04 1.172-.118.312-.026.534.091.664.352.13.26.091.508-.117.742-1.615 1.589-3.633 2.409-6.055 2.461-1.64-.026-3.112-.43-4.414-1.21a8.187 8.187 0 0 1-3.125-3.126C.43 18.612.026 17.141 0 15.5c.026-1.64.417-3.112 1.172-4.414A8.473 8.473 0 0 1 4.336 7.96C5.638 7.18 7.096 6.776 8.71 6.75c.26 0 .508.013.742.04.313.025.508.181.586.468'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMoonLgRegularIcon);
export default ForwardRef;
