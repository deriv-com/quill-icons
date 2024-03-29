import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneThumbsDownRegularIcon = (
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
    <path d='M17.25 23.336a.98.98 0 0 0 1.172.664.98.98 0 0 0 .664-1.172l-.195-.625a7.2 7.2 0 0 0-.977-2.226.6.6 0 0 1 0-.625.59.59 0 0 1 .547-.352H23.5c.664 0 1.25-.547 1.25-1.25 0-.43-.234-.82-.586-1.055-.273-.156-.39-.547-.234-.82.117-.195.195-.39.195-.625 0-.469-.273-.898-.703-1.094a.6.6 0 0 1-.313-.43.6.6 0 0 1 .118-.507c.156-.235.273-.469.273-.781 0-.547-.39-1.016-.86-1.172-.312-.118-.507-.43-.43-.743 0-.078.04-.156.04-.273C22.25 9.586 21.664 9 21 9h-3.516c-.625 0-1.21.195-1.718.547l-1.524 1.015a3 3 0 0 0-.86.86c-.194.312-.585.39-.859.195-.312-.195-.39-.586-.195-.86a4.1 4.1 0 0 1 1.211-1.25l1.524-1.015a4.4 4.4 0 0 1 2.421-.742H21c1.367 0 2.5 1.133 2.5 2.5v.04c.742.429 1.25 1.25 1.25 2.148 0 .351-.078.703-.195.976.468.469.82 1.133.82 1.836 0 .273-.04.508-.117.742.43.469.742 1.094.742 1.758 0 1.406-1.133 2.5-2.5 2.5h-3.984c.234.547.43 1.055.586 1.602l.195.664c.312 1.172-.39 2.343-1.563 2.695-1.172.312-2.343-.39-2.695-1.563l-.156-.625a5.35 5.35 0 0 0-2.266-3.085l-.117-.079.313-.507-.313.507a4.5 4.5 0 0 1-1.172-1.093.665.665 0 0 1 .156-.899.624.624 0 0 1 .86.156c.234.313.508.586.82.782l.117.078a6.55 6.55 0 0 1 2.813 3.789zm-10-3.086h2.5V11.5h-2.5zm-1.25 0V11.5c0-.664.547-1.25 1.25-1.25h2.5c.664 0 1.25.586 1.25 1.25v8.75c0 .703-.586 1.25-1.25 1.25h-2.5c-.703 0-1.25-.547-1.25-1.25' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneThumbsDownRegularIcon);
export default ForwardRef;
