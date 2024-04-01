import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedXmarkXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={36}
    viewBox='0 0 18 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m16.172 12.422-5.625 5.625 5.578 5.578a1.027 1.027 0 0 1 0 1.547 1.027 1.027 0 0 1-1.547 0l-5.625-5.578-5.578 5.578a1.027 1.027 0 0 1-1.547 0c-.469-.422-.469-1.125 0-1.594L7.406 18l-5.578-5.578c-.469-.422-.469-1.125 0-1.594.422-.422 1.125-.422 1.594 0L9 16.453l5.578-5.578c.422-.469 1.125-.469 1.594 0a1.103 1.103 0 0 1 0 1.547' />
    </g>
    <defs>
      <clipPath id='ad78a7af5169980fdd36175382c74660__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedXmarkXlBoldIcon);
export default ForwardRef;
