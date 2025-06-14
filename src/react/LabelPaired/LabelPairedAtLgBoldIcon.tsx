import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedAtLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10 7.375c-4.492 0-8.125 3.672-8.125 8.125A8.12 8.12 0 0 0 10 23.625a.95.95 0 0 1 .938.938c0 .546-.43.937-.938.937a9.97 9.97 0 0 1-10-10c0-5.508 4.453-10 10-10 5.508 0 10 4.492 10 10v1.094c0 1.992-1.64 3.593-3.594 3.593a3.57 3.57 0 0 1-2.968-1.523A4.63 4.63 0 0 1 10 20.187 4.65 4.65 0 0 1 5.313 15.5 4.676 4.676 0 0 1 10 10.813c1.094 0 2.148.43 2.93 1.054.195-.234.468-.43.82-.43a.95.95 0 0 1 .938.938v4.219c0 .976.742 1.718 1.718 1.718.938 0 1.719-.742 1.719-1.718V15.5c0-4.453-3.672-8.125-8.125-8.125m2.813 8.125c0-.977-.547-1.914-1.407-2.422-.898-.508-1.953-.508-2.812 0A2.77 2.77 0 0 0 7.188 15.5c0 1.016.507 1.953 1.406 2.46.86.509 1.914.509 2.812 0a2.87 2.87 0 0 0 1.406-2.46' />
    </g>
    <defs>
      <clipPath id='566ecebe2bfd525bc36095e836421080__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedAtLgBoldIcon);
export default ForwardRef;
