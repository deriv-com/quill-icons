import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPresentationScreenXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={27}
    height={36}
    viewBox='0 0 27 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.125 6h24.75C26.485 6 27 6.516 27 7.125a1.11 1.11 0 0 1-1.125 1.125H1.125C.469 8.25 0 7.781 0 7.125 0 6.515.469 6 1.125 6M1.5 9.75h2.25v10.125c0 .234.14.375.375.375h18.75a.37.37 0 0 0 .375-.375V9.75h2.25v10.125c0 1.453-1.219 2.625-2.625 2.625h-8.297v2.203L18 28.125a1.027 1.027 0 0 1 0 1.547c-.422.469-1.125.469-1.594 0l-2.953-2.953-2.953 2.953a1.027 1.027 0 0 1-1.547 0 1.027 1.027 0 0 1 0-1.547l3.422-3.422V22.5h-8.25A2.62 2.62 0 0 1 1.5 19.875z' />
    </g>
    <defs>
      <clipPath id='c6f66c4509324eaa4fc442349f9de86c__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPresentationScreenXlBoldIcon);
export default ForwardRef;
