import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCheckXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M20.672 10.828c.422.469.422 1.172 0 1.594L8.297 24.797c-.469.469-1.172.469-1.594 0L.328 18.422a1.027 1.027 0 0 1 0-1.547 1.026 1.026 0 0 1 1.547 0l5.578 5.578 11.625-11.625a1.103 1.103 0 0 1 1.547 0z' />
    </g>
    <defs>
      <clipPath id='6da6edca8f060615eaa2b529752dc09e__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCheckXlBoldIcon);
export default ForwardRef;
