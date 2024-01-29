import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneArrowDownLeftBoldIcon = (
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
    <path d='M10.688 22.75q-.86-.079-.938-.937v-9.375q.078-.86.938-.938.858.078.937.938v7.109l9.023-9.024q.664-.546 1.329 0 .546.664 0 1.329l-9.024 9.023h7.11q.858.078.937.938-.078.858-.937.937z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowDownLeftBoldIcon);
export default ForwardRef;
