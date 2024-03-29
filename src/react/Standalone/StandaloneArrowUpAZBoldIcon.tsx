import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneArrowUpAZBoldIcon = (
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
    <path d='M21 7.75c.352 0 .664.234.82.547l3.125 6.25a.925.925 0 0 1-.43 1.25c-.43.234-1.015.039-1.25-.43l-.507-1.055c-.078 0-.156.04-.195.04h-3.36l-.508 1.015a.925.925 0 0 1-1.25.43.925.925 0 0 1-.43-1.25l3.126-6.25A.96.96 0 0 1 21 7.75m-.86 4.688h1.68L21 10.797zm-9.804-4.415a.92.92 0 0 1 1.289 0l3.75 3.75c.39.391.39.977 0 1.329a.856.856 0 0 1-1.29 0l-2.148-2.149v13.36c0 .546-.43.937-.937.937-.547 0-.937-.39-.937-.937v-13.36l-2.149 2.149c-.39.39-.976.39-1.328 0a.856.856 0 0 1 0-1.29l3.75-3.75zM18.5 17.75h5c.352 0 .703.234.82.586a.84.84 0 0 1-.156.977l-3.594 4.062h2.93a.95.95 0 0 1 .938.938c0 .546-.43.937-.938.937h-5c-.39 0-.703-.195-.86-.547-.156-.312-.117-.703.157-1.015l3.594-4.063H18.5c-.547 0-.937-.39-.937-.937 0-.508.39-.938.937-.938' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowUpAZBoldIcon);
export default ForwardRef;
