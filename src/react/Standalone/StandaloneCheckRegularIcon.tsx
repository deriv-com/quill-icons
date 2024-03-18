import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneCheckRegularIcon = (
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
    <path d='M24.555 10.445a.66.66 0 0 1 0 .899L13.93 21.969a.66.66 0 0 1-.899 0l-5.625-5.625a.66.66 0 0 1 0-.899.66.66 0 0 1 .899 0l5.195 5.196 10.156-10.196a.66.66 0 0 1 .899 0' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCheckRegularIcon);
export default ForwardRef;
