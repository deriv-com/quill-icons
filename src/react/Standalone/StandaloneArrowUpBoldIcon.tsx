import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneArrowUpBoldIcon = (
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
    <path d='M16.664 8.023v.04l6.563 6.874q.546.665 0 1.29-.704.546-1.329 0l-4.96-5.196v13.282q-.079.858-.938.937-.86-.079-.937-.937V11.03l-4.961 5.156q-.625.586-1.329.04-.546-.626 0-1.329l6.563-6.875A.9.9 0 0 1 16 7.75q.39 0 .664.273' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowUpBoldIcon);
export default ForwardRef;
