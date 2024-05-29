import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBellOnSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={22}
    viewBox='0 0 18 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9 3.75a.9.9 0 0 1 .875.875v.547c1.996.383 3.5 2.16 3.5 4.266v.71c0 1.23.41 2.434 1.176 3.418l.41.493a.68.68 0 0 1 .082.71.64.64 0 0 1-.574.356H3.53a.65.65 0 0 1-.601-.355.68.68 0 0 1 .082-.711l.41-.493c.765-.984 1.203-2.187 1.203-3.418v-.71c0-2.106 1.504-3.883 3.5-4.266v-.547c0-.465.383-.875.875-.875m0 2.625a3.075 3.075 0 0 0-3.062 3.063v.71c0 1.313-.383 2.57-1.094 3.665h8.285a6.67 6.67 0 0 1-1.066-3.665v-.71c0-1.668-1.395-3.063-3.063-3.063M10.75 16c0 .465-.191.93-.52 1.258A1.71 1.71 0 0 1 9 17.75c-.465 0-.93-.164-1.258-.492S7.25 16.465 7.25 16h3.5M.25 9.219c0-.356.273-.656.656-.656h2.188c.355 0 .656.3.656.656 0 .383-.3.656-.656.656H.906a.63.63 0 0 1-.656-.656m14.656-.656h2.188c.355 0 .656.3.656.656 0 .383-.3.656-.656.656h-2.188a.63.63 0 0 1-.656-.656c0-.356.273-.656.656-.656m1.668-4.211a.647.647 0 0 1-.3.875l-1.75.875a.647.647 0 0 1-.876-.301.647.647 0 0 1 .301-.875l1.75-.875a.647.647 0 0 1 .875.3M1.7 5.227a.647.647 0 0 1-.3-.875.647.647 0 0 1 .874-.301l1.75.875a.647.647 0 0 1 .301.875.647.647 0 0 1-.875.3z' />
    </g>
    <defs>
      <clipPath id='0ce75478adaa7d701a7a2bd2fdc00045__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBellOnSmBoldIcon);
export default ForwardRef;
