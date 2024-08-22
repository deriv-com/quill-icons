import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBackwardStepSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={22}
    viewBox='0 0 9 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.313 6.156v2.899l4.812-3.39c.137-.11.3-.165.465-.165.465 0 .848.383.848.848v8.832c0 .465-.383.82-.82.82-.192 0-.356-.027-.493-.137l-4.812-3.39v2.87c0 .384-.301.657-.657.657A.63.63 0 0 1 1 15.344V6.157c0-.356.273-.657.656-.657.356 0 .657.3.657.656m0 4.73 4.812 3.364V7.277l-4.812 3.364z' />
    </g>
    <defs>
      <clipPath id='fcae6d9999a9a37d6ff7695bdcce36b6__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardStepSmBoldIcon);
export default ForwardRef;
