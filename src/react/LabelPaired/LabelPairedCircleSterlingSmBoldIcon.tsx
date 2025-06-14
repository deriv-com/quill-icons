import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleSterlingSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12.688 10.75c0-2.023-1.094-3.883-2.844-4.922a5.71 5.71 0 0 0-5.688 0 5.68 5.68 0 0 0-2.843 4.922c0 2.05 1.066 3.91 2.843 4.95a5.71 5.71 0 0 0 5.688 0c1.75-1.04 2.844-2.9 2.844-4.95M0 10.75a6.95 6.95 0 0 1 3.5-6.043c2.16-1.258 4.813-1.258 7 0C12.66 5.965 14 8.262 14 10.75a7.02 7.02 0 0 1-3.5 6.07c-2.187 1.258-4.84 1.258-7 0A6.96 6.96 0 0 1 0 10.75m7.137-2.625c-.465 0-.82.383-.82.848v.902h1.12a.47.47 0 0 1 .438.438.45.45 0 0 1-.437.437H6.316v.273q0 .78-.246 1.477H8.97c.355 0 .656.3.656.656 0 .383-.3.656-.656.656H5.03c-.246 0-.465-.109-.574-.3a.7.7 0 0 1-.027-.657l.273-.492c.219-.41.3-.875.3-1.312v-.301h-.19a.43.43 0 0 1-.438-.437.45.45 0 0 1 .438-.438h.19v-.902c0-1.176.958-2.16 2.134-2.16.273 0 .547.054.793.164l.847.328c.328.136.493.52.356.847a.645.645 0 0 1-.848.383l-.848-.328a.55.55 0 0 0-.3-.082' />
    </g>
    <defs>
      <clipPath id='6db459c57da3575e32b57c7b47aa8159__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleSterlingSmBoldIcon);
export default ForwardRef;
