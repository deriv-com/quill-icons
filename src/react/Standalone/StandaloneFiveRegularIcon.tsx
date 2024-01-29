import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneFiveRegularIcon = (
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
    <path d='M11.664 8.219q.117-.43.586-.469h8.125q.585.039.625.625-.039.585-.625.625h-7.617l-1.563 6.25h6.055q2.109.04 3.555 1.445 1.406 1.446 1.445 3.555-.04 2.109-1.445 3.555-1.446 1.406-3.555 1.445h-4.18q-1.015 0-1.836-.508a3.3 3.3 0 0 1-1.25-1.406l-.156-.313q-.234-.507.274-.82.547-.234.82.274l.195.312q.625 1.172 1.953 1.211h4.18q1.602-.038 2.656-1.094Q20.961 21.852 21 20.25q-.038-1.602-1.094-2.656-1.054-1.055-2.656-1.094h-6.875a.63.63 0 0 1-.508-.234.78.78 0 0 1-.117-.547z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneFiveRegularIcon);
export default ForwardRef;
