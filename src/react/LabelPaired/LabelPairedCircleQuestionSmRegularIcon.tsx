import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleQuestionSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M13.125 10.75a6.1 6.1 0 0 0-3.062-5.277c-1.915-1.121-4.239-1.121-6.126 0A6.04 6.04 0 0 0 .876 10.75c0 2.215 1.148 4.21 3.063 5.305 1.886 1.12 4.21 1.12 6.124 0a6.11 6.11 0 0 0 3.063-5.305M0 10.75a6.95 6.95 0 0 1 3.5-6.043c2.16-1.258 4.813-1.258 7 0C12.66 5.965 14 8.262 14 10.75a7.02 7.02 0 0 1-3.5 6.07c-2.187 1.258-4.84 1.258-7 0A6.96 6.96 0 0 1 0 10.75m4.594-2.352c.191-.656.793-1.148 1.476-1.148h1.586c.957 0 1.75.793 1.75 1.777 0 .657-.383 1.258-.957 1.559l-1.011.52v.519a.45.45 0 0 1-.438.438.43.43 0 0 1-.437-.438v-.793c0-.164.082-.328.218-.383l1.258-.656a.84.84 0 0 0 .492-.766c0-.492-.41-.902-.875-.902H6.07c-.273 0-.547.219-.629.492v.028c-.054.218-.3.382-.52.3a.43.43 0 0 1-.327-.52zm1.75 4.977c0-.355.273-.656.656-.656.355 0 .656.3.656.656 0 .383-.3.656-.656.656a.63.63 0 0 1-.656-.656' />
    </g>
    <defs>
      <clipPath id='a679e99bf492346f9f81b958ec10e03b__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleQuestionSmRegularIcon);
export default ForwardRef;
