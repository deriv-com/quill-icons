import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPersonChalkboardXlFillIcon = (
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
      <path d='M9 10.5c-.844 0-1.547-.422-1.969-1.125-.422-.656-.422-1.547 0-2.25C7.453 6.469 8.156 6 9 6c.797 0 1.5.469 1.922 1.125.422.703.422 1.594 0 2.25C10.5 10.078 9.797 10.5 9 10.5m-.375 18c0 .844-.703 1.5-1.5 1.5a1.48 1.48 0 0 1-1.5-1.5V18.047l-1.36 2.25a1.517 1.517 0 0 1-2.062.515 1.517 1.517 0 0 1-.515-2.062l2.718-4.547C5.25 12.843 6.703 12 8.296 12H15V8.25A2.25 2.25 0 0 1 17.25 6h10.5C28.969 6 30 7.031 30 8.25v10.5A2.25 2.25 0 0 1 27.75 21h-10.5A2.22 2.22 0 0 1 15 18.75V16.5h3V18h9V9h-9v3h.75c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5h-6.375v13.5c0 .844-.703 1.5-1.5 1.5a1.48 1.48 0 0 1-1.5-1.5v-6h-.75z' />
    </g>
    <defs>
      <clipPath id='3ddba1697b75ad0e478707457183aae2__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPersonChalkboardXlFillIcon);
export default ForwardRef;
