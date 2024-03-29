import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneArrowDownAZBoldIcon = (
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
    <path d='M6.586 21.227c-.39-.352-.39-.938 0-1.329.351-.351.937-.351 1.328 0l2.149 2.188V8.688c0-.508.39-.938.937-.938a.95.95 0 0 1 .938.938v13.398l2.148-2.148a.856.856 0 0 1 1.289 0c.39.351.39.937 0 1.289l-3.75 3.75a.856.856 0 0 1-1.29 0zM18.5 17.75h5c.352 0 .703.234.82.586a.84.84 0 0 1-.156.977l-3.594 4.062h2.93a.95.95 0 0 1 .938.938c0 .546-.43.937-.938.937h-5c-.39 0-.742-.195-.86-.547a.84.84 0 0 1 .157-.976l3.594-4.102H18.5c-.547 0-.937-.39-.937-.937 0-.508.39-.938.937-.938m2.5-10c.352 0 .664.234.82.547l3.125 6.25a.925.925 0 0 1-.43 1.25.925.925 0 0 1-1.25-.43l-.546-1.055h-3.516l-.508 1.055a.925.925 0 0 1-1.25.43.925.925 0 0 1-.43-1.25l3.126-6.25A.96.96 0 0 1 21 7.75m-.86 4.688h1.68L21 10.797z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowDownAZBoldIcon);
export default ForwardRef;
