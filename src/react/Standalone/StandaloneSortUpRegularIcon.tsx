import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneSortUpRegularIcon = (
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
      d='m15.766 9.078-4.688 4.453a.265.265 0 0 0-.078.196.305.305 0 0 0 .273.273h9.454a.305.305 0 0 0 .273-.273.265.265 0 0 0-.078-.196l-4.688-4.453A.42.42 0 0 0 16 9a.42.42 0 0 0-.234.078Zm-.86-.898c.313-.287.677-.43 1.094-.43.417 0 .781.143 1.094.43l4.687 4.414c.313.312.469.69.469 1.133 0 .442-.143.807-.43 1.093-.286.287-.65.43-1.093.43h-9.454c-.442 0-.807-.143-1.093-.43-.287-.286-.43-.65-.43-1.093 0-.443.156-.82.469-1.133l4.687-4.414Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneSortUpRegularIcon);
export default ForwardRef;
