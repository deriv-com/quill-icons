import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEyeLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={23}
    height={30}
    viewBox='0 0 23 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M11.5 8.625c-2.578 0-4.648 1.172-6.25 2.656A14 14 0 0 0 2.164 15.5c.547 1.172 1.563 2.852 3.086 4.258 1.602 1.484 3.672 2.617 6.25 2.617 2.54 0 4.61-1.133 6.21-2.617 1.524-1.406 2.58-3.086 3.087-4.258-.508-1.172-1.563-2.812-3.047-4.219-1.64-1.484-3.71-2.656-6.25-2.656m-7.54 1.29C5.798 8.194 8.337 6.75 11.5 6.75c3.125 0 5.664 1.445 7.5 3.164s3.047 3.711 3.633 5.117a1.4 1.4 0 0 1 0 .977c-.586 1.367-1.797 3.398-3.633 5.117s-4.375 3.125-7.5 3.125c-3.164 0-5.703-1.406-7.54-3.125-1.835-1.719-3.046-3.75-3.632-5.117a1.4 1.4 0 0 1 0-.977c.586-1.406 1.797-3.437 3.633-5.117m7.54 8.71a3.11 3.11 0 0 0 3.125-3.125 3.134 3.134 0 0 0-3.125-3.125h-.078c.039.234.078.43.078.625 0 1.406-1.133 2.5-2.5 2.5-.234 0-.43 0-.625-.078v.078c0 1.758 1.367 3.125 3.125 3.125m0-8.125c1.758 0 3.398.977 4.297 2.5.898 1.563.898 3.477 0 5a4.96 4.96 0 0 1-4.297 2.5A4.97 4.97 0 0 1 7.164 18c-.898-1.523-.898-3.437 0-5 .899-1.523 2.54-2.5 4.336-2.5' />
    </g>
    <defs>
      <clipPath id='546f9493a6ff31fa7aa6f3dc928c0771__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEyeLgBoldIcon);
export default ForwardRef;
