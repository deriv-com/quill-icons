import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBellSlashSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={22}
    viewBox='0 0 18 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10.586 14.25v.027l1.121.875H4.078c-.683 0-1.23-.546-1.23-1.23 0-.3.136-.629.355-.848l.082-.082c.848-.848 1.34-1.996 1.34-3.172v-.273l.848.656a5.58 5.58 0 0 1-1.559 3.418l-.082.055a.44.44 0 0 0-.082.246c0 .191.137.328.328.328zM8.562 4.652v-.465A.45.45 0 0 1 9 3.75a.47.47 0 0 1 .438.438v.464c2.187.22 3.937 2.078 3.937 4.348v.82c0 1.176.465 2.325 1.313 3.172l.082.082c0 .028.027.028.054.055l-2.05-1.613A5.1 5.1 0 0 1 12.5 9.82V9c0-1.914-1.586-3.5-3.5-3.5-.984 0-1.887.41-2.516 1.066l-.683-.546a4.32 4.32 0 0 1 2.762-1.368m-.41 11.649a.89.89 0 0 0 .848.574.88.88 0 0 0 .82-.574c.082-.219.328-.356.547-.274.246.082.356.328.274.575A1.745 1.745 0 0 1 9 17.75a1.75 1.75 0 0 1-1.668-1.148.46.46 0 0 1 .273-.575c.22-.082.465.055.547.274M.934 3.859l16.652 13.125c.164.137.219.438.055.602a.41.41 0 0 1-.602.082L.414 4.543c-.191-.137-.246-.438-.082-.602.137-.191.438-.246.602-.082' />
    </g>
    <defs>
      <clipPath id='0bec96fb36c020ef020a60449c836a46__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBellSlashSmRegularIcon);
export default ForwardRef;
