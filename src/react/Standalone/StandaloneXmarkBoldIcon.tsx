import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneXmarkBoldIcon = (
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
    <path d='M21.977 11.852 17.328 16.5l4.649 4.648q.546.665 0 1.329-.665.546-1.329 0L16 17.828l-4.648 4.649q-.664.546-1.329 0-.546-.665 0-1.329l4.649-4.648-4.649-4.648q-.546-.664 0-1.329.664-.546 1.329 0L16 15.172l4.648-4.649q.664-.546 1.329 0 .546.664 0 1.329' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneXmarkBoldIcon);
export default ForwardRef;
