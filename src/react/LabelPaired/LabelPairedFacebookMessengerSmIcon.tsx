import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFacebookMessengerSmIcon = (
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
      <path d='M7 3.969c3.828 0 6.781 2.816 6.781 6.59 0 4.785-4.566 7.464-8.75 6.316-.246-.055-.273 0-1.695.629-.191.055-.383.055-.52-.055-.164-.082-.246-.246-.246-.437-.054-1.258 0-1.367-.218-1.586C1.012 14.25.219 12.527.219 10.559c0-3.774 2.953-6.59 6.781-6.59m4.074 5.086c.192-.301-.164-.657-.465-.438L8.477 10.23c-.165.11-.356.11-.493 0L6.398 9.055c-.246-.164-.52-.246-.793-.192a.96.96 0 0 0-.683.465l-1.996 3.145c-.192.3.164.656.465.437l2.132-1.613c.165-.11.356-.11.493 0l1.586 1.176c.246.164.52.246.82.191a.96.96 0 0 0 .656-.465z' />
    </g>
    <defs>
      <clipPath id='b8f8c8e510bc80c91bafcec8bcf67bd8__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFacebookMessengerSmIcon);
export default ForwardRef;
