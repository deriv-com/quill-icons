import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRightToLineXlBoldIcon = (
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
      <path d='M21 10.125v15.75A1.11 1.11 0 0 1 19.875 27c-.656 0-1.125-.469-1.125-1.125v-15.75c0-.61.469-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125m-6.375 8.719-6.375 6a1.16 1.16 0 0 1-1.594-.047c-.422-.469-.422-1.172.047-1.594l4.313-4.078H1.125C.469 19.125 0 18.656 0 18c0-.61.469-1.125 1.125-1.125h9.89l-4.312-4.031c-.469-.422-.469-1.125-.047-1.594s1.125-.469 1.594-.047l6.375 6c.234.235.375.516.375.797 0 .328-.14.61-.375.844' />
    </g>
    <defs>
      <clipPath id='01f961955555adad17b8eaa8e6c410a9__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightToLineXlBoldIcon);
export default ForwardRef;
