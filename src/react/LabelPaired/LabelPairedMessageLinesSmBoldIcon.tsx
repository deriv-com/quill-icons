import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMessageLinesSmBoldIcon = (
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
      <path d='M5.688 15.125v.438l1.968-1.477c.219-.164.492-.274.793-.274h3.801a.45.45 0 0 0 .438-.437V5.5a.47.47 0 0 0-.438-.437H1.75a.45.45 0 0 0-.437.437v7.875c0 .246.19.438.437.438h2.625c.71 0 1.313.601 1.313 1.312M5.66 17.23l-.137.082-.464.356c-.137.11-.301.11-.465.055a.45.45 0 0 1-.219-.41v-2.188H1.75c-.984 0-1.75-.766-1.75-1.75V5.5c0-.957.766-1.75 1.75-1.75h10.5c.957 0 1.75.793 1.75 1.75v7.875c0 .984-.793 1.75-1.75 1.75h-3.8l-2.762 2.078zM4.156 7.688h5.688c.355 0 .656.3.656.656 0 .383-.3.656-.656.656H4.156a.63.63 0 0 1-.656-.656c0-.356.273-.656.656-.656m0 2.625H7.22c.355 0 .656.3.656.656 0 .383-.3.656-.656.656H4.156a.63.63 0 0 1-.656-.656c0-.356.273-.656.656-.656' />
    </g>
    <defs>
      <clipPath id='6b9fc5eb7041f39395b5d0265433dcb3__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMessageLinesSmBoldIcon);
export default ForwardRef;
