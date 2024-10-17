import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleTwoCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6 4.25a5.24 5.24 0 0 0-4.547 2.625 5.14 5.14 0 0 0 0 5.25A5.19 5.19 0 0 0 6 14.75a5.18 5.18 0 0 0 4.523-2.625 5.14 5.14 0 0 0 0-5.25A5.23 5.23 0 0 0 6 4.25M6 15.5a5.97 5.97 0 0 1-5.203-3 5.97 5.97 0 0 1 0-6A6.01 6.01 0 0 1 6 3.5a6 6 0 0 1 5.18 3 5.97 5.97 0 0 1 0 6 5.96 5.96 0 0 1-5.18 3m-.914-7.898-.352.304a.35.35 0 0 1-.515-.023.35.35 0 0 1 .023-.516l.328-.304c.352-.352.844-.54 1.36-.54a1.956 1.956 0 0 1 1.36 3.352l-1.9 1.875h2.485c.188 0 .375.188.375.375 0 .21-.187.375-.375.375H4.5c-.164 0-.305-.094-.352-.21-.07-.142-.023-.306.07-.423L6.75 9.336c.234-.234.375-.54.375-.867A1.2 1.2 0 0 0 5.93 7.273c-.328 0-.633.118-.844.329' />
    </g>
    <defs>
      <clipPath id='bc29126aabc54d0aa2db023f27f2ed79__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleTwoCaptionRegularIcon);
export default ForwardRef;
