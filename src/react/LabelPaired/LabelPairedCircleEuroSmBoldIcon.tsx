import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleEuroSmBoldIcon = (
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
      <path d='M12.688 10.75c0-2.023-1.094-3.883-2.844-4.922a5.71 5.71 0 0 0-5.688 0 5.68 5.68 0 0 0-2.843 4.922c0 2.05 1.066 3.91 2.843 4.95a5.71 5.71 0 0 0 5.688 0c1.75-1.04 2.844-2.9 2.844-4.95M0 10.75a6.95 6.95 0 0 1 3.5-6.043c2.16-1.258 4.813-1.258 7 0C12.66 5.965 14 8.262 14 10.75a7.02 7.02 0 0 1-3.5 6.07c-2.187 1.258-4.84 1.258-7 0A6.96 6.96 0 0 1 0 10.75m3.5.438h.438c-.028-.137-.028-.274-.028-.41 0-.137 0-.301.027-.466H3.5a.43.43 0 0 1-.437-.437.45.45 0 0 1 .437-.437h.656C4.676 8.18 5.961 7.25 7.41 7.25H8.56c.355 0 .656.3.656.656 0 .383-.3.657-.656.657H7.41c-.71 0-1.34.355-1.75.874h2.215a.47.47 0 0 1 .438.438.45.45 0 0 1-.438.438H5.25c-.027.164-.027.3-.027.464 0 .137 0 .301.027.41h2.625a.47.47 0 0 1 .438.438.45.45 0 0 1-.438.438H5.633c.41.574 1.039.93 1.777.93H8.56c.355 0 .656.3.656.655s-.3.657-.656.657H7.41a3.48 3.48 0 0 1-3.254-2.242H3.5a.43.43 0 0 1-.437-.438.45.45 0 0 1 .437-.437' />
    </g>
    <defs>
      <clipPath id='b50b2117da5aa632e86cb744ec12fba4__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleEuroSmBoldIcon);
export default ForwardRef;
