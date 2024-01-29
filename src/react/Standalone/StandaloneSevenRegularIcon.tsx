import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneSevenRegularIcon = (
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
    <path d='M9.75 8.375q.039-.585.625-.625h11.25q.352 0 .547.313a.66.66 0 0 1 0 .624l-10 16.25q-.352.47-.86.235-.468-.352-.195-.86L20.492 9H10.375q-.585-.039-.625-.625' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneSevenRegularIcon);
export default ForwardRef;
