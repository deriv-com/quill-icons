import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileArrowDownXlBoldIcon = (
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
      <path d='M2.25 27c0 .422.328.75.75.75h12c.375 0 .75-.328.75-.75V13.5H12a1.48 1.48 0 0 1-1.5-1.5V8.25H3c-.422 0-.75.375-.75.75zM3 6h7.734c.797 0 1.547.328 2.11.89l4.265 4.266c.563.563.891 1.313.891 2.11V27c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3V9c0-1.64 1.313-3 3-3m7.125 10.875v4.828l1.453-1.453c.422-.469 1.125-.469 1.594 0a1.103 1.103 0 0 1 0 1.547l-3.375 3.375c-.469.469-1.172.469-1.594 0l-3.375-3.375a1.027 1.027 0 0 1 0-1.547c.422-.469 1.125-.469 1.594 0l1.453 1.453v-4.828c0-.61.469-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125' />
    </g>
    <defs>
      <clipPath id='c0d443a5279af78cd4d76e58ccf6eba7__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileArrowDownXlBoldIcon);
export default ForwardRef;
