import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPresentationScreenLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={23}
    height={30}
    viewBox='0 0 23 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.875 5.5h21.25c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H.875a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625M1.5 8h1.25v8.75c0 .703.547 1.25 1.25 1.25h15c.664 0 1.25-.547 1.25-1.25V8h1.25v8.75c0 1.406-1.133 2.5-2.5 2.5h-6.875v1.64l3.555 3.555a.66.66 0 0 1 0 .899.66.66 0 0 1-.899 0l-3.281-3.32-3.32 3.32a.66.66 0 0 1-.899 0 .66.66 0 0 1 0-.899l3.594-3.554V19.25H4a2.47 2.47 0 0 1-2.5-2.5z' />
    </g>
    <defs>
      <clipPath id='5eb54548f574f2f488afe3366dfaba15__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPresentationScreenLgRegularIcon);
export default ForwardRef;
