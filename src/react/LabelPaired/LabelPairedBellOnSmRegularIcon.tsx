import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBellOnSmRegularIcon = (
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
      <path d='M16.82 3.996a.45.45 0 0 1-.191.602l-1.75.875c-.219.109-.492 0-.602-.192a.45.45 0 0 1 .192-.601l1.75-.875a.45.45 0 0 1 .601.191m-8.257.192A.45.45 0 0 1 9 3.75a.47.47 0 0 1 .438.438v.464c2.187.22 3.937 2.078 3.937 4.348v.82c0 1.176.465 2.325 1.313 3.172l.082.082c.218.219.355.547.355.848 0 .683-.547 1.23-1.23 1.23H4.078c-.683-.027-1.203-.546-1.203-1.23 0-.328.11-.629.355-.848l.055-.082a4.54 4.54 0 0 0 1.34-3.199V9a4.366 4.366 0 0 1 3.938-4.348zM9 5.5A3.507 3.507 0 0 0 5.5 9v.82c0 1.422-.574 2.79-1.586 3.801l-.082.082c-.055.055-.11.137-.11.219 0 .191.165.355.356.355h9.817a.36.36 0 0 0 .355-.355c0-.082-.055-.164-.11-.219l-.081-.082a5.38 5.38 0 0 1-1.586-3.8V9c0-1.914-1.559-3.5-3.5-3.5zm-.848 10.8a.89.89 0 0 0 .848.575.88.88 0 0 0 .82-.574c.082-.219.328-.356.547-.274a.46.46 0 0 1 .274.575A1.745 1.745 0 0 1 9 17.75a1.75 1.75 0 0 1-1.668-1.148.46.46 0 0 1 .273-.575c.22-.082.465.055.547.274M.25 8.563a.45.45 0 0 1 .438-.437h2.187a.47.47 0 0 1 .438.438.45.45 0 0 1-.438.437H.688a.43.43 0 0 1-.438-.437m14.875-.437h2.188a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437h-2.188a.43.43 0 0 1-.437-.437.45.45 0 0 1 .437-.438M1.344 4.598a.45.45 0 0 1-.192-.602c.11-.219.383-.3.602-.191l1.75.875c.219.11.3.383.191.601-.11.192-.382.301-.601.192z' />
    </g>
    <defs>
      <clipPath id='998145fa1f71a44afc327d6b0340a768__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBellOnSmRegularIcon);
export default ForwardRef;
