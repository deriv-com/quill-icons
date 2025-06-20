import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBellSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6.063 4.188A.45.45 0 0 1 6.5 3.75a.47.47 0 0 1 .438.438v.464c2.187.22 3.937 2.078 3.937 4.348v.82c0 1.176.465 2.325 1.313 3.172l.082.082c.218.219.355.547.355.848 0 .683-.547 1.23-1.23 1.23H1.578c-.683-.027-1.203-.546-1.203-1.23 0-.328.11-.629.355-.848l.055-.082c.848-.848 1.34-1.996 1.34-3.172V9a4.366 4.366 0 0 1 3.938-4.348zM6.5 5.5A3.507 3.507 0 0 0 3 9v.82c0 1.422-.574 2.79-1.586 3.801l-.082.055a.44.44 0 0 0-.082.246c0 .191.137.328.328.328h9.817c.19 0 .355-.137.355-.328 0-.082-.055-.164-.11-.246l-.081-.055a5.4 5.4 0 0 1-1.586-3.828V9c0-1.914-1.559-3.5-3.5-3.5zm-.848 10.8a.89.89 0 0 0 .848.575.88.88 0 0 0 .82-.574c.082-.219.328-.356.547-.274a.46.46 0 0 1 .274.575A1.745 1.745 0 0 1 6.5 17.75a1.75 1.75 0 0 1-1.668-1.148.46.46 0 0 1 .273-.575c.22-.082.465.055.547.274' />
    </g>
    <defs>
      <clipPath id='0945a4030a6f0070ffa39c1f9d100449__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBellSmRegularIcon);
export default ForwardRef;
