import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBellOnSmFillIcon = (
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
      <path d='M9 3.75a.9.9 0 0 1 .875.875v.547c1.996.383 3.5 2.16 3.5 4.266v.519c0 1.285.465 2.543 1.313 3.5l.19.219c.247.273.302.629.165.957a.88.88 0 0 1-.793.492H3.75c-.355 0-.684-.191-.82-.492a.89.89 0 0 1 .164-.957l.191-.219a5.32 5.32 0 0 0 1.34-3.5v-.52c0-2.105 1.504-3.882 3.5-4.265v-.547c0-.465.383-.875.875-.875m1.23 13.508A1.71 1.71 0 0 1 9 17.75c-.465 0-.93-.164-1.258-.492S7.25 16.465 7.25 16h3.5c0 .465-.191.93-.52 1.258M.25 9.218c0-.355.273-.655.656-.655h2.188c.355 0 .656.3.656.656 0 .383-.3.656-.656.656H.906a.63.63 0 0 1-.656-.656m14.656-.655h2.188c.355 0 .656.3.656.656 0 .383-.3.656-.656.656h-2.188a.63.63 0 0 1-.656-.656c0-.356.273-.656.656-.656m1.668-4.211a.647.647 0 0 1-.3.875l-1.75.875a.647.647 0 0 1-.876-.301.647.647 0 0 1 .301-.875l1.75-.875a.647.647 0 0 1 .875.3M1.7 5.227a.647.647 0 0 1-.3-.875.647.647 0 0 1 .874-.301l1.75.875a.647.647 0 0 1 .301.875.647.647 0 0 1-.875.3z' />
    </g>
    <defs>
      <clipPath id='6c900afcbc62dd26ace2c650657ff207__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBellOnSmFillIcon);
export default ForwardRef;
