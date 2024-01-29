import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneCaretDownRegularIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d='m16.234 20.172 4.688-4.453a.27.27 0 0 0 .078-.196.305.305 0 0 0-.273-.273h-9.454a.305.305 0 0 0-.273.273q0 .118.078.196l4.688 4.453a.4.4 0 0 0 .234.078.4.4 0 0 0 .234-.078m.86.898q-.469.43-1.094.43t-1.094-.43l-4.687-4.414a1.54 1.54 0 0 1-.469-1.133q0-.664.43-1.093.429-.43 1.093-.43h9.454q.663.039 1.093.469t.43 1.054q0 .664-.469 1.133z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCaretDownRegularIcon);
export default ForwardRef;
