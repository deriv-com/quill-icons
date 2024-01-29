import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandalonePlusBoldIcon = (
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
    <path d='M16.938 9.313v6.25h6.25q.858.078.937.937-.079.859-.937.938h-6.25v6.25q-.079.858-.938.937-.86-.079-.937-.937v-6.25h-6.25q-.86-.079-.938-.938.078-.86.938-.937h6.25v-6.25q.078-.86.937-.938.859.078.938.938' />
  </svg>
);
const ForwardRef = forwardRef(StandalonePlusBoldIcon);
export default ForwardRef;
