import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSterlingSignMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={10}
    height={24}
    viewBox='0 0 10 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.5 8.75V12h5c.25 0 .5.25.5.5 0 .281-.25.5-.5.5H2.469a12.5 12.5 0 0 1-1.156 5H9.5c.25 0 .5.25.5.5 0 .281-.25.5-.5.5h-9a.55.55 0 0 1-.437-.219.48.48 0 0 1 0-.5l.03-.062A11.2 11.2 0 0 0 1.47 13H.5a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5h1V8.75A3.74 3.74 0 0 1 5.25 5h.219c.406 0 .781.094 1.187.219l2.5.812c.25.094.375.375.313.657-.094.25-.375.375-.656.312l-2.5-.844A2.5 2.5 0 0 0 5.469 6H5.25A2.754 2.754 0 0 0 2.5 8.75' />
    </g>
    <defs>
      <clipPath id='bc95e20a832c9218a4907c40da43a8b8__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSterlingSignMdRegularIcon);
export default ForwardRef;
