import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFiveSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={22}
    viewBox='0 0 9 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1 5.172a.675.675 0 0 1 .656-.547h5.688c.355 0 .656.3.656.656 0 .383-.3.657-.656.657h-5.14l-.657 3.718h3.719c1.968 0 3.609 1.64 3.609 3.61 0 1.996-1.64 3.609-3.61 3.609H2.642c-.985 0-1.914-.547-2.352-1.45l-.11-.218a.647.647 0 0 1 .301-.875.647.647 0 0 1 .875.3l.11.22c.219.437.683.71 1.176.71h2.625a2.293 2.293 0 0 0 2.297-2.296 2.31 2.31 0 0 0-2.297-2.297H.78a.7.7 0 0 1-.52-.219.8.8 0 0 1-.136-.547z' />
    </g>
    <defs>
      <clipPath id='8a2d23f00c6bc8f3667838e6872a2328__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFiveSmBoldIcon);
export default ForwardRef;
