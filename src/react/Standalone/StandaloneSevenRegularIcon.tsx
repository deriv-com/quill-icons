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
    <path d='M9.75 8.375c0-.312.273-.625.625-.625h11.25c.195 0 .43.156.547.352a.7.7 0 0 1-.04.625l-10 16.25a.62.62 0 0 1-.859.195c-.273-.195-.39-.547-.195-.86L20.492 9H10.375a.617.617 0 0 1-.625-.625' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneSevenRegularIcon);
export default ForwardRef;
