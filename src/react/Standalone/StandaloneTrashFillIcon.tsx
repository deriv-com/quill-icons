import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneTrashFillIcon = (
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
    <path d='M12.523 7.203c.196-.43.625-.703 1.094-.703h4.727c.468 0 .898.273 1.093.703l.313.547h3.75c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25h-15c-.703 0-1.25-.547-1.25-1.25 0-.664.547-1.25 1.25-1.25h3.75zM23.5 11.5l-.86 13.242c-.038 1.016-.859 1.758-1.874 1.758h-9.57c-1.016 0-1.837-.742-1.876-1.758L8.5 11.5z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneTrashFillIcon);
export default ForwardRef;
