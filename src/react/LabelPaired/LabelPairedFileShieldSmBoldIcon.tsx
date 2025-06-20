import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileShieldSmBoldIcon = (
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
      <path d='M1.875 16.438h6.727c.3.41.656.793 1.093 1.12a1.7 1.7 0 0 1-.82.192h-7c-.984 0-1.75-.766-1.75-1.75V5.5c0-.957.766-1.75 1.75-1.75h4.512c.465 0 .902.191 1.23.52l2.488 2.488c.329.328.52.765.52 1.23V9.41l-1.312.547V8.125H7.124a.864.864 0 0 1-.875-.875V5.063H1.875a.45.45 0 0 0-.437.437V16c0 .246.19.438.437.438m9.816-6.508a.68.68 0 0 1 .465 0l3.281 1.312c.274.11.438.356.438.602 0 1.75-.71 4.62-3.691 5.879a.84.84 0 0 1-.52 0C8.684 16.465 8 13.593 8 11.843c0-.245.164-.491.41-.6zm2.844 2.351-2.597-1.039v5.14c1.859-.902 2.488-2.706 2.597-4.1' />
    </g>
    <defs>
      <clipPath id='ea69e5bccfcc319ddea58efd40d04d94__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileShieldSmBoldIcon);
export default ForwardRef;
