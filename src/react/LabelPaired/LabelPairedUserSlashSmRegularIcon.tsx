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
      <path d='M12.5 7.25a3.3 3.3 0 0 1-.41 1.64 3.46 3.46 0 0 1-1.067 1.231l-.738-.574q.602-.355.985-.957.355-.602.355-1.34-.027-1.12-.766-1.86-.738-.738-1.859-.765-.93.027-1.586.547a2.57 2.57 0 0 0-.93 1.367l-.738-.574a3.6 3.6 0 0 1 1.258-1.586A3.6 3.6 0 0 1 9 3.75q1.476.027 2.488 1.012.985 1.011 1.012 2.488m1.422 9.625.902.71a.84.84 0 0 1-.52.165H3.696a.73.73 0 0 1-.574-.246.73.73 0 0 1-.246-.574q.054-2.05 1.422-3.446 1.395-1.367 3.445-1.421h.11l1.093.874H7.742q-1.667.056-2.789 1.149-1.149 1.12-1.203 2.789zM.96 3.832l16.625 13.152q.3.274.082.602-.3.3-.629.082L.414 4.543q-.3-.3-.082-.629.3-.274.629-.082' />
    </g>
    <defs>
      <clipPath id='2693838368fd9be0c8cf999453c4d0f5__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUserSlashSmRegularIcon);
export default ForwardRef;
