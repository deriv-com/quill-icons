import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSixXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={36}
    viewBox='0 0 15 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M13.5 21c0-3.281-2.719-6-6-6s-5.953 2.625-6 5.86V21c0 3.328 2.672 6 6 6 3.281 0 6-2.672 6-6m-7.594-7.312c.516-.094 1.032-.188 1.594-.188 4.125 0 7.5 3.375 7.5 7.5 0 4.172-3.375 7.5-7.5 7.5A7.46 7.46 0 0 1 0 21v-.234a7.6 7.6 0 0 1 1.922-4.828L9.188 7.78c.234-.328.75-.328 1.03-.047.329.235.329.75.048 1.032z' />
    </g>
    <defs>
      <clipPath id='9ee913576d21a7d2f6e62e8ad0758abc__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSixXlRegularIcon);
export default ForwardRef;
