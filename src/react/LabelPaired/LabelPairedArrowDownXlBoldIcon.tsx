import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownXlBoldIcon = (
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
      <path d='m8.156 28.172-7.875-8.25c-.422-.469-.422-1.172.047-1.594s1.172-.422 1.594.047l5.953 6.234V8.625c0-.61.469-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125v15.984l5.906-6.234a1.12 1.12 0 0 1 1.594-.047c.469.422.469 1.125.047 1.594l-7.875 8.25A1.1 1.1 0 0 1 9 28.5c-.328 0-.61-.094-.844-.328' />
    </g>
    <defs>
      <clipPath id='08e4695cfd7b2ca7f84883a5586ff7ee__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownXlBoldIcon);
export default ForwardRef;
