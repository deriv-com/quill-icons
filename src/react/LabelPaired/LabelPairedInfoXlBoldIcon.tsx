import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedInfoXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={36}
    viewBox='0 0 9 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.625 9.375c0-.656.328-1.266.938-1.594.562-.328 1.265-.328 1.874 0 .563.328.938.938.938 1.594a1.89 1.89 0 0 1-.937 1.64c-.61.329-1.313.329-1.875 0-.61-.328-.938-.937-.938-1.64m-1.875 6c0-.61.469-1.125 1.125-1.125H4.5c.61 0 1.125.516 1.125 1.125V27.75h2.25c.61 0 1.125.516 1.125 1.125A1.11 1.11 0 0 1 7.875 30h-6.75C.469 30 0 29.531 0 28.875c0-.61.469-1.125 1.125-1.125h2.25V16.5h-1.5c-.656 0-1.125-.469-1.125-1.125' />
    </g>
    <defs>
      <clipPath id='d6b4236be08de26a4e12ab66b284fb1d__a'>
        <path d='M0 0h9v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedInfoXlBoldIcon);
export default ForwardRef;
