import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneCaretDownRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <path
      fillOpacity={0.72}
      d='m16.234 20.172 4.688-4.453a.265.265 0 0 0 .078-.196.305.305 0 0 0-.273-.273h-9.454a.305.305 0 0 0-.273.273c0 .079.026.144.078.196l4.688 4.453a.42.42 0 0 0 .234.078.42.42 0 0 0 .234-.078Zm.86.898c-.313.287-.677.43-1.094.43-.417 0-.781-.143-1.094-.43l-4.687-4.414a1.543 1.543 0 0 1-.469-1.133c0-.442.143-.807.43-1.093.286-.287.65-.43 1.093-.43h9.454c.442.026.807.182 1.093.469.287.286.43.638.43 1.054 0 .443-.156.82-.469 1.133l-4.687 4.414Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCaretDownRegularIcon);
export default ForwardRef;
