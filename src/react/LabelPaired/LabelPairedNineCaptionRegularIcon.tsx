import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedNineCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={18}
    viewBox='0 0 8 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1 8c0 1.664 1.336 3 3 3a3.003 3.003 0 0 0 3-2.906V8c0-1.64-1.36-3-3-3-1.664 0-3 1.36-3 3m3.773 3.68q-.386.07-.773.07A3.73 3.73 0 0 1 .25 8 3.746 3.746 0 0 1 4 4.25 3.76 3.76 0 0 1 7.75 8c0 .047 0 .094-.023.14a3.68 3.68 0 0 1-.961 2.415l-3.61 4.078c-.14.164-.375.164-.539.023a.35.35 0 0 1-.023-.515z' />
    </g>
    <defs>
      <clipPath id='ca3ac54df57669ce45f475355056ed05__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedNineCaptionRegularIcon);
export default ForwardRef;
