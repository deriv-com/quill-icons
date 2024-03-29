import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneTrashBoldIcon = (
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
    <path d='M14.164 8.375c-.117 0-.195.078-.273.156l-.743 1.094h5.665l-.743-1.094a.33.33 0 0 0-.273-.156zm6.914 1.25h2.735a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937h-.47l-.937 12.695c-.117 1.328-1.172 2.305-2.5 2.305h-7.851c-1.328 0-2.383-.977-2.5-2.305L8.617 11.5h-.43c-.546 0-.937-.39-.937-.937 0-.508.39-.938.938-.938h2.695l1.445-2.148a2.24 2.24 0 0 1 1.836-.977h3.633c.742 0 1.445.39 1.836.977zm.39 1.875H10.493l.938 12.578c.039.313.312.547.625.547h7.851a.63.63 0 0 0 .625-.547z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneTrashBoldIcon);
export default ForwardRef;
