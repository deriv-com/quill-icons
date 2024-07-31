import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRightXlBoldIcon = (
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
      <path d='m20.625 18.844-8.25 7.875c-.469.422-1.172.422-1.594-.047s-.422-1.172.047-1.594l6.235-5.953H1.124C.469 19.125 0 18.656 0 18c0-.61.469-1.125 1.125-1.125h15.938l-6.235-5.906a1.12 1.12 0 0 1-.047-1.594 1.12 1.12 0 0 1 1.594-.047l8.25 7.875c.234.235.375.516.375.797 0 .328-.14.61-.375.844' />
    </g>
    <defs>
      <clipPath id='0ed01cea0490fbd902dcbd6a724b4792__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightXlBoldIcon);
export default ForwardRef;
