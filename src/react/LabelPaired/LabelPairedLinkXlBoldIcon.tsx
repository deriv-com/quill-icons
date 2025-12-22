import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLinkXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m27.188 18.563-5.297 5.296c-2.672 2.625-6.938 2.625-9.563 0-2.484-2.53-2.625-6.515-.328-9.187l.234-.281a1.12 1.12 0 0 1 1.594-.094 1.12 1.12 0 0 1 .094 1.594l-.188.234c-1.593 1.781-1.5 4.453.188 6.14 1.734 1.735 4.594 1.735 6.375 0l5.297-5.296a4.556 4.556 0 0 0 0-6.375c-1.688-1.64-4.36-1.735-6.14-.188l-.282.235a1.12 1.12 0 0 1-1.594-.094 1.12 1.12 0 0 1 .094-1.594l.281-.234c2.672-2.344 6.703-2.203 9.235.281 2.625 2.625 2.625 6.89 0 9.563M2.765 17.484l5.343-5.297a6.733 6.733 0 0 1 9.516 0c2.531 2.485 2.672 6.516.328 9.188l-.281.281c-.375.469-1.125.563-1.594.14a1.12 1.12 0 0 1-.094-1.593l.282-.281a4.497 4.497 0 0 0-.235-6.14 4.415 4.415 0 0 0-6.328 0L4.36 19.077c-1.734 1.735-1.734 4.594 0 6.375 1.688 1.64 4.36 1.735 6.141.188l.281-.235a1.12 1.12 0 0 1 1.594.094 1.12 1.12 0 0 1-.094 1.594l-.281.234c-2.672 2.344-6.703 2.203-9.234-.281-2.625-2.625-2.625-6.938 0-9.563' />
    </g>
    <defs>
      <clipPath id='5bb1cf47f8baee35e123debe19886646__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLinkXlBoldIcon);
export default ForwardRef;
