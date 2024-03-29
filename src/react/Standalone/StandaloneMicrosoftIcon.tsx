import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneMicrosoftIcon = (
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
    <path d='M7.25 7.75h8.36v8.398H7.25zm9.102 0h8.398v8.398h-8.398zM7.25 16.89h8.36v8.36H7.25zm9.102 0h8.398v8.36h-8.398z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneMicrosoftIcon);
export default ForwardRef;
