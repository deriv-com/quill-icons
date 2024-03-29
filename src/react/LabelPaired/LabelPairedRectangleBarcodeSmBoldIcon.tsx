import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRectangleBarcodeSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={22}
    viewBox='0 0 16 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.875 5.938a.45.45 0 0 0-.437.437v8.75c0 .246.19.438.437.438h12.25a.45.45 0 0 0 .438-.438v-8.75a.47.47 0 0 0-.438-.437zm-1.75.437c0-.957.766-1.75 1.75-1.75h12.25c.957 0 1.75.793 1.75 1.75v8.75c0 .984-.793 1.75-1.75 1.75H1.875c-.984 0-1.75-.766-1.75-1.75zm3.281.875c.356 0 .656.3.656.656v5.688c0 .383-.3.656-.656.656a.63.63 0 0 1-.656-.656V7.906c0-.355.273-.656.656-.656m1.969 0a.47.47 0 0 1 .438.438v6.125a.45.45 0 0 1-.438.437.43.43 0 0 1-.437-.437V7.687a.45.45 0 0 1 .437-.437m1.313.656c0-.355.273-.656.656-.656.355 0 .656.3.656.656v5.688c0 .383-.3.656-.656.656a.63.63 0 0 1-.657-.656zm3.718-.656c.356 0 .656.3.656.656v5.688c0 .383-.3.656-.656.656a.63.63 0 0 1-.656-.656V7.906c0-.355.273-.656.656-.656m1.969.438a.45.45 0 0 1 .438-.438.47.47 0 0 1 .437.438v6.125a.45.45 0 0 1-.437.437.43.43 0 0 1-.438-.437z' />
    </g>
    <defs>
      <clipPath id='35457b58833d20bdd641cc0d872eb63a__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRectangleBarcodeSmBoldIcon);
export default ForwardRef;
