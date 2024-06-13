import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedExclamationSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={2}
    height={22}
    viewBox='0 0 2 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.438 5.063v8.312a.45.45 0 0 1-.438.438.43.43 0 0 1-.437-.438V5.063A.45.45 0 0 1 1 4.625a.47.47 0 0 1 .438.438M1 16.656A.63.63 0 0 1 .344 16c0-.355.273-.656.656-.656.355 0 .656.3.656.656 0 .383-.3.656-.656.656' />
    </g>
    <defs>
      <clipPath id='60ba1e6b942bd324db69960d8712914c__a'>
        <path d='M0 0h2v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedExclamationSmRegularIcon);
export default ForwardRef;
