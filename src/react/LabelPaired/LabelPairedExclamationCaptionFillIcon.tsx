import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedExclamationCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={2}
    height={18}
    viewBox='0 0 2 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.75 5v6c0 .422-.352.75-.75.75A.74.74 0 0 1 .25 11V5c0-.398.328-.75.75-.75.398 0 .75.352.75.75M1 14.75c-.352 0-.656-.164-.82-.469a.95.95 0 0 1 0-.937.95.95 0 0 1 .82-.469c.328 0 .633.188.797.469a.95.95 0 0 1 0 .937.89.89 0 0 1-.797.469' />
    </g>
    <defs>
      <clipPath id='b35f7beca75a69294278ad2a1680c812__a'>
        <path d='M0 0h2v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedExclamationCaptionFillIcon);
export default ForwardRef;
