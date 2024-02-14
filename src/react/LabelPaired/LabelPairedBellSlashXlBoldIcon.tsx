import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBellSlashXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m1.828 6.234 6.797 5.344q1.688-2.672 4.875-3.234V7.5q0-.656.422-1.078Q14.343 6 15 6t1.078.422q.422.421.422 1.078v.844q2.625.469 4.266 2.39 1.688 1.923 1.734 4.641v1.547q.047 3.28 2.063 5.86l.703.89q.375.516.187 1.078l4.125 3.234q.75.704.188 1.594-.704.75-1.594.188L.422 8.016q-.75-.704-.188-1.594.704-.75 1.594-.188m8.578 6.704 10.735 8.437a11.3 11.3 0 0 1-.891-4.453v-1.547q-.047-2.062-1.406-3.469-1.407-1.36-3.469-1.406h-.75q-1.359 0-2.484.656-1.125.704-1.735 1.781M19.031 25.5H5.625q-.703-.047-1.031-.656-.235-.61.14-1.172l.704-.89q2.014-2.58 2.062-5.813v-.563l2.203 1.735a12 12 0 0 1-1.828 5.109h8.297zM18 27q0 1.22-.89 2.11T15 30q-1.219 0-2.11-.89T12 27h6' />
    </g>
    <defs>
      <clipPath id='daf9c6ccc3d8bf60c170f69a3c00480f__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBellSlashXlBoldIcon);
export default ForwardRef;
