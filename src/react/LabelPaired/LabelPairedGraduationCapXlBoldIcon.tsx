import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGraduationCapXlBoldIcon = (
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
      <path d='M15 9.75c-.14 0-.234.047-.375.094L4.406 13.5l2.11.797c.234-.14.468-.235.703-.328l7.5-2.813a.765.765 0 0 1 .984.469c.14.375-.047.797-.469.938l-6.609 2.484 6 2.156c.14.047.234.047.375.047.094 0 .234 0 .328-.047L25.547 13.5 15.328 9.844A.9.9 0 0 0 15 9.75M.703 14.578C.281 14.438 0 14.016 0 13.5c0-.469.281-.89.703-1.031l13.172-4.735c.328-.14.703-.234 1.125-.234.375 0 .75.094 1.078.234L29.25 12.47c.422.14.75.562.75 1.031 0 .516-.328.938-.75 1.078l-13.172 4.735a2.8 2.8 0 0 1-1.078.234c-.422 0-.797-.094-1.125-.235l-7.969-2.859c-1.265 1.125-2.062 2.672-2.156 4.406.281.657.469 1.313.61 1.97.28 1.265.515 3.093.093 5.108-.047.188-.14.375-.328.47-.187.093-.375.14-.562.093l-3-.75A.73.73 0 0 1 0 27.281c-.047-.234 0-.515.14-.703.376-.562.75-1.172 1.032-1.781C1.734 23.719 2.25 22.359 2.25 21v-.047c.047-1.922.844-3.703 2.11-5.062zm22.547 3.75.75 6.797c0 1.688-4.031 3.375-9 3.375s-9-1.687-9-3.375l.703-6.797 2.156.797-.562 5.625c.187.188.562.375 1.125.61 1.36.515 3.328.89 5.578.89s4.219-.375 5.531-.89c.563-.235.938-.422 1.125-.61l-.562-5.625zm-1.36 6.235v.046zm-13.827 0v.046z' />
    </g>
    <defs>
      <clipPath id='f36ad1393864d904d774d57293e65cb2__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGraduationCapXlBoldIcon);
export default ForwardRef;
