import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPresentationScreenCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={18}
    viewBox='0 0 14 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.625 3.5h12.75q.352.023.375.375-.023.352-.375.375H.625Q.273 4.227.25 3.875q.023-.352.375-.375M1 5h.75v5.25q0 .328.21.54.212.21.54.21h9a.73.73 0 0 0 .54-.21.73.73 0 0 0 .21-.54V5H13v5.25a1.52 1.52 0 0 1-.445 1.055q-.422.421-1.055.445H7.375v.96l2.133 2.157q.234.258 0 .516-.258.234-.516 0L7 13.414l-1.992 1.969q-.258.234-.516 0-.234-.258 0-.516l2.133-2.156v-.961H2.5a1.52 1.52 0 0 1-1.055-.445A1.52 1.52 0 0 1 1 10.25z' />
    </g>
    <defs>
      <clipPath id='0f2b6cf87e1e8b853842674af8a71b44__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPresentationScreenCaptionRegularIcon);
export default ForwardRef;
