import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUserSlashSmRegularIcon = (
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
      <path d='M12.5 7.25a3.48 3.48 0 0 1-1.504 2.871l-.71-.574a2.63 2.63 0 0 0 1.339-2.297A2.626 2.626 0 0 0 9 4.625c-1.203 0-2.215.82-2.543 1.914l-.71-.574C6.237 4.68 7.522 3.75 9 3.75c1.914 0 3.5 1.586 3.5 3.5m1.422 9.625.875.71a.76.76 0 0 1-.492.165H3.668a.794.794 0 0 1-.793-.793c0-2.707 2.16-4.895 4.867-4.895h.082l1.121.876H7.742a4.004 4.004 0 0 0-3.992 3.937zM.934 3.859l16.652 13.125c.164.137.219.438.055.602a.41.41 0 0 1-.602.082L.414 4.543c-.191-.137-.246-.438-.082-.602.137-.191.438-.246.602-.082' />
    </g>
    <defs>
      <clipPath id='631df03384d1096a5522c2c4a8281b46__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUserSlashSmRegularIcon);
export default ForwardRef;
