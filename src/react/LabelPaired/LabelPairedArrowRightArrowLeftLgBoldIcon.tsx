import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRightArrowLeftLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m4.273 24.914-3.75-3.75c-.39-.352-.39-.937 0-1.328l3.75-3.711a.856.856 0 0 1 1.29 0c.39.352.39.938 0 1.29l-2.149 2.148h13.399a.95.95 0 0 1 .937.937c0 .547-.43.938-.937.938l-13.399.039 2.149 2.148c.39.352.39.938 0 1.29a.856.856 0 0 1-1.29 0m13.204-13.75-3.75 3.75c-.391.39-.977.39-1.329 0-.39-.351-.39-.937 0-1.328l2.149-2.149H1.187c-.546 0-.937-.39-.937-.937 0-.508.39-.937.938-.937h13.359l-2.149-2.149c-.39-.351-.39-.937 0-1.328.352-.352.938-.352 1.329 0l3.75 3.789a.92.92 0 0 1 0 1.29' />
    </g>
    <defs>
      <clipPath id='9387a5e3ef94504ff45ddbadf08ff529__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightArrowLeftLgBoldIcon);
export default ForwardRef;
