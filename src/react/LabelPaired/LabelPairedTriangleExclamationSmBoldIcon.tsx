import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTriangleExclamationSmBoldIcon = (
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
      <path d='m6.781 6.074-5.414 8.887c-.054.082-.054.137-.054.219 0 .218.164.383.382.383h10.582c.22 0 .41-.165.41-.383 0-.082-.027-.137-.082-.22L7.192 6.075A.21.21 0 0 0 7 5.938c-.11 0-.164.054-.219.136m-1.12-.683A1.57 1.57 0 0 1 7 4.625c.52 0 1.04.3 1.313.766l5.414 8.886c.164.274.273.575.273.903 0 .93-.766 1.695-1.723 1.695H1.695C.765 16.875 0 16.109 0 15.18q0-.493.246-.903zm2.214 8.422c0 .492-.41.874-.875.874a.864.864 0 0 1-.875-.874c0-.465.383-.876.875-.876a.9.9 0 0 1 .875.876M7.656 8.78v2.625c0 .383-.3.656-.656.656a.63.63 0 0 1-.656-.656V8.781c0-.355.273-.656.656-.656.355 0 .656.3.656.656' />
    </g>
    <defs>
      <clipPath id='9387ecdef40315755ebd102f18d7a2ec__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTriangleExclamationSmBoldIcon);
export default ForwardRef;
