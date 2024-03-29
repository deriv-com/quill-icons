import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandalonePlayRegularIcon = (
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
    <path d='M10.688 9.117a.7.7 0 0 0-.626-.039c-.195.117-.351.352-.351.547v13.75c0 .234.156.469.351.547a.6.6 0 0 0 .626 0l11.25-6.875a.62.62 0 0 0 .312-.547.61.61 0 0 0-.312-.508zm-1.25-1.094a1.87 1.87 0 0 1 1.914 0l11.25 6.875c.546.352.898.977.898 1.602 0 .664-.352 1.29-.898 1.602l-11.25 6.875c-.586.39-1.329.39-1.915.039-.585-.313-.937-.938-.937-1.641V9.625c0-.664.352-1.29.938-1.602' />
  </svg>
);
const ForwardRef = forwardRef(StandalonePlayRegularIcon);
export default ForwardRef;
