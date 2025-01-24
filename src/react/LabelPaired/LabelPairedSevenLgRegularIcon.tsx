import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSevenLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={30}
    viewBox='0 0 13 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.25 7.375c0-.312.273-.625.625-.625h11.25c.195 0 .43.156.547.352a.7.7 0 0 1-.04.625l-10 16.25a.62.62 0 0 1-.859.195c-.273-.195-.39-.547-.195-.86L10.992 8H.875a.617.617 0 0 1-.625-.625' />
    </g>
    <defs>
      <clipPath id='08c0ee6bd70f2636f53a79b39fc41e61__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSevenLgRegularIcon);
export default ForwardRef;
