import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLoaderSmRegularIcon = (
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
      <path d='M7.438 4.188v2.625A.45.45 0 0 1 7 7.25a.43.43 0 0 1-.437-.437V4.188A.45.45 0 0 1 7 3.75a.47.47 0 0 1 .438.438m0 10.5v2.624A.45.45 0 0 1 7 17.75a.43.43 0 0 1-.437-.437v-2.625A.45.45 0 0 1 7 14.25a.47.47 0 0 1 .438.438M0 10.75a.45.45 0 0 1 .438-.437h2.625a.47.47 0 0 1 .437.437.45.45 0 0 1-.437.438H.438A.43.43 0 0 1 0 10.75m10.938-.437h2.624a.47.47 0 0 1 .438.437.45.45 0 0 1-.437.438h-2.626a.43.43 0 0 1-.437-.438.45.45 0 0 1 .438-.437M11.949 5.8c.164.191.164.465 0 .629l-1.86 1.86c-.19.163-.464.163-.628 0-.164-.165-.164-.438 0-.63l1.86-1.86c.163-.163.437-.163.628 0m-7.437 8.066L2.652 15.7a.387.387 0 0 1-.601 0 .387.387 0 0 1 0-.601l1.832-1.86c.191-.164.465-.164.629 0s.164.438 0 .63M2.05 5.801a.43.43 0 0 1 .601 0l1.86 1.86c.164.19.164.464 0 .628s-.438.164-.63 0L2.052 6.43c-.192-.163-.192-.437 0-.628m8.039 7.437 1.86 1.86a.43.43 0 0 1 0 .601c-.192.192-.466.192-.63 0l-1.86-1.832c-.163-.191-.163-.465 0-.629.165-.164.438-.164.63 0' />
    </g>
    <defs>
      <clipPath id='76437a0a987a441088dcd923bbfd8804__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLoaderSmRegularIcon);
export default ForwardRef;
