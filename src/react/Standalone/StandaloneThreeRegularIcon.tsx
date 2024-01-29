import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneThreeRegularIcon = (
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
    <path d='M9.75 8.375q.039-.585.625-.625H21q.43 0 .586.39a.7.7 0 0 1-.156.704l-6.953 6.406h2.773q2.109.04 3.555 1.445 1.406 1.446 1.445 3.555-.04 2.109-1.445 3.555-1.446 1.406-3.555 1.445h-4.023a3.7 3.7 0 0 1-1.954-.547 3.53 3.53 0 0 1-1.367-1.523l-.078-.157q-.234-.547.274-.82.507-.234.82.274l.078.156q.742 1.328 2.227 1.367h4.023q1.602-.038 2.656-1.094Q20.961 21.852 21 20.25q-.038-1.602-1.094-2.656-1.054-1.055-2.656-1.094h-4.375q-.43 0-.586-.39a.7.7 0 0 1 .156-.704L19.398 9h-9.023q-.585-.039-.625-.625' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneThreeRegularIcon);
export default ForwardRef;
