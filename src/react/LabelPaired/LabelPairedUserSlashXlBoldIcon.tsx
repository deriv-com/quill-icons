import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUserSlashXlBoldIcon = (
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
      <path d='M1.828 6.234 9 11.86q.094-2.483 1.781-4.125Q12.468 6.047 15 6q2.532.047 4.266 1.734Q20.954 9.47 21 12q-.046 2.109-1.266 3.703-1.218 1.547-3.187 2.11l13.031 10.171q.75.704.188 1.594-.704.75-1.594.188L.422 8.016q-.75-.704-.188-1.594.704-.75 1.594-.188m11.813 9.235q.609.28 1.359.281 1.594-.046 2.672-1.078Q18.703 13.593 18.75 12q-.046-1.593-1.078-2.672Q16.593 8.297 15 8.25q-1.593.046-2.672 1.078Q11.297 10.407 11.25 12q0 1.22.703 2.203zm-1.266 4.781 2.86 2.25h-2.391q-2.344.046-3.985 1.5-1.687 1.454-2.062 3.75H21.89l2.718 2.156a1.4 1.4 0 0 1-.515.094H5.906q-.609 0-.984-.422-.422-.375-.422-.984.094-3.423 2.297-5.719Q9 20.532 12.375 20.25' />
    </g>
    <defs>
      <clipPath id='ff80c87c3a6407790f92d9e7df499dcf__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUserSlashXlBoldIcon);
export default ForwardRef;
