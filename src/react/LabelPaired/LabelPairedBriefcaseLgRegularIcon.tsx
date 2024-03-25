import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBriefcaseLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6.25 7.375V9.25h7.5V7.375c0-.312-.312-.625-.625-.625h-6.25a.64.64 0 0 0-.625.625M5 9.25V7.375C5 6.359 5.82 5.5 6.875 5.5h6.25C14.141 5.5 15 6.36 15 7.375V9.25h2.5c1.367 0 2.5 1.133 2.5 2.5v10c0 1.406-1.133 2.5-2.5 2.5h-15a2.47 2.47 0 0 1-2.5-2.5v-10c0-1.367 1.094-2.5 2.5-2.5zm9.375 1.25H2.5c-.703 0-1.25.586-1.25 1.25v3.75h17.5v-3.75c0-.664-.586-1.25-1.25-1.25zm4.375 6.25h-5.625v1.875c0 .703-.586 1.25-1.25 1.25h-3.75c-.703 0-1.25-.547-1.25-1.25V16.75H1.25v5c0 .703.547 1.25 1.25 1.25h15c.664 0 1.25-.547 1.25-1.25zm-10.625 0v1.875h3.75V16.75z' />
    </g>
    <defs>
      <clipPath id='39845d30bff0c2c71c4e7edb374be87b__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBriefcaseLgRegularIcon);
export default ForwardRef;
